import React from 'react';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';

const JpgToWebpPage = () => {
  const conversionOptions = [
    {
      id: 'optimize-size',
      icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />,
      label: 'Disminuir tamaño en lo posible'
    },
    {
      id: 'improve-quality',
      icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />,
      label: 'Mejorar calidad'
    },
    {
      id: 'reduce-noise',
      icon: <img src={noiseIcon} alt="ruido" width={24} height={24} />,
      label: 'Reducir ruido'
    }
  ];

  return (
    <BaseConversionPage
      title="JPG a WEBP"
      icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
      fromFormat="jpg"
      toFormat="webp"
      acceptedTypes={['jpg', 'jpeg']}
      conversionOptions={conversionOptions}
      comboType="combo2"
    />
  );
};

export default JpgToWebpPage;