import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const JpgToTiffPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "JPG a TIFF — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo JPG." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el TIFF." }
    ],
    "image": "https://corquark.com/assets/ejemplos/jpg-tiff-ejemplo.jpg",
    "url": "https://corquark.com/jpg-a-tiff",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Por qué convertir JPG a TIFF?",
      "acceptedAnswer":{"@type":"Answer","text":"TIFF ofrece mejor calidad sin compresión con pérdida, ideal para impresión profesional y archivo."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>JPG a TIFF — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte JPG a TIFF gratis. Mejora la calidad sin compresión con pérdida. Ideal para impresión profesional y archivo." />
        <link rel="canonical" href="https://corquark.com/jpg-a-tiff" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir JPG a TIFF</h1>
        <p className="hero-description">
          Convierte tus JPG a TIFF mejorando la calidad sin compresión con pérdida. Ideal para impresión profesional y archivo.
        </p>
      </div>

      <BaseConversionPage
        title="JPG a TIFF"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="jpg"
        toFormat="tiff"
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

export default JpgToTiffPage;