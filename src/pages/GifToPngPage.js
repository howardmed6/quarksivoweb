// ========== GIF a PNG ==========
import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const GifToPngPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "GIF a PNG — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo GIF." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el PNG." }
    ],
    "image": "https://corquark.com/assets/ejemplos/gif-png-ejemplo.jpg",
    "url": "https://corquark.com/gif-a-png",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿PNG mantiene mejor calidad que GIF?",
      "acceptedAnswer":{"@type":"Answer","text":"Sí, PNG ofrece mejor calidad y soporte completo para transparencia, ideal para imágenes estáticas."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>GIF a PNG — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte GIF a PNG gratis. Mejor calidad y soporte completo para transparencia. Extrae el primer frame." />
        <link rel="canonical" href="https://corquark.com/gif-a-png" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir GIF a PNG</h1>
        <p className="hero-description">
          Convierte tus GIF a PNG para obtener mejor calidad y soporte completo de transparencia.
        </p>
      </div>

      <BaseConversionPage
        title="GIF a PNG"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="gif"
        toFormat="png"
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

export default GifToPngPage;