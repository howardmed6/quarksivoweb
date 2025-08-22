import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const BmpToPdfPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "BMP a PDF — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo BMP." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el PDF." }
    ],
    "image": "https://corquark.com/assets/ejemplos/bmp-pdf-ejemplo.jpg",
    "url": "https://corquark.com/bmp-a-pdf",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Por qué convertir BMP a PDF?",
      "acceptedAnswer":{"@type":"Answer","text":"El PDF optimiza significativamente el tamaño del archivo BMP sin pérdida de calidad visual."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>BMP a PDF — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte BMP a PDF gratis. Reduce drásticamente el tamaño manteniendo calidad. Optimiza archivos grandes." />
        <link rel="canonical" href="https://corquark.com/bmp-a-pdf" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir BMP a PDF</h1>
        <p className="hero-description">
          Convierte tus BMP a PDF reduciendo significativamente el tamaño sin perder calidad. Perfecto para optimizar archivos grandes.
        </p>
      </div>

      <BaseConversionPage
        title="BMP a PDF"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="bmp"
        toFormat="pdf"
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

export default BmpToPdfPage;