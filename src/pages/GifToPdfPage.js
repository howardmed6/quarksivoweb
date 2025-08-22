import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const GifToPdfPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "GIF a PDF — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo GIF." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el PDF." }
    ],
    "image": "https://corquark.com/assets/ejemplos/gif-pdf-ejemplo.jpg",
    "url": "https://corquark.com/gif-a-pdf",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Qué pasa con la animación al convertir GIF a PDF?",
      "acceptedAnswer":{"@type":"Answer","text":"El PDF captura el primer frame del GIF como imagen estática, manteniendo la calidad visual."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>GIF a PDF — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte GIF a PDF gratis. Extrae el primer frame como imagen estática. Perfecto para documentos y presentaciones." />
        <link rel="canonical" href="https://corquark.com/gif-a-pdf" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir GIF a PDF</h1>
        <p className="hero-description">
          Convierte tus GIF a PDF extrayendo el primer frame como imagen estática. Ideal para documentos y archivo.
        </p>
      </div>

      <BaseConversionPage
        title="GIF a PDF"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="gif"
        toFormat="pdf"
        functionType = "image"
        acceptedTypes={['gif']}
        conversionOptions={conversionOptions}
        comboType="combo2"
      />

      <ExtraSection title="" background="#ffffff" color="#000000">
      </ExtraSection>
    </div>
  );
};

export default GifToPdfPage;
