import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css'; // o la ruta correcta a tu archivo CSS

const SvgToPngPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
    ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "SVG a PNG — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo SVG." },
      { "@type":"HowToStep","text":"Elige la opción deseada (tamaño/calidad/dimensiones)." },
      { "@type":"HowToStep","text":"Descarga el PNG." }
    ],
    "image": "https://tu-dominio.com/assets/ejemplos/svg-png-ejemplo.jpg",
    "url": "https://tu-dominio.com/svg-a-png",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Mantiene transparencia al convertir SVG a PNG?",
      "acceptedAnswer":{"@type":"Answer","text":"Sí, PNG conserva perfectamente la transparencia de los archivos SVG."}
    }]
  };

  return (
    <div className="conversion-page-container">
      {/* --- Head optimizado para Google --- */}
      <Helmet>
        <title>SVG a PNG — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte SVG a PNG gratis. Mantiene transparencia, optimiza tamaño y mejora calidad." />
        <link rel="canonical" href="https://tu-dominio.com/svg-a-png" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Bloque futurista SOLO para título + descripción */}
      <div className="hero-section">
        <h1 className="hero-title">Convertir SVG a PNG</h1>
        <p className="hero-description">
          Convierte tus SVG vectoriales a PNG rápido y gratis. Mantiene transparencia y permite redimensionar.
        </p>
      </div>

      {/* Conversor */}
      <BaseConversionPage
        title="SVG a PNG"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="svg"
        toFormat="png"
        acceptedTypes={['svg']}
        conversionOptions={conversionOptions}
        comboType="combo2"
      />

      {/* Sección extra (blanca) */}
      <ExtraSection title="" background="#ffffff" color="#000000">
        
      </ExtraSection>
    </div>
  );
};

export default SvgToPngPage;