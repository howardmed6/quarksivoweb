import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const TiffToJpgPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "TIFF a JPG — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo TIFF." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el JPG." }
    ],
    "image": "https://corquark.com/assets/ejemplos/tiff-jpg-ejemplo.jpg",
    "url": "https://corquark.com/tiff-a-jpg",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Se mantiene la calidad al convertir TIFF a JPG?",
      "acceptedAnswer":{"@type":"Answer","text":"Sí, optimizamos la conversión para mantener la mejor calidad posible en formato JPG."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>TIFF a JPG — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte TIFF a JPG gratis. Reduce el tamaño manteniendo buena calidad. Ideal para web y compartir imágenes." />
        <link rel="canonical" href="https://corquark.com/tiff-a-jpg" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir TIFF a JPG</h1>
        <p className="hero-description">
          Convierte tus TIFF a JPG reduciendo el tamaño y manteniendo buena calidad. Ideal para web y compartir imágenes.
        </p>
      </div>

      <BaseConversionPage
        title="TIFF a JPG"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="tiff"
        toFormat="jpg"
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

export default TiffToJpgPage;