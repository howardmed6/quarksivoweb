import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css'; // o la ruta correcta a tu archivo CSS

const WebpToJpgPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "WEBP a JPG — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo WEBP." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el JPG." }
    ],
    "image": "https://tu-dominio.com/assets/ejemplos/webp-jpg-ejemplo.jpg",
    "url": "https://tu-dominio.com/webp-a-jpg",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Pierde calidad al convertir WEBP a JPG?",
      "acceptedAnswer":{"@type":"Answer","text":"Con el preset de calidad alta se minimiza la pérdida perceptual."}
    }]
  };

  return (
    <div className="conversion-page-container">
      {/* --- Head optimizado para Google --- */}
      <Helmet>
        <title>WEBP a JPG — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte WEBP a JPG gratis. Optimiza tamaño, mejora calidad o reduce ruido en segundos." />
        <link rel="canonical" href="https://tu-dominio.com/webp-a-jpg" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Bloque futurista SOLO para título + descripción */}
      <div className="hero-section">
        <h1 className="hero-title">Convertir WEBP a JPG</h1>
        <p className="hero-description">
          Convierte tus WEBP a JPG rápido y gratis. Elige optimización de tamaño, calidad o reducción de ruido.
        </p>
      </div>

      {/* Conversor */}
      <BaseConversionPage
        title="WEBP a JPG"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="webp"
        toFormat="jpg"
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

export default WebpToJpgPage;