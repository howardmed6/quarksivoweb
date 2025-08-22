import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const IcoToPdfPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "ICO a PDF — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo ICO." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el PDF." }
    ],
    "image": "https://corquark.com/assets/ejemplos/ico-pdf-ejemplo.jpg",
    "url": "https://corquark.com/ico-a-pdf",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Por qué convertir ICO a PDF?",
      "acceptedAnswer":{"@type":"Answer","text":"El PDF permite visualizar y compartir iconos ICO en cualquier dispositivo con mejor resolución."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>ICO a PDF — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte ICO a PDF gratis. Mejora visualización de iconos. Perfecto para documentación y presentaciones." />
        <link rel="canonical" href="https://corquark.com/ico-a-pdf" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir ICO a PDF</h1>
        <p className="hero-description">
          Convierte tus ICO a PDF para mejor visualización y compatibilidad. Ideal para documentación de iconos y presentaciones.
        </p>
      </div>

      <BaseConversionPage
        title="ICO a PDF"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="ico"
        toFormat="pdf"
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

export default IcoToPdfPage;