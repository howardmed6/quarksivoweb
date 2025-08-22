import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const AvifToJpgPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "AVIF a JPG — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo AVIF." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el JPG." }
    ],
    "image": "https://corquark.com/assets/ejemplos/avif-jpg-ejemplo.jpg",
    "url": "https://corquark.com/avif-a-jpg",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Se pierde calidad al convertir AVIF a JPG?",
      "acceptedAnswer":{"@type":"Answer","text":"Con configuración de alta calidad, la conversión mantiene excelente calidad visual para uso web."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>AVIF a JPG — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte AVIF a JPG gratis. Máxima compatibilidad web manteniendo calidad. Optimiza tamaño, mejora calidad o reduce ruido." />
        <link rel="canonical" href="https://corquark.com/avif-a-jpg" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir AVIF a JPG</h1>
        <p className="hero-description">
          Convierte tus AVIF a JPG para máxima compatibilidad web. Mantén calidad mientras aseguras soporte universal.
        </p>
      </div>

      <BaseConversionPage
        title="AVIF a JPG"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="avif"
        toFormat="jpg"
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

export default AvifToJpgPage;