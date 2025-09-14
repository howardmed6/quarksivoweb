import React, { useEffect } from 'react';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const WordToPdfPage = () => {
  const conversionOptions = [
    // { 
    //   id: 'preserve-format', 
    //   icon: <img src={formatIcon} alt="format" width={24} height={24} />, 
    //   label: 'Conservar formato original' 
    // },
    // { 
    //   id: 'compress-pdf', 
    //   icon: <img src={compressIcon} alt="compress" width={24} height={24} />, 
    //   label: 'Comprimir PDF para menor tamaño' 
    // },
    // { 
    //   id: 'protect-pdf', 
    //   icon: <img src={lockIcon} alt="protect" width={24} height={24} />, 
    //   label: 'Proteger PDF con contraseña' 
    // }
  ];

  useEffect(() => {
    document.title = 'Word a PDF — Convertidor Online Gratis';
    
    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Convierte Word a PDF profesional. Mantén formato, imágenes y tablas intactas. 100% gratis y seguro.';

    // Link canónico
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://corquark.com/word-a-pdf';

    // JSON-LD
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": ["SoftwareApplication", "HowTo", "FAQPage"],
      "name": "Convertidor Word a PDF",
      "applicationCategory": "FileConverter",
      "operatingSystem": "Web",
      "offers": { 
        "@type": "Offer", 
        "price": "0", 
        "priceCurrency": "USD" 
      },
      "howTo": {
        "name": "Cómo convertir Word a PDF",
        "step": [
          { "@type": "HowToStep", "text": "Sube tu archivo Word (DOC o DOCX)" },
          { "@type": "HowToStep", "text": "Configura opciones de conversión" },
          { "@type": "HowToStep", "text": "Descarga tu PDF profesional" }
        ]
      },
      "image": "https://corquark.com/assets/ejemplos/word-pdf-ejemplo.jpg",
      "url": "https://corquark.com/word-a-pdf",
      "mainEntity": [{
        "@type": "Question",
        "name": "¿Se mantiene el formato al convertir Word a PDF?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, nuestro conversor preserva completamente el formato, fuentes, imágenes y diseño original."
        }
      }]
    };

    let jsonLdScript = document.querySelector('script[type="application/ld+json"]');
    if (jsonLdScript) jsonLdScript.remove();
    
    jsonLdScript = document.createElement('script');
    jsonLdScript.type = 'application/ld+json';
    jsonLdScript.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(jsonLdScript);

    return () => {
      document.title = 'Tu App';
    };
  }, []);

  return (
    <div className="conversion-page-container">
      <div className="hero-section">
        <h1 className="hero-title">Convertir Word a PDF</h1>
        <p className="hero-description">
          Convierte documentos Word en PDFs profesionales de alta calidad. Ideal para compartir documentos, presentaciones y archivos oficiales.
        </p>
      </div>

      <BaseConversionPage
        title="Word a PDF"
        icon={<img src={reloadIcon} alt="convertir" width={124} height={124} />}
        fromFormat="docx"
        toFormat="pdf"
        functionType = "document"
        acceptedTypes={['doc', 'docx']}
        conversionOptions={conversionOptions}
        comboType="combo3"
      />

      <ExtraSection 
        title="Ventajas de convertir Word a PDF" 
        background="#f0f7ff" 
        color="#003366"
      >
        
      </ExtraSection>
    </div>
  );
};

export default WordToPdfPage;