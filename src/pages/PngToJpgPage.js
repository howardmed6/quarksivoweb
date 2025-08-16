import React from 'react';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import reloadIcon from "../assets/icons/reload.svg";
import optimizeIcon from "../assets/icons/optimize.svg";
import qualityIcon from "../assets/icons/quality.svg";

const PngToJpgPage = () => {
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
    }
  ];

  return (
    <BaseConversionPage
      title="PNG a JPG"
      icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
      fromFormat="png"
      toFormat="jpg"
      acceptedTypes={['png']}
      conversionOptions={conversionOptions}
      comboType="combo3"
    />
  );
};

export default PngToJpgPage;