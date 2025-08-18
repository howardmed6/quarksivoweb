// ========== JPG a AVIF ==========
import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const JpgToAvifPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "JPG a AVIF — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo JPG." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el AVIF." }
    ],
    "image": "https://tu-dominio.com/assets/ejemplos/jpg-avif-ejemplo.jpg",
    "url": "https://tu-dominio.com/jpg-a-avif",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿AVIF es mejor que JPG?",
      "acceptedAnswer":{"@type":"Answer","text":"AVIF ofrece hasta 50% mejor compresión que JPG con la misma calidad visual."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>JPG a AVIF — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte JPG a AVIF gratis. Reduce hasta 50% el tamaño con mejor calidad. Formato de nueva generación para web." />
        <link rel="canonical" href="https://tu-dominio.com/jpg-a-avif" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir JPG a AVIF</h1>
        <p className="hero-description">
          Convierte tus JPG a AVIF y reduce hasta 50% el tamaño manteniendo mejor calidad. El futuro de las imágenes web.
        </p>
      </div>

      <BaseConversionPage
        title="JPG a AVIF"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="jpg"
        toFormat="avif"
        acceptedTypes={['jpg', 'jpeg']}
        conversionOptions={conversionOptions}
        comboType="combo2"
      />

      <ExtraSection title="" background="#ffffff" color="#000000">
      </ExtraSection>
    </div>
  );
};

export default JpgToAvifPage;