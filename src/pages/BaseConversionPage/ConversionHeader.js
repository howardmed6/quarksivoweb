import React from 'react';

const ConversionHeader = ({ 
  icon, 
  title, 
  fromFormat, 
  toFormat 
}) => {
  return (
    <div className="conversion-header">
      <div className="conversion-title">
        <span className="conversion-icon">{icon}</span>
        <h1>{title}</h1>
      </div>
      <p className="conversion-description">
        Convierte fácilmente tus archivos {fromFormat.toUpperCase()} a {toFormat.toUpperCase()}
      </p>
    </div>
  );
};

export default ConversionHeader;