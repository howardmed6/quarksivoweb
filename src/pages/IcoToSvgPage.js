import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const IcoToSvgPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "ICO a SVG — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo ICO." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el SVG." }
    ],
    "image": "https://tu-dominio.com/assets/ejemplos/ico-svg-ejemplo.jpg",
    "url": "https://tu-dominio.com/ico-a-svg",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Puedo convertir iconos ICO a formato vectorial SVG?",
      "acceptedAnswer":{"@type":"Answer","text":"Sí, convertimos tu ICO a SVG vectorial escalable, ideal para web y aplicaciones modernas."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>ICO a SVG — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte ICO a SVG gratis. Transforma iconos a formato vectorial escalable. Ideal para web y aplicaciones modernas." />
        <link rel="canonical" href="https://tu-dominio.com/ico-a-svg" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir ICO a SVG</h1>
        <p className="hero-description">
          Convierte tus iconos ICO a SVG vectorial escalable. Perfecto para web y aplicaciones modernas.
        </p>
      </div>

      <BaseConversionPage
        title="ICO a SVG"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="ico"
        toFormat="svg"
        functionType = "image"
        acceptedTypes={['ico']}
        conversionOptions={conversionOptions}
        comboType="combo2"
      />

      <ExtraSection title="" background="#ffffff" color="#000000">
      </ExtraSection>
    </div>
  );
};

export default IcoToSvgPage;