import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const PngToPdfPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "PNG a PDF — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo PNG." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el PDF." }
    ],
    "image": "https://tu-dominio.com/assets/ejemplos/png-pdf-ejemplo.jpg",
    "url": "https://tu-dominio.com/png-a-pdf",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Se mantiene la transparencia al convertir PNG a PDF?",
      "acceptedAnswer":{"@type":"Answer","text":"El PDF preserva las áreas transparentes del PNG, manteniendo la calidad visual completa."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>PNG a PDF — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte PNG a PDF gratis. Mantén transparencia y calidad sin pérdidas. Optimiza tamaño y mejora calidad." />
        <link rel="canonical" href="https://tu-dominio.com/png-a-pdf" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir PNG a PDF</h1>
        <p className="hero-description">
          Convierte tus PNG a PDF preservando transparencia y calidad sin pérdidas. Perfecto para gráficos y documentos.
        </p>
      </div>

      <BaseConversionPage
        title="PNG a PDF"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="png"
        toFormat="pdf"
        functionType = "image"
        acceptedTypes={['png']}
        conversionOptions={conversionOptions}
        comboType="combo2"
      />

      <ExtraSection title="" background="#ffffff" color="#000000">
      </ExtraSection>
    </div>
  );
};

export default PngToPdfPage;