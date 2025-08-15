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

  const handleConvert = () => {
    if (!isFileValid || !file) return;
    
    setIsConverting(true);
    
    // Aquí irá la petición a Azure Functions
    console.log('Convirtiendo archivo:', file.name);
    console.log('Opciones seleccionadas:', selectedOptions);
    
    // Simulación temporal
    setTimeout(() => {
      setIsConverting(false);
      alert('¡Conversión completada! (Simulación)');
    }, 2000);
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
    // Aquí puedes implementar la navegación
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

          {/* Botones de acción */}
          <div className="action-buttons">
            <button 
              className={`convert-btn ${isFileValid && !isConverting ? 'active' : 'disabled'}`}
              onClick={handleConvert}
              disabled={!isFileValid || isConverting}
            >
              {isConverting ? 'Convirtiendo...' : 'Convertir'}
            </button>
            
            <button className="download-btn disabled">
              Descargar
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BaseConversionPage;