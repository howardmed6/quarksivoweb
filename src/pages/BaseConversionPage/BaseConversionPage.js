import React, { useState, useCallback } from 'react';
import FileUploader from './FileUploader.js';
import Sidebar from './Sidebar.js';
import ConversionHeader from './ConversionHeader.js';
import ConversionActions from './ConversionActions.js';
import RateLimitModal from './RateLimitModal.js';
import { relatedToolsCombos } from './relatedToolsData.js';
import '../../styles/conversion-page.css';

const BaseConversionPage = ({
  title,
  icon,
  fromFormat,
  toFormat,
  functionType = "document",
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
  const BASE_URL = `https://api.corquark.com/api/${functionType}`;
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
          <ConversionHeader 
            icon={icon}
            title={title}
            fromFormat={fromFormat}
            toFormat={toFormat}
          />

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

          <ConversionActions 
            isFileValid={isFileValid}
            isConverting={isConverting}
            convertedImage={convertedImage}
            file={file}
            toFormat={toFormat}
            onConvert={handleConvert}
            onDownload={handleDownload}
            onReset={handleReset}
          />
        </main>
      </div>

      <RateLimitModal 
        showRateLimitModal={showRateLimitModal}
        rateLimitInfo={rateLimitInfo}
        closeRateLimitModal={closeRateLimitModal}
      />
    </div>
  );
};

export default BaseConversionPage;