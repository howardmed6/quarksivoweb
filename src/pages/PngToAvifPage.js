import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css'; // o la ruta correcta a tu archivo CSS

const PngToAvifPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "PNG a AVIF — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo PNG." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el AVIF." }
    ],
    "image": "https://corquark.com/assets/ejemplos/png-avif-ejemplo.jpg",
    "url": "https://corquark.com/png-a-avif",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Cuánto espacio ahorra convertir PNG a AVIF?",
      "acceptedAnswer":{"@type":"Answer","text":"AVIF puede reducir el tamaño hasta 90% comparado con PNG manteniendo calidad similar."}
    }]
  };

  return (
    <div className="conversion-page-container">
      {/* --- Head optimizado para Google --- */}
      <Helmet>
        <title>PNG a AVIF — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte PNG a AVIF gratis. Reduce hasta 90% el tamaño con calidad superior. Optimiza tamaño, mejora calidad o reduce ruido." />
        <link rel="canonical" href="https://corquark.com/png-a-avif" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Bloque futurista SOLO para título + descripción */}
      <div className="hero-section">
        <h1 className="hero-title">Convertir PNG a AVIF</h1>
        <p className="hero-description">
          Convierte tus PNG a AVIF y reduce hasta 90% el tamaño sin perder calidad. Formato de nueva generación para web.
        </p>
      </div>

      {/* Conversor */}
      <BaseConversionPage
        title="PNG a AVIF"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="png"
        toFormat="avif"
        functionType = "image"
        acceptedTypes={['png']}
        conversionOptions={conversionOptions}
        comboType="combo2"
      />

      {/* Sección extra (blanca) */}
      <ExtraSection title="" background="#ffffff" color="#000000">
      </ExtraSection>
    </div>
  );
};

export default PngToAvifPage;