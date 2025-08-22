// ========== PNG a BMP ==========
import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const PngToBmpPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "PNG a BMP — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo PNG." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el BMP." }
    ],
    "image": "https://corquark.com/assets/ejemplos/png-bmp-ejemplo.jpg",
    "url": "https://corquark.com/png-a-bmp",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Se mantiene la transparencia al convertir PNG a BMP?",
      "acceptedAnswer":{"@type":"Answer","text":"BMP no soporta transparencia. Las áreas transparentes se convertirán a fondo blanco."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>PNG a BMP — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte PNG a BMP gratis. Formato sin compresión para máxima calidad. La transparencia se convierte a fondo blanco." />
        <link rel="canonical" href="https://corquark.com/png-a-bmp" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir PNG a BMP</h1>
        <p className="hero-description">
          Convierte tus PNG a BMP para obtener máxima calidad sin compresión. Ideal para sistemas Windows.
        </p>
      </div>

      <BaseConversionPage
        title="PNG a BMP"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="png"
        toFormat="bmp"
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

export default PngToBmpPage;