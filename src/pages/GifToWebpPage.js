// ========== GIF a JPG ==========
import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const GifToJpgPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "GIF a JPG — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo GIF." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el JPG." }
    ],
    "image": "https://tu-dominio.com/assets/ejemplos/gif-jpg-ejemplo.jpg",
    "url": "https://tu-dominio.com/gif-a-jpg",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Qué pasa con las animaciones al convertir GIF a JPG?",
      "acceptedAnswer":{"@type":"Answer","text":"JPG no soporta animaciones, solo se convertirá el primer frame del GIF a imagen estática."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>GIF a JPG — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte GIF a JPG gratis. Extrae el primer frame como imagen estática. Ideal para thumbnails y previews." />
        <link rel="canonical" href="https://tu-dominio.com/gif-a-jpg" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir GIF a JPG</h1>
        <p className="hero-description">
          Convierte tus GIF a JPG y obtén el primer frame como imagen estática. Perfecto para previews.
        </p>
      </div>

      <BaseConversionPage
        title="GIF a JPG"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="gif"
        toFormat="jpg"
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

export default GifToJpgPage;