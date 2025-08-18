// ========== GIF a MP4 ==========
import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const GifToMp4Page = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "GIF a MP4 — Convertidor Online",
    "applicationCategory": "VideoConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo GIF." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el MP4." }
    ],
    "image": "https://tu-dominio.com/assets/ejemplos/gif-mp4-ejemplo.jpg",
    "url": "https://tu-dominio.com/gif-a-mp4",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Por qué convertir GIF a MP4?",
      "acceptedAnswer":{"@type":"Answer","text":"MP4 ofrece hasta 90% menos tamaño que GIF con mejor calidad y compatible con redes sociales."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>GIF a MP4 — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte GIF a MP4 gratis. Reduce hasta 90% el tamaño manteniendo calidad. Perfecto para redes sociales y web." />
        <link rel="canonical" href="https://tu-dominio.com/gif-a-mp4" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir GIF a MP4</h1>
        <p className="hero-description">
          Convierte tus GIF a MP4 y reduce hasta 90% el tamaño con mejor calidad. Optimizado para redes sociales y web.
        </p>
      </div>

      <BaseConversionPage
        title="GIF a MP4"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="gif"
        toFormat="mp4"
        acceptedTypes={['gif']}
        conversionOptions={conversionOptions}
        comboType="combo2"
      />

      <ExtraSection title="Texto de ejemplo para futura base" background="#ffffff" color="#000000">
      </ExtraSection>
    </div>
  );
};

export default GifToMp4Page;