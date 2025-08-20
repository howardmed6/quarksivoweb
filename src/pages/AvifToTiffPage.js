import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const AvifToTiffPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "AVIF a TIFF — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo AVIF." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el TIFF." }
    ],
    "image": "https://tu-dominio.com/assets/ejemplos/avif-tiff-ejemplo.jpg",
    "url": "https://tu-dominio.com/avif-a-tiff",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Puedo convertir el moderno formato AVIF a TIFF?",
      "acceptedAnswer":{"@type":"Answer","text":"Sí, convertimos AVIF a TIFF manteniendo la calidad para mayor compatibilidad y uso profesional."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>AVIF a TIFF — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte AVIF a TIFF gratis. Mejora compatibilidad manteniendo calidad. Ideal para uso profesional y archivo." />
        <link rel="canonical" href="https://tu-dominio.com/avif-a-tiff" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir AVIF a TIFF</h1>
        <p className="hero-description">
          Convierte tus AVIF a TIFF mejorando compatibilidad y manteniendo calidad. Ideal para uso profesional y archivo.
        </p>
      </div>

      <BaseConversionPage
        title="AVIF a TIFF"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="avif"
        toFormat="tiff"
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

export default AvifToTiffPage;