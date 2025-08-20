import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const TiffToAvifPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "TIFF a AVIF — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo TIFF." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el AVIF." }
    ],
    "image": "https://tu-dominio.com/assets/ejemplos/tiff-avif-ejemplo.jpg",
    "url": "https://tu-dominio.com/tiff-a-avif",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿AVIF es mejor que WebP y JPEG?",
      "acceptedAnswer":{"@type":"Answer","text":"Sí, AVIF ofrece hasta 50% mejor compresión que JPEG manteniendo superior calidad, el formato del futuro."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>TIFF a AVIF — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte TIFF a AVIF gratis. Reduce hasta 50% el tamaño con superior calidad. El formato de imagen del futuro." />
        <link rel="canonical" href="https://tu-dominio.com/tiff-a-avif" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir TIFF a AVIF</h1>
        <p className="hero-description">
          Convierte tus TIFF a AVIF reduciendo hasta 50% el tamaño con superior calidad. El formato de imagen del futuro.
        </p>
      </div>

      <BaseConversionPage
        title="TIFF a AVIF"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="tiff"
        toFormat="avif"
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

export default TiffToAvifPage;