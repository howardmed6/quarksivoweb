// ========== BMP a JPG ==========
import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const BmpToJpgPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "BMP a JPG — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo BMP." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el JPG." }
    ],
    "image": "https://corquark.com/assets/ejemplos/bmp-jpg-ejemplo.jpg",
    "url": "https://corquark.com/bmp-a-jpg",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Cuánto se reduce el tamaño al convertir BMP a JPG?",
      "acceptedAnswer":{"@type":"Answer","text":"JPG puede reducir el tamaño de un BMP hasta 90% manteniendo buena calidad visual."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>BMP a JPG — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte BMP a JPG gratis. Reduce hasta 90% el tamaño del archivo. Optimiza tamaño, mejora calidad o reduce ruido." />
        <link rel="canonical" href="https://corquark.com/bmp-a-jpg" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir BMP a JPG</h1>
        <p className="hero-description">
          Convierte tus BMP a JPG y reduce drásticamente el tamaño del archivo. Perfecto para compartir en web.
        </p>
      </div>

      <BaseConversionPage
        title="BMP a JPG"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="bmp"
        toFormat="jpg"
        functionType = "image"
        acceptedTypes={['bmp']}
        conversionOptions={conversionOptions}
        comboType="combo2"
      />

      <ExtraSection title="" background="#ffffff" color="#000000">
      </ExtraSection>
    </div>
  );
};

export default BmpToJpgPage;
