import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const AvifToPdfPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "AVIF a PDF — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo AVIF." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el PDF." }
    ],
    "image": "https://corquark.com/assets/ejemplos/avif-pdf-ejemplo.jpg",
    "url": "https://corquark.com/avif-a-pdf",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Qué ventajas tiene convertir AVIF a PDF?",
      "acceptedAnswer":{"@type":"Answer","text":"El PDF mantiene la alta calidad del AVIF y permite mejor compatibilidad para documentos e impresión."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>AVIF a PDF — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte AVIF a PDF gratis. Mantén la alta calidad y optimiza para documentos. Perfecto para impresión y archivo." />
        <link rel="canonical" href="https://corquark.com/avif-a-pdf" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir AVIF a PDF</h1>
        <p className="hero-description">
          Convierte tus AVIF a PDF manteniendo la alta calidad del formato moderno. Ideal para documentos y archivo.
        </p>
      </div>

      <BaseConversionPage
        title="AVIF a PDF"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="avif"
        toFormat="pdf"
        functionType = "image"
        acceptedTypes={['avif']}
        conversionOptions={conversionOptions}
        comboType="combo2"
      />

      <ExtraSection title="" background="#ffffff" color="#000000">
      </ExtraSection>
    </div>
  );
};

export default AvifToPdfPage;