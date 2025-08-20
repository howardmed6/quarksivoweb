import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const WebpToTiffPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "WebP a TIFF — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo WebP." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el TIFF." }
    ],
    "image": "https://tu-dominio.com/assets/ejemplos/webp-tiff-ejemplo.jpg",
    "url": "https://tu-dominio.com/webp-a-tiff",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Por qué convertir WebP a TIFF?",
      "acceptedAnswer":{"@type":"Answer","text":"TIFF ofrece mayor compatibilidad y calidad sin pérdidas para impresión profesional y archivo."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>WebP a TIFF — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte WebP a TIFF gratis. Mejora compatibilidad y calidad sin pérdidas. Ideal para impresión profesional." />
        <link rel="canonical" href="https://tu-dominio.com/webp-a-tiff" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir WebP a TIFF</h1>
        <p className="hero-description">
          Convierte tus WebP a TIFF mejorando compatibilidad y calidad sin pérdidas. Ideal para impresión profesional.
        </p>
      </div>

      <BaseConversionPage
        title="WebP a TIFF"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="webp"
        toFormat="tiff"
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

export default WebpToTiffPage;