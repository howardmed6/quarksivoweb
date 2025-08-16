import React, { useState, useCallback } from 'react';
import FileUploader from './FileUploader.js';
import Sidebar from './Sidebar.js';
import { relatedToolsCombos } from './relatedToolsData.js';
import '../../styles/conversion-page.css';

const BaseConversionPage = ({
  title,
  icon,
  fromFormat,
  toFormat,
  acceptedTypes,
  conversionOptions = [],
  comboType = 'combo1'
}) => {
  const [file, setFile] = useState(null);
  const [isFileValid, setIsFileValid] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isConverting, setIsConverting] = useState(false);
  const [convertedImage, setConvertedImage] = useState(null);
  const [conversionResult, setConversionResult] = useState(null);

  const AZURE_FUNCTION_URL = 'https://quarksivof-hsbqfddpf4e5a7gj.canadacentral-01.azurewebsites.net/api/convert/jpg-to-png';

  // Usar useCallback para evitar re-renders innecesarios
  const handleFileChange = useCallback((newFile) => {
    console.log('📁 Archivo seleccionado:', newFile?.name);
    setFile(newFile);
  }, []);

  const handleFileValidation = useCallback((isValid) => {
    console.log('✅ Validación archivo:', isValid);
    setIsFileValid(isValid);
  }, []);

  const handleOptionToggle = useCallback((optionId) => {
    setSelectedOptions(prev =>
      prev.includes(optionId)
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId]
    );
  }, []);

  const handleConvert = async () => {
    if (!isFileValid || !file) {
      console.warn('⚠️ No se puede convertir: archivo inválido o no seleccionado');
      return;
    }

    setIsConverting(true);
    setConvertedImage(null);
    setConversionResult(null);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('options', JSON.stringify(selectedOptions));

      console.log('📤 Enviando archivo:', file.name);
      console.log('📦 Tamaño:', (file.size / 1024 / 1024).toFixed(2), 'MB');
      console.log('⚙️ Opciones:', selectedOptions);

      const response = await fetch(AZURE_FUNCTION_URL, {
        method: 'POST',
        body: formData,
      });

      console.log('📥 Respuesta recibida:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Error response:', errorText);
        
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch {
          errorData = { error: errorText || `Error HTTP ${response.status}` };
        }
        
        throw new Error(errorData.error || `Error HTTP: ${response.status}`);
      }

      const result = await response.json();
      console.log('📄 Respuesta exitosa:', {
        success: result.success,
        hasImage: !!result.image,
        imageLength: result.image?.length
      });

      if (result.success && result.image) {
        // Validación básica
        if (!result.image.startsWith('data:image/png;base64,')) {
          throw new Error('Formato de respuesta inválido - no es data URL PNG');
        }
        
        console.log('🖼️ Imagen PNG recibida correctamente');
        setConvertedImage(result.image);
        setConversionResult({
          message: result.message,
          originalSize: result.originalSize || 0,
          processedSize: result.processedSize || 0,
          appliedOptions: result.appliedOptions || [],
          processingTime: result.processingTime || 0,
          compressionRatio: result.originalSize && result.processedSize 
            ? ((result.originalSize - result.processedSize) / result.originalSize * 100).toFixed(1)
            : '0'
        });
        
        console.log('✅ Conversión exitosa');
      } else {
        throw new Error(result.error || 'No se recibió imagen convertida');
      }

    } catch (error) {
      console.error('❌ Error en conversión:', error);
      alert(`Error en la conversión: ${error.message}`);
    } finally {
      setIsConverting(false);
    }
  };

  const handleDownload = () => {
    if (!convertedImage) {
      console.warn('⚠️ No hay imagen para descargar');
      return;
    }

    try {
      console.log('🔍 Iniciando descarga...');
      
      // Método con Blob
      const base64Data = convertedImage.split(',')[1];
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'image/png' });
      
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `${file.name.split('.')[0]}_converted.png`;
      document.body.appendChild(link);
      link.click();
      
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      console.log('✅ Descarga completada');
      
    } catch (error) {
      console.error('❌ Error en descarga:', error);
      alert('Error al descargar el archivo. Intenta de nuevo.');
    }
  };

  const handleToolNavigation = useCallback((route) => {
    console.log(`Navegando a: ${route}`);
  }, []);

  const handleReset = useCallback(() => {
    console.log('🔄 Reseteando componente');
    setFile(null);
    setIsFileValid(false);
    setSelectedOptions([]);
    setConvertedImage(null);
    setConversionResult(null);
  }, []);

  return (
    <div className="conversion-page">
      <div className="conversion-container">
        <Sidebar 
          relatedTools={relatedToolsCombos[comboType]}
          onToolClick={handleToolNavigation}
        />

        <main className="conversion-main">
          <div className="conversion-header">
            <div className="conversion-title">
              <span className="conversion-icon">{icon}</span>
              <h1>{title}</h1>
            </div>
            <p className="conversion-description">
              Convierte fácilmente tus archivos {fromFormat.toUpperCase()} a {toFormat.toUpperCase()}
            </p>
          </div>

          <FileUploader
            acceptedTypes={acceptedTypes}
            conversionOptions={conversionOptions}
            selectedOptions={selectedOptions}
            onFileChange={handleFileChange}
            onFileValidation={handleFileValidation}
            onOptionToggle={handleOptionToggle}
            file={file}
            isFileValid={isFileValid}
          />

          {conversionResult && (
            <div className="conversion-result">
              <div className="result-info">
                <h3>✅ {conversionResult.message}</h3>
                <div className="result-stats">
                  <p><strong>Tiempo de procesamiento:</strong> {conversionResult.processingTime}ms</p>
                  {conversionResult.originalSize > 0 && (
                    <>
                      <p><strong>Tamaño original:</strong> {(conversionResult.originalSize / 1024 / 1024).toFixed(2)} MB</p>
                      <p><strong>Tamaño procesado:</strong> {(conversionResult.processedSize / 1024 / 1024).toFixed(2)} MB</p>
                      {parseFloat(conversionResult.compressionRatio) > 0 && (
                        <p><strong>Reducción:</strong> {conversionResult.compressionRatio}%</p>
                      )}
                    </>
                  )}
                  {conversionResult.appliedOptions.length > 0 && (
                    <p><strong>Opciones aplicadas:</strong> {conversionResult.appliedOptions.join(', ')}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="action-buttons">
            <button 
              className={`convert-btn ${isFileValid && !isConverting ? 'active' : 'disabled'}`}
              onClick={handleConvert}
              disabled={!isFileValid || isConverting}
            >
              {isConverting ? '🔄 Convirtiendo...' : '🚀 Convertir'}
            </button>
            
            <button 
              className={`download-btn ${convertedImage ? 'active' : 'disabled'}`}
              onClick={handleDownload}
              disabled={!convertedImage}
            >
              📥 Descargar PNG
            </button>

            {(file || convertedImage) && (
              <button 
                className="reset-btn"
                onClick={handleReset}
              >
                🔄 Nuevo archivo
              </button>
            )}
          </div>

          {convertedImage && (
            <div className="image-preview">
              <h3>Vista previa:</h3>
              <img 
                src={convertedImage} 
                alt="Imagen convertida" 
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '400px', 
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default BaseConversionPage;