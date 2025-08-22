// ========== HEIC a JPG ==========
import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const HeicToJpgPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
    { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "HEIC a JPG — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo HEIC." },
      { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
      { "@type":"HowToStep","text":"Descarga el JPG." }
    ],
    "image": "https://corquark.com/assets/ejemplos/heic-jpg-ejemplo.jpg",
    "url": "https://corquark.com/heic-a-jpg",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Por qué convertir HEIC a JPG?",
      "acceptedAnswer":{"@type":"Answer","text":"JPG es compatible con todos los dispositivos y plataformas, mientras HEIC solo funciona en dispositivos Apple recientes."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>HEIC a JPG — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte HEIC a JPG gratis. Transforma fotos de iPhone/iPad a formato universal. Compatibilidad total con cualquier dispositivo." />
        <link rel="canonical" href="https://corquark.com/heic-a-jpg" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir HEIC a JPG</h1>
        <p className="hero-description">
          Convierte fotos HEIC de iPhone/iPad a JPG para compatibilidad universal. Funciona en cualquier dispositivo y plataforma.
        </p>
      </div>

      <BaseConversionPage
        title="HEIC a JPG"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="heic"
        toFormat="jpg"
        functionType = "image"
        acceptedTypes={['heic', 'heif', 'heix', 'heics', 'heifs']}
        conversionOptions={conversionOptions}
        comboType="combo2"
      />

      <ExtraSection title="" background="#ffffff" color="#000000">
      </ExtraSection>
    </div>
  );
};

export default HeicToJpgPage;


