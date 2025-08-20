import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const WebpToPdfPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "WebP a PDF — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo WebP." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el PDF." }
    ],
    "image": "https://tu-dominio.com/assets/ejemplos/webp-pdf-ejemplo.jpg",
    "url": "https://tu-dominio.com/webp-a-pdf",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Se mantiene la transparencia al convertir WebP a PDF?",
      "acceptedAnswer":{"@type":"Answer","text":"Sí, el PDF preserva las áreas transparentes del WebP manteniendo la calidad visual completa."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>WebP a PDF — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte WebP a PDF gratis. Mantén transparencia y calidad optimizada. Perfecto para documentos web." />
        <link rel="canonical" href="https://tu-dominio.com/webp-a-pdf" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir WebP a PDF</h1>
        <p className="hero-description">
          Convierte tus WebP a PDF manteniendo transparencia y calidad optimizada. Ideal para documentos y presentaciones.
        </p>
      </div>

      <BaseConversionPage
        title="WebP a PDF"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="webp"
        toFormat="pdf"
        functionType = "image"
        acceptedTypes={['webp']}
        conversionOptions={conversionOptions}
        comboType="combo2"
      />

      <ExtraSection title="" background="#ffffff" color="#000000">
      </ExtraSection>
    </div>
  );
};

export default WebpToPdfPage;