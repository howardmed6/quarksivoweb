// ========== JPG a WEBP ==========
import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const JpgToWebpPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "JPG a WEBP — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo JPG." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el WEBP." }
    ],
    "image": "https://corquark.com/assets/ejemplos/jpg-webp-ejemplo.jpg",
    "url": "https://corquark.com/jpg-a-webp",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Cuánto ahorra convertir JPG a WEBP?",
      "acceptedAnswer":{"@type":"Answer","text":"WEBP puede reducir el tamaño hasta 35% comparado con JPG manteniendo la misma calidad visual."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>JPG a WEBP — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte JPG a WEBP gratis. Reduce hasta 35% el tamaño manteniendo calidad. Optimiza tamaño, mejora calidad o reduce ruido." />
        <link rel="canonical" href="https://corquark.com/jpg-a-webp" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir JPG a WEBP</h1>
        <p className="hero-description">
          Convierte tus JPG a WEBP y reduce el tamaño sin perder calidad. Formato optimizado para web moderna.
        </p>
      </div>

      <BaseConversionPage
        title="JPG a WEBP"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="jpg"
        toFormat="webp"
        functionType = "image"
        acceptedTypes={['jpg', 'jpeg']}
        conversionOptions={conversionOptions}
        comboType="combo2"
      />

      <ExtraSection title="" background="#ffffff" color="#000000">
      </ExtraSection>
    </div>
  );
};

export default JpgToWebpPage;