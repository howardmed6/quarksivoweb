import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css'; // o la ruta correcta a tu archivo CSS

const WebpToPngPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "WEBP a PNG — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo WEBP." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el PNG." }
    ],
    "image": "https://corquark.com/assets/ejemplos/webp-png-ejemplo.jpg",
    "url": "https://corquark.com/webp-a-png",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Pierde calidad al convertir WEBP a PNG?",
      "acceptedAnswer":{"@type":"Answer","text":"PNG es un formato sin pérdida, por lo que la calidad se mantiene óptima."}
    }]
  };

  return (
    <div className="conversion-page-container">
      {/* --- Head optimizado para Google --- */}
      <Helmet>
        <title>WEBP a PNG — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte WEBP a PNG gratis. Optimiza tamaño, mejora calidad o reduce ruido en segundos." />
        <link rel="canonical" href="https://corquark.com/webp-a-png" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Bloque futurista SOLO para título + descripción */}
      <div className="hero-section">
        <h1 className="hero-title">Convertir WEBP a PNG</h1>
        <p className="hero-description">
          Convierte tus WEBP a PNG rápido y gratis. Elige optimización de tamaño, calidad o reducción de ruido.
        </p>
      </div>

      {/* Conversor */}
      <BaseConversionPage
        title="WEBP a PNG"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="webp"
        toFormat="png"
        functionType = "image"
        acceptedTypes={['webp']}
        conversionOptions={conversionOptions}
        comboType="combo2"
      />

      {/* Sección extra (blanca) */}
      <ExtraSection title="" background="#ffffff" color="#000000">
        
      </ExtraSection>
    </div>
  );
};

export default WebpToPngPage;