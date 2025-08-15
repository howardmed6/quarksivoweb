import React from 'react';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage'; // Actualizada la ruta

const JpgToPngPage = () => {
  const conversionOptions = [
    {
      id: 'optimize-size',
      icon: '🗜️',
      label: 'Disminuir tamaño en lo posible'
    },
    {
      id: 'improve-quality',
      icon: '✨',
      label: 'Mejorar calidad'
    },
    {
      id: 'reduce-noise',
      icon: '🎯',
      label: 'Reducir ruido'
    }
  ];

  return (
    <BaseConversionPage
      title="JPG a PNG"
      icon="🔄"
      fromFormat="jpg"
      toFormat="png"
      acceptedTypes={['jpg', 'jpeg']}
      conversionOptions={conversionOptions}
      comboType="combo2" // Usando combo2 para esta página
    />
  );
};

export default JpgToPngPage;