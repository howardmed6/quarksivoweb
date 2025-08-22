import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const TiffToWebpPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "TIFF a WebP — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo TIFF." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el WebP." }
    ],
    "image": "https://corquark.com/assets/ejemplos/tiff-webp-ejemplo.jpg",
    "url": "https://corquark.com/tiff-a-webp",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿WebP ofrece mejor compresión que otros formatos?",
      "acceptedAnswer":{"@type":"Answer","text":"Sí, WebP ofrece hasta 30% mejor compresión manteniendo alta calidad, ideal para web moderna."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>TIFF a WebP — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte TIFF a WebP gratis. Reduce hasta 30% el tamaño manteniendo calidad. Ideal para web moderna y carga rápida." />
        <link rel="canonical" href="https://corquark.com/tiff-a-webp" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir TIFF a WebP</h1>
        <p className="hero-description">
          Convierte tus TIFF a WebP reduciendo hasta 30% el tamaño manteniendo calidad. Ideal para web moderna y carga rápida.
        </p>
      </div>

      <BaseConversionPage
        title="TIFF a WebP"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="tiff"
        toFormat="webp"
        functionType = "image"
        acceptedTypes={['tiff', 'tif']}
        conversionOptions={conversionOptions}
        comboType="combo2"
      />

      <ExtraSection title="" background="#ffffff" color="#000000">
      </ExtraSection>
    </div>
  );
};

export default TiffToWebpPage;