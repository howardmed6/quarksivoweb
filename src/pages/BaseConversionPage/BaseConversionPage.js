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
  const handleConvert = async () => {
    if (!isFileValid || !file) return;

    setIsConverting(true);
    setConvertedImage(null);
    setConversionResult(null);

    try {
      // Crear FormData para enviar archivo y opciones
      const formData = new FormData();
      formData.append('file', file);
      formData.append('options', JSON.stringify(selectedOptions));

      console.log('Enviando archivo:', file.name);
      console.log('Opciones seleccionadas:', selectedOptions);
      console.log('URL destino:', AZURE_FUNCTION_URL);

      // Hacer petición a Azure Function
      const response = await fetch(AZURE_FUNCTION_URL, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || `Error HTTP: ${response.status}`);
      }

      if (result.success) {
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
        
        console.log('✅ Conversión exitosa:', result);
      } else {
        throw new Error(result.error || 'Error desconocido en la conversión');
      }

    } catch (error) {
      console.error('❌ Error en conversión:', error);
      alert(`Error en la conversión: ${error.message}`);
    } finally {
      setIsConverting(false);
    }
  };

  const handleDownload = () => {
    if (!convertedImage) return;

    try {
      // Crear link de descarga
      const link = document.createElement('a');
      link.href = convertedImage;
      link.download = `${file.name.split('.')[0]}_converted.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log('✅ Descarga iniciada');
    } catch (error) {
      console.error('❌ Error en descarga:', error);
      alert('Error al descargar el archivo');
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