// ========== JPG a PNG ==========
import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const JpgToPngPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "JPG a PNG — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo JPG." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el PNG." }
    ],
    "image": "https://tu-dominio.com/assets/ejemplos/jpg-png-ejemplo.jpg",
    "url": "https://tu-dominio.com/jpg-a-png",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿PNG tiene mejor calidad que JPG?",
      "acceptedAnswer":{"@type":"Answer","text":"PNG es sin pérdida y soporta transparencia, ideal para imágenes con texto o gráficos."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>JPG a PNG — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte JPG a PNG gratis. Obtén transparencia y calidad sin pérdida. Optimiza tamaño, mejora calidad o reduce ruido." />
        <link rel="canonical" href="https://tu-dominio.com/jpg-a-png" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir JPG a PNG</h1>
        <p className="hero-description">
          Convierte tus JPG a PNG para obtener transparencia y calidad sin pérdida. Perfecto para logos y gráficos.
        </p>
      </div>

      <BaseConversionPage
        title="JPG a PNG"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="jpg"
        toFormat="png"
        acceptedTypes={['jpg', 'jpeg']}
        conversionOptions={conversionOptions}
        comboType="combo2"
      />

      <ExtraSection title="" background="#ffffff" color="#000000">
      </ExtraSection>
    </div>
  );
};

export default JpgToPngPage;