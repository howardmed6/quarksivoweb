import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const PngToTiffPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "PNG a TIFF — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo PNG." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el TIFF." }
    ],
    "image": "https://corquark.com/assets/ejemplos/png-tiff-ejemplo.jpg",
    "url": "https://corquark.com/png-a-tiff",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Se mantiene la transparencia al convertir PNG a TIFF?",
      "acceptedAnswer":{"@type":"Answer","text":"Sí, TIFF preserva la transparencia del PNG y ofrece mayor calidad para uso profesional."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>PNG a TIFF — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte PNG a TIFF gratis. Mantén transparencia y mejora calidad. Ideal para impresión profesional y archivo." />
        <link rel="canonical" href="https://corquark.com/png-a-tiff" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir PNG a TIFF</h1>
        <p className="hero-description">
          Convierte tus PNG a TIFF manteniendo transparencia y mejorando calidad. Ideal para impresión profesional y archivo.
        </p>
      </div>

      <BaseConversionPage
        title="PNG a TIFF"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="png"
        toFormat="tiff"
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

export default PngToTiffPage;