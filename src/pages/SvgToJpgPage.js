import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css'; // o la ruta correcta a tu archivo CSS

const SvgToJpgPage = () => {
  const conversionOptions = [
   { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
    ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "SVG a JPG — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo SVG." },
      { "@type":"HowToStep","text":"Elige la opción deseada (tamaño/calidad/dimensiones)." },
      { "@type":"HowToStep","text":"Descarga el JPG." }
    ],
    "image": "https://tu-dominio.com/assets/ejemplos/svg-jpg-ejemplo.jpg",
    "url": "https://tu-dominio.com/svg-a-jpg",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Qué pasa con la transparencia al convertir SVG a JPG?",
      "acceptedAnswer":{"@type":"Answer","text":"JPG no soporta transparencia, por lo que se aplica un fondo blanco automáticamente."}
    }]
  };

  return (
    <div className="conversion-page-container">
      {/* --- Head optimizado para Google --- */}
      <Helmet>
        <title>SVG a JPG — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte SVG a JPG gratis. Aplica fondo automático, optimiza tamaño y mejora calidad." />
        <link rel="canonical" href="https://tu-dominio.com/svg-a-jpg" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Bloque futurista SOLO para título + descripción */}
      <div className="hero-section">
        <h1 className="hero-title">Convertir SVG a JPG</h1>
        <p className="hero-description">
          Convierte tus SVG vectoriales a JPG rápido y gratis. Optimiza tamaño con fondo automático.
        </p>
      </div>

      {/* Conversor */}
      <BaseConversionPage
        title="SVG a JPG"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="svg"
        toFormat="jpg"
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

export default SvgToJpgPage;