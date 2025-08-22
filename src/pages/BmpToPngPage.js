// ========== BMP a PNG ==========
import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const BmpToPngPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "BMP a PNG — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo BMP." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el PNG." }
    ],
    "image": "https://corquark.com/assets/ejemplos/bmp-png-ejemplo.jpg",
    "url": "https://corquark.com/bmp-a-png",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿PNG es mejor que BMP?",
      "acceptedAnswer":{"@type":"Answer","text":"PNG ofrece mejor compresión sin pérdidas y soporte para transparencia, siendo más eficiente que BMP."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>BMP a PNG — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte BMP a PNG gratis. Mejor compresión sin pérdidas y soporte para transparencia. Optimiza para web." />
        <link rel="canonical" href="https://corquark.com/bmp-a-png" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir BMP a PNG</h1>
        <p className="hero-description">
          Convierte tus BMP a PNG para mejor compresión y soporte de transparencia. Ideal para web.
        </p>
      </div>

      <BaseConversionPage
        title="BMP a PNG"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="bmp"
        toFormat="png"
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

export default BmpToPngPage;