import React, { useEffect } from 'react';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const PngToJpgPage = () => {
  const conversionOptions = [
    { 
      id: 'optimize-size', 
      icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, 
      label: 'Disminuir tamaño en lo posible' 
    },
    { 
      id: 'improve-quality', 
      icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, 
      label: 'Mejorar calidad' 
    }
  ];

  // Manejo manual del título y meta tags
  useEffect(() => {
    // Cambiar título
    document.title = 'PNG a JPG — Convertidor Online Gratis';
    
    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Convierte PNG a JPG gratis. Optimiza tamaño y mejora calidad en segundos.';

    // Link canónico
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://tu-dominio.com/png-a-jpg';

    // JSON-LD
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": ["SoftwareApplication", "HowTo", "FAQPage"],
      "name": "PNG a JPG — Convertidor Online",
      "applicationCategory": "FileConverter",
      "operatingSystem": "Web",
      "offers": { 
        "@type": "Offer", 
        "price": "0", 
        "priceCurrency": "USD" 
      },
      "howToSteps": [
        { "@type": "HowToStep", "text": "Sube tu archivo PNG." },
        { "@type": "HowToStep", "text": "Elige la opción deseada (calidad/tamaño)." },
        { "@type": "HowToStep", "text": "Descarga el JPG." }
      ],
      "image": "https://tu-dominio.com/assets/ejemplos/png-jpg-ejemplo.jpg",
      "url": "https://tu-dominio.com/png-a-jpg",
      "mainEntity": [{
        "@type": "Question",
        "name": "¿Pierde calidad al convertir PNG a JPG?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JPG usa compresión con pérdida, pero con calidad alta la diferencia es mínima."
        }
      }]
    };

    let jsonLdScript = document.querySelector('script[type="application/ld+json"]');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.type = 'application/ld+json';
      document.head.appendChild(jsonLdScript);
    }
    jsonLdScript.textContent = JSON.stringify(jsonLd);

    // Cleanup function
    return () => {
      // Restaurar título por defecto si es necesario
      document.title = 'Tu App';
    };
  }, []);

  return (
    <div className="conversion-page-container">
      <div className="hero-section">
        <h1 className="hero-title">Convertir PNG a JPG</h1>
        <p className="hero-description">
          Convierte tus PNG a JPG rápido y gratis. Elige optimización de tamaño o mejora de calidad.
        </p>
      </div>

      <BaseConversionPage
        title="PNG a JPG"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="png"
        toFormat="jpg"
        functionType = "image"
        acceptedTypes={['png']}
        conversionOptions={conversionOptions}
        comboType="combo3"
      />

      <ExtraSection 
        title="Texto de ejemplo para futura base" 
        background="#ffffff" 
        color="#000000"
      >
        {/* Contenido aquí */}
      </ExtraSection>
    </div>
  );
};

export default PngToJpgPage;