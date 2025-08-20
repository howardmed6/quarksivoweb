import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const AvifToBmpPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "AVIF a BMP — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo AVIF." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el BMP." }
    ],
    "image": "https://tu-dominio.com/assets/ejemplos/avif-bmp-ejemplo.jpg",
    "url": "https://tu-dominio.com/avif-a-bmp",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Para qué usar BMP en lugar de otros formatos?",
      "acceptedAnswer":{"@type":"Answer","text":"BMP es ideal para compatibilidad total con software legacy y aplicaciones que requieren formato sin compresión."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>AVIF a BMP — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte AVIF a BMP gratis. Máxima compatibilidad con software legacy. Sin compresión para preservar calidad original." />
        <link rel="canonical" href="https://tu-dominio.com/avif-a-bmp" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir AVIF a BMP</h1>
        <p className="hero-description">
          Convierte tus AVIF a BMP para máxima compatibilidad con software legacy. Formato sin compresión que preserva la calidad original.
        </p>
      </div>

      <BaseConversionPage
        title="AVIF a BMP"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="avif"
        toFormat="bmp"
        functionType = "image"
        acceptedTypes={['avif']}
        conversionOptions={conversionOptions}
        comboType="combo2"
      />

      <ExtraSection title="" background="#ffffff" color="#000000">
      </ExtraSection>
    </div>
  );
};

export default AvifToBmpPage;