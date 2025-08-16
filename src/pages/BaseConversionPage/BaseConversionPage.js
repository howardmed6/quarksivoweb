import React, { useState } from 'react';
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
  // Función adicional para validar la imagen convertida (AGREGAR ANTES de handleConvert)
  const validateConvertedImage = (imageData) => {
    if (!imageData) return false;
    
    // Verificar que es un data URL
    if (!imageData.startsWith('data:image/')) {
      console.error('❌ No es un data URL válido');
      return false;
    }
    
    // Verificar que tiene contenido base64
    const parts = imageData.split(',');
    if (parts.length !== 2) {
      console.error('❌ Data URL mal formado');
      return false;
    }
    
    // Verificar longitud mínima
    if (parts[1].length < 100) {
      console.error('❌ Imagen demasiado pequeña, posiblemente corrupta');
      return false;
    }
    
    console.log('✅ Imagen validada correctamente');
    return true;
  };

  // REEMPLAZA la función handleConvert existente por esta:
  const handleConvert = async () => {
    if (!isFileValid || !file) return;

    setIsConverting(true);
    setConvertedImage(null);
    setConversionResult(null);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('options', JSON.stringify(selectedOptions));

      console.log('📤 Enviando archivo:', file.name);
      console.log('📦 Tamaño archivo:', (file.size / 1024 / 1024).toFixed(2), 'MB');
      console.log('⚙️ Opciones:', selectedOptions);

      const response = await fetch(AZURE_FUNCTION_URL, {
        method: 'POST',
        body: formData,
      });

      console.log('📥 Response status:', response.status);
      console.log('📥 Response headers:', [...response.headers.entries()]);

      const result = await response.json();
      console.log('📄 Response data keys:', Object.keys(result));

      if (!response.ok) {
        throw new Error(result.error || `Error HTTP: ${response.status}`);
      }

      if (result.success && result.image) {
        console.log('🖼️ Imagen recibida, longitud:', result.image.length);
        
        // Validar imagen antes de establecerla
        if (validateConvertedImage(result.image)) {
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
          throw new Error('Imagen convertida inválida o corrupta');
        }
      } else {
        throw new Error(result.error || 'No se recibió imagen convertida');
      }

    } catch (error) {
      console.error('❌ Error detallado:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
      
      alert(`Error en la conversión: ${error.message}`);
    } finally {
      setIsConverting(false);
    }
  };

// REEMPLAZA la función handleDownload existente por esta:
  const handleDownload = () => {
    if (!convertedImage) {
      console.error('❌ No hay imagen convertida para descargar');
      return;
    }

    try {
      console.log('🔍 Iniciando descarga...');
      console.log('Data URL length:', convertedImage.length);
      
      // Validar que es un data URL válido
      if (!convertedImage.startsWith('data:image/')) {
        throw new Error('Formato de imagen inválido');
      }
      
      // Método 1: Conversión a Blob (Recomendado)
      const byteCharacters = atob(convertedImage.split(',')[1]);
      const byteNumbers = new Array(byteCharacters.length);
      
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'image/png' });
      
      // Crear URL del blob
      const blobUrl = URL.createObjectURL(blob);
      
      // Crear y ejecutar descarga
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `${file.name.split('.')[0]}_converted.png`;
      link.style.display = 'none';
      
      document.body.appendChild(link);
      link.click();
      
      // Limpiar
      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);
      }, 100);
      
      console.log('✅ Descarga iniciada exitosamente');
      
    } catch (error) {
      console.error('❌ Error en descarga:', error);
      
      // Método alternativo: descarga directa con data URL
      try {
        console.log('🔄 Intentando método alternativo...');
        
        const link = document.createElement('a');
        link.href = convertedImage;
        link.download = `${file.name.split('.')[0]}_converted.png`;
        link.target = '_blank';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        console.log('✅ Descarga alternativa ejecutada');
        
      } catch (altError) {
        console.error('❌ Error en método alternativo:', altError);
        alert(`Error al descargar el archivo: ${error.message}`);
      }
    }
  };
  const toggleOption = (optionId) => {
    setSelectedOptions(prev =>
      prev.includes(optionId)
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId]
    );
  };

  const handleToolNavigation = (route) => {
    console.log(`Navegando a: ${route}`);
    // Aquí puedes implementar la navegación con react-router
    // window.location.href = route; // Navegación simple
  };

  // Reset function para limpiar estado
  const handleReset = () => {
    setFile(null);
    setIsFileValid(false);
    setSelectedOptions([]);
    setConvertedImage(null);
    setConversionResult(null);
  };

  return (
    <div className="conversion-page">
      <div className="conversion-container">
        {/* Sidebar con opciones relacionadas */}
        <Sidebar 
          relatedTools={relatedToolsCombos[comboType]}
          onToolClick={handleToolNavigation}
        />

        {/* Contenido principal */}
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

          {/* Componente de carga de archivos */}
          <FileUploader
            acceptedTypes={acceptedTypes}
            conversionOptions={conversionOptions}
            selectedOptions={selectedOptions}
            onFileChange={setFile}
            onFileValidation={setIsFileValid}
            onOptionToggle={toggleOption}
            file={file}
            isFileValid={isFileValid}
          />

          {/* Resultado de conversión */}
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

          {/* Botones de acción */}
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

          {/* Vista previa de imagen convertida */}
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