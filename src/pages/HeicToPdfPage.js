import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const HeicToPdfPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "HEIC a PDF — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo HEIC." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el PDF." }
    ],
    "image": "https://corquark.com/assets/ejemplos/heic-pdf-ejemplo.jpg",
    "url": "https://corquark.com/heic-a-pdf",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Por qué convertir HEIC a PDF?",
      "acceptedAnswer":{"@type":"Answer","text":"El PDF ofrece mayor compatibilidad que HEIC, permitiendo visualizar fotos de iPhone en cualquier dispositivo."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>HEIC a PDF — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte HEIC a PDF gratis. Mejora compatibilidad de fotos iPhone. Mantén calidad y optimiza tamaño." />
        <link rel="canonical" href="https://corquark.com/heic-a-pdf" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir HEIC a PDF</h1>
        <p className="hero-description">
          Convierte tus HEIC a PDF para mayor compatibilidad. Perfecto para compartir fotos de iPhone en cualquier dispositivo.
        </p>
      </div>

      <BaseConversionPage
        title="HEIC a PDF"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="heic"
        toFormat="pdf"
        functionType = "image"
        acceptedTypes={['heic', 'heif']}
        conversionOptions={conversionOptions}
        comboType="combo2"
      />

      <ExtraSection title="" background="#ffffff" color="#000000">
      </ExtraSection>
    </div>
  );
};

export default HeicToPdfPage;