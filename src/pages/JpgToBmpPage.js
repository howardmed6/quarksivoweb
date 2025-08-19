// ========== JPG a BMP ==========
import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const JpgToBmpPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "JPG a BMP — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo JPG." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el BMP." }
    ],
    "image": "https://tu-dominio.com/assets/ejemplos/jpg-bmp-ejemplo.jpg",
    "url": "https://tu-dominio.com/jpg-a-bmp",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Para qué usar BMP?",
      "acceptedAnswer":{"@type":"Answer","text":"BMP es ideal cuando necesitas máxima calidad sin compresión, compatible con sistemas Windows."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>JPG a BMP — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte JPG a BMP gratis. Formato sin compresión para máxima calidad. Optimiza tamaño, mejora calidad o reduce ruido." />
        <link rel="canonical" href="https://tu-dominio.com/jpg-a-bmp" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir JPG a BMP</h1>
        <p className="hero-description">
          Convierte tus JPG a BMP para obtener máxima calidad sin compresión. Ideal para edición profesional.
        </p>
      </div>

      <BaseConversionPage
        title="JPG a BMP"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="jpg"
        toFormat="bmp"
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

export default JpgToBmpPage;