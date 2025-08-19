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
  functionType = "documents",
  acceptedTypes,
  conversionOptions = [],
  comboType = 'combo1'
}) => {
  const [file, setFile] = useState(null);
  const [isFileValid, setIsFileValid] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isConverting, setIsConverting] = useState(false);
  const [convertedImage, setConvertedImage] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [conversionResult, setConversionResult] = useState(null);
  
  // Estados para el modal de rate limiting
  const [showRateLimitModal, setShowRateLimitModal] = useState(false);
  const [rateLimitInfo, setRateLimitInfo] = useState(null);

  // URL dinámica basada en functionType y los formatos
  const BASE_URL = `https://quarksivo-a4fuc8a0grc3bjer.eastus2-01.azurewebsites.net/api/${functionType}`;
  const AZURE_FUNCTION_URL = `${BASE_URL}/${fromFormat}-to-${toFormat}`;

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
      console.log('🔗 URL:', AZURE_FUNCTION_URL);
      console.log('🔧 Tipo de función:', functionType);
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
        
        // MANEJO ESPECÍFICO PARA RATE LIMITING
        if (response.status === 429) {
          console.log('🚫 Rate limit detectado');
          setRateLimitInfo({
            message: errorData.error || 'Límite de peticiones excedido',
            resetTime: errorData.resetTime,
            maxRequests: errorData.maxRequests || 20,
            remaining: errorData.remaining || 0
          });
          setShowRateLimitModal(true);
          return;
        }
        
        // OTROS ERRORES (mantener alert normal)
        throw new Error(errorData.error || `Error HTTP: ${response.status}`);
      }

      const result = await response.json();
      console.log('📄 Respuesta exitosa:', {
        success: result.success,
        hasImage: !!result.image,
        imageLength: result.image?.length
      });

      // Mostrar información de rate limiting en consola si está disponible
      const remainingRequests = response.headers.get('X-RateLimit-Remaining');
      if (remainingRequests) {
        console.log(`📊 Peticiones restantes: ${remainingRequests}`);
      }

      if (result.success && result.image) {
        // Validación dinámica del formato
        const expectedDataUrl = `data:image/${toFormat};base64,`;
        if (!result.image.startsWith(expectedDataUrl)) {
          throw new Error(`Formato de respuesta inválido - esperado: ${toFormat.toUpperCase()}`);
        }
        
        console.log(`🖼️ Imagen ${toFormat.toUpperCase()} recibida correctamente`);
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
      
      const base64Data = convertedImage.split(',')[1];
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: `image/${toFormat}` });
      
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `${file.name.split('.')[0]}_converted.${toFormat}`;
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

  const closeRateLimitModal = () => {
    setShowRateLimitModal(false);
    setRateLimitInfo(null);
  };

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
              📥 Descargar {toFormat.toUpperCase()}
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
        </main>
      </div>

      {/* MODAL DE RATE LIMITING */}
      {showRateLimitModal && (
        <div className="rate-limit-modal-overlay" onClick={closeRateLimitModal}>
          <div className="rate-limit-modal" onClick={(e) => e.stopPropagation()}>
            <div className="rate-limit-modal-header">
              <h2>🚫 Límite de Peticiones Alcanzado</h2>
              <button className="rate-limit-modal-close" onClick={closeRateLimitModal}>
                ✕
              </button>
            </div>
            
            <div className="rate-limit-modal-body">
              <div className="rate-limit-icon">
                ⏰
              </div>
              
              <p className="rate-limit-message">
                {rateLimitInfo?.message}
              </p>
              
              <div className="rate-limit-details">
                <div className="rate-limit-stat">
                  <span className="stat-label">Límite diario:</span>
                  <span className="stat-value">{rateLimitInfo?.maxRequests || 20} peticiones</span>
                </div>
                
                <div className="rate-limit-stat">
                  <span className="stat-label">Peticiones restantes:</span>
                  <span className="stat-value">{rateLimitInfo?.remaining || 0}</span>
                </div>
                
                {rateLimitInfo?.resetTime && (
                  <div className="rate-limit-stat">
                    <span className="stat-label">Reinicio del límite:</span>
                    <span className="stat-value">
                      {new Date(rateLimitInfo.resetTime).toLocaleString('es-ES')}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="rate-limit-suggestions">
                <h4>💡 Sugerencias:</h4>
                <ul>
                  <li>Espera hasta que se restablezca tu límite diario</li>
                  <li>Optimiza tus imágenes antes de convertir para reducir peticiones</li>
                  <li>Agrupa varias conversiones si es posible</li>
                </ul>
              </div>
            </div>
            
            <div className="rate-limit-modal-footer">
              <button className="rate-limit-ok-btn" onClick={closeRateLimitModal}>
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .rate-limit-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          backdrop-filter: blur(4px);
        }

        .rate-limit-modal {
          background: white;
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          max-width: 500px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          animation: modalSlideIn 0.3s ease-out;
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(-30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .rate-limit-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 24px 0;
          border-bottom: 1px solid #e5e7eb;
        }

        .rate-limit-modal-header h2 {
          margin: 0;
          color: #dc2626;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .rate-limit-modal-close {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #6b7280;
          padding: 4px;
          border-radius: 50%;
          transition: all 0.2s;
        }

        .rate-limit-modal-close:hover {
          background-color: #f3f4f6;
          color: #374151;
        }

        .rate-limit-modal-body {
          padding: 24px;
          text-align: center;
        }

        .rate-limit-icon {
          font-size: 4rem;
          margin-bottom: 16px;
        }

        .rate-limit-message {
          font-size: 1.1rem;
          color: #374151;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .rate-limit-details {
          background-color: #f9fafb;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 24px;
          text-align: left;
        }

        .rate-limit-stat {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .rate-limit-stat:last-child {
          margin-bottom: 0;
        }

        .stat-label {
          font-weight: 500;
          color: #6b7280;
        }

        .stat-value {
          font-weight: 600;
          color: #111827;
        }

        .rate-limit-suggestions {
          text-align: left;
          background-color: #eff6ff;
          border-radius: 12px;
          padding: 20px;
        }

        .rate-limit-suggestions h4 {
          margin: 0 0 12px 0;
          color: #1d4ed8;
          font-size: 1rem;
        }

        .rate-limit-suggestions ul {
          margin: 0;
          padding-left: 20px;
        }

        .rate-limit-suggestions li {
          margin-bottom: 8px;
          color: #374151;
          line-height: 1.5;
        }

        .rate-limit-modal-footer {
          padding: 0 24px 24px;
          text-align: center;
        }

        .rate-limit-ok-btn {
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
          border: none;
          padding: 12px 32px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 1rem;
        }

        .rate-limit-ok-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
        }

        .rate-limit-ok-btn:active {
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default BaseConversionPage;