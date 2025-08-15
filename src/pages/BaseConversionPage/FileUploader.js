// FileUploader.js
import React, { useState, useCallback } from 'react';

const FileUploader = ({
  acceptedTypes,
  conversionOptions,
  selectedOptions,
  onFileChange,
  onFileValidation,
  onOptionToggle,
  file,
  isFileValid
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const validateFile = (file) => {
    if (!file) return false;
    const fileType = file.type.toLowerCase();
    const fileName = file.name.toLowerCase();
    
    return acceptedTypes.some(type => 
      fileType.includes(type) || fileName.endsWith(`.${type}`)
    );
  };

  const simulateUpload = (file) => {
    setIsUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          onFileValidation(validateFile(file));
          return 100;
        }
        return prev + 10;
      });
    }, 100);
  };

  const handleFiles = (files) => {
    if (files && files[0]) {
      const selectedFile = files[0];
      onFileChange(selectedFile);
      simulateUpload(selectedFile);
    }
  };

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  }, []);

  const handleFileInput = (e) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  return (
    <div className="upload-section">
      {/* Barra de progreso */}
      {(isUploading || file) && (
        <div className="upload-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
          <span className="progress-text">
            {isUploading ? `Cargando... ${uploadProgress}%` : 'Archivo cargado'}
          </span>
        </div>
      )}

      {/* Área de carga */}
      <div 
        className={`upload-area ${dragActive ? 'drag-active' : ''} ${file ? 'has-file' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {!file ? (
          <div className="upload-content">
            <div className="upload-icon">+</div>
            <p className="upload-text">
              Haz clic o arrastra tu archivo aquí
            </p>
            <p className="upload-info">
              Archivos soportados: {acceptedTypes.map(type => type.toUpperCase()).join(', ')}
            </p>
            <p className="upload-limit">
              Tamaño máximo: 50MB | Hasta 10 archivos
            </p>
          </div>
        ) : (
          <div className="file-preview">
            <div className="file-info">
              <span className="file-icon">📄</span>
              <div className="file-details">
                <p className="file-name">{file.name}</p>
                <p className="file-size">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
              <div className={`file-status ${isFileValid ? 'valid' : 'invalid'}`}>
                {isFileValid ? '✓' : '✗'}
              </div>
            </div>
          </div>
        )}
        <input
          type="file"
          className="file-input"
          onChange={handleFileInput}
          accept={acceptedTypes.map(type => `.${type}`).join(',')}
        />
      </div>

      {/* Opciones de conversión */}
      {conversionOptions.length > 0 && (
        <div className="conversion-options">
          <h3>Opciones adicionales</h3>
          <div className="options-row">
            {conversionOptions.map(option => (
              <label key={option.id} className="option-item">
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option.id)}
                  onChange={() => onOptionToggle(option.id)}
                />
                <span className="option-checkmark"></span>
                <div className="option-content">
                  <span className="option-icon">{option.icon}</span>
                  <span className="option-text">{option.label}</span>
                </div>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;