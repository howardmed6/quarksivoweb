// ========== HEIC a PNG ==========
import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const HeicToPngPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "HEIC a PNG — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo HEIC." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el PNG." }
    ],
    "image": "https://tu-dominio.com/assets/ejemplos/heic-png-ejemplo.jpg",
    "url": "https://tu-dominio.com/heic-a-png",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿PNG es mejor que JPG para convertir HEIC?",
      "acceptedAnswer":{"@type":"Answer","text":"PNG ofrece calidad sin pérdida y soporte de transparencia, ideal para edición posterior."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>HEIC a PNG — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte HEIC a PNG gratis. Fotos de iPhone/iPad a formato sin pérdida. Calidad máxima para edición y diseño." />
        <link rel="canonical" href="https://tu-dominio.com/heic-a-png" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir HEIC a PNG</h1>
        <p className="hero-description">
          Convierte fotos HEIC de iPhone/iPad a PNG sin pérdida de calidad. Perfecto para edición y diseño profesional.
        </p>
      </div>

      <BaseConversionPage
        title="HEIC a PNG"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="heic"
        toFormat="png"
        functionType = "image"
        acceptedTypes={['heic']}
        conversionOptions={conversionOptions}
        comboType="combo2"
      />

      <ExtraSection title="Texto de ejemplo para futura base" background="#ffffff" color="#000000">
      </ExtraSection>
    </div>
  );
};

export default HeicToPngPage;


