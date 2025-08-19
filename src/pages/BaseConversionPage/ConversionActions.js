import React from 'react';

const ConversionActions = ({ 
  isFileValid,
  isConverting,
  convertedImage,
  file,
  toFormat,
  onConvert,
  onDownload,
  onReset
}) => {
  return (
    <div className="action-buttons">
      <button 
        className={`convert-btn ${isFileValid && !isConverting ? 'active' : 'disabled'}`}
        onClick={onConvert}
        disabled={!isFileValid || isConverting}
      >
        {isConverting ? '🔄 Convirtiendo...' : '🚀 Convertir'}
      </button>
      
      <button 
        className={`download-btn ${convertedImage ? 'active' : 'disabled'}`}
        onClick={onDownload}
        disabled={!convertedImage}
      >
        📥 Descargar {toFormat.toUpperCase()}
      </button>

      {(file || convertedImage) && (
        <button 
          className="reset-btn"
          onClick={onReset}
        >
          🔄 Nuevo archivo
        </button>
      )}
    </div>
  );
};

export default ConversionActions;