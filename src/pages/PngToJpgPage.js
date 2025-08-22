import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon } from '../utils/iconImports';
import '../styles/pagespages.css'; // o la ruta correcta a tu archivo CSS

const PngToJpgPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "PNG a JPG — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo PNG." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño)." },
      { "@type":"HowToStep","text":"Descarga el JPG." }
    ],
    "image": "https://corquark.com/assets/ejemplos/png-jpg-ejemplo.jpg",
    "url": "https://corquark.com/png-a-jpg",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Pierde calidad al convertir PNG a JPG?",
      "acceptedAnswer":{"@type":"Answer","text":"JPG usa compresión con pérdida, pero con calidad alta la diferencia es mínima."}
    }]
  };

  return (
    <div className="conversion-page-container">
      {/* --- Head optimizado para Google --- */}
      <Helmet>
        <title>PNG a JPG — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte PNG a JPG gratis. Optimiza tamaño y mejora calidad en segundos." />
        <link rel="canonical" href="https://corquark.com/png-a-jpg" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Bloque futurista SOLO para título + descripción */}
      <div className="hero-section">
        <h1 className="hero-title">Convertir PNG a JPG</h1>
        <p className="hero-description">
          Convierte tus PNG a JPG rápido y gratis. Elige optimización de tamaño o mejora de calidad.
        </p>
      </div>

      {/* Conversor */}
      <BaseConversionPage
        title="PNG a JPG"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="png"
        toFormat="jpg"
        functionType = "image"
        acceptedTypes={['png']}
        conversionOptions={conversionOptions}
        comboType="combo3"
      />

      {/* Sección extra (blanca) */}
      <ExtraSection title="" background="#ffffff" color="#000000">
        
      </ExtraSection>
    </div>
  );
};

export default PngToJpgPage;