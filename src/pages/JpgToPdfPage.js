import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const JpgToPdfPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "JPG a PDF — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo JPG." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el PDF." }
    ],
    "image": "https://corquark.com/assets/ejemplos/jpg-pdf-ejemplo.jpg",
    "url": "https://corquark.com/jpg-a-pdf",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Se mantiene la calidad al convertir JPG a PDF?",
      "acceptedAnswer":{"@type":"Answer","text":"Sí, el PDF mantiene la calidad original de la imagen JPG sin compresión adicional."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>JPG a PDF — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte JPG a PDF gratis. Mantén calidad original y optimiza tamaño. Perfecto para documentos e imágenes." />
        <link rel="canonical" href="https://corquark.com/jpg-a-pdf" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir JPG a PDF</h1>
        <p className="hero-description">
          Convierte tus JPG a PDF manteniendo la calidad original. Ideal para crear documentos desde imágenes.
        </p>
      </div>

      <BaseConversionPage
        title="JPG a PDF"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="jpg"
        toFormat="pdf"
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

export default JpgToPdfPage;