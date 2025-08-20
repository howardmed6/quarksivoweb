import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const TiffToPdfPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "TIFF a PDF — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo TIFF." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el PDF." }
    ],
    "image": "https://tu-dominio.com/assets/ejemplos/tiff-pdf-ejemplo.jpg",
    "url": "https://tu-dominio.com/tiff-a-pdf",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Se mantiene la alta calidad al convertir TIFF a PDF?",
      "acceptedAnswer":{"@type":"Answer","text":"Sí, el PDF preserva la alta calidad y resolución del archivo TIFF original."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>TIFF a PDF — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte TIFF a PDF gratis. Mantén alta calidad y resolución. Perfecto para documentos profesionales e impresión." />
        <link rel="canonical" href="https://tu-dominio.com/tiff-a-pdf" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir TIFF a PDF</h1>
        <p className="hero-description">
          Convierte tus TIFF a PDF manteniendo la alta calidad y resolución. Ideal para documentos profesionales e impresión.
        </p>
      </div>

      <BaseConversionPage
        title="TIFF a PDF"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="tiff"
        toFormat="pdf"
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

export default TiffToPdfPage;