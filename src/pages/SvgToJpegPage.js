import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css'; // o la ruta correcta a tu archivo CSS

const SvgToJpegPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
    ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "SVG a JPEG — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo SVG." },
      { "@type":"HowToStep","text":"Elige la opción deseada (tamaño/calidad/dimensiones)." },
      { "@type":"HowToStep","text":"Descarga el JPEG." }
    ],
    "image": "https://tu-dominio.com/assets/ejemplos/svg-jpeg-ejemplo.jpg",
    "url": "https://tu-dominio.com/svg-a-jpeg",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Cuál es la diferencia entre convertir SVG a JPG o JPEG?",
      "acceptedAnswer":{"@type":"Answer","text":"JPG y JPEG son el mismo formato, solo cambia la extensión. JPEG ofrece más opciones de optimización."}
    }]
  };

  return (
    <div className="conversion-page-container">
      {/* --- Head optimizado para Google --- */}
      <Helmet>
        <title>SVG a JPEG — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte SVG a JPEG gratis. Optimización avanzada, fondo automático y redimensionado." />
        <link rel="canonical" href="https://tu-dominio.com/svg-a-jpeg" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Bloque futurista SOLO para título + descripción */}
      <div className="hero-section">
        <h1 className="hero-title">Convertir SVG a JPEG</h1>
        <p className="hero-description">
          Convierte tus SVG vectoriales a JPEG rápido y gratis. Optimización avanzada con fondo automático.
        </p>
      </div>

      {/* Conversor */}
      <BaseConversionPage
        title="SVG a JPEG"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="svg"
        toFormat="jpeg"
        functionType = "image"
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

export default SvgToJpegPage;