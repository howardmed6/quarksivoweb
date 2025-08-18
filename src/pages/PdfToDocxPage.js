import React, { useEffect } from 'react';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const PdfToDocxPage = () => {
  const conversionOptions = [
    // { 
    //   id: 'preserve-layout', 
    //   icon: <img src={layoutIcon} alt="layout" width={24} height={24} />, 
    //   label: 'Conservar diseño original' 
    // },
    // { 
    //   id: 'editable-text', 
    //   icon: <img src={editIcon} alt="editable" width={24} height={24} />, 
    //   label: 'Texto editable completo' 
    // },
    // { 
    //   id: 'ocr-scan', 
    //   icon: <img src={ocrIcon} alt="ocr" width={24} height={24} />, 
    //   label: 'Reconocimiento OCR (documentos escaneados)' 
    // }
  ];

  useEffect(() => {
    document.title = 'PDF a DOCX — Convertidor Online Gratis';
    
    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Convierte PDF a DOCX editable. Conserva formato, tablas e imágenes. 100% gratis.';

    // Link canónico
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://tu-dominio.com/pdf-a-docx';

    // JSON-LD
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": ["SoftwareApplication", "HowTo", "FAQPage"],
      "name": "Convertidor PDF a DOCX",
      "applicationCategory": "FileConverter",
      "operatingSystem": "Web",
      "offers": { 
        "@type": "Offer", 
        "price": "0", 
        "priceCurrency": "USD" 
      },
      "howTo": {
        "name": "Cómo convertir PDF a Word",
        "step": [
          { "@type": "HowToStep", "text": "Sube tu archivo PDF" },
          { "@type": "HowToStep", "text": "Selecciona opciones de conversión" },
          { "@type": "HowToStep", "text": "Descarga tu DOCX editable" }
        ]
      },
      "image": "https://tu-dominio.com/assets/ejemplos/pdf-docx-ejemplo.jpg",
      "url": "https://tu-dominio.com/pdf-a-docx",
      "mainEntity": [{
        "@type": "Question",
        "name": "¿Se mantienen las tablas al convertir PDF a Word?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, nuestro conversor preserva tablas, imágenes y formato básico en la conversión."
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
        <h1 className="hero-title">Convertir PDF a DOCX (Word)</h1>
        <p className="hero-description">
          Transforma tus documentos PDF en archivos Word editables. Perfecto para modificar contratos, informes y documentos oficiales.
        </p>
      </div>

      <BaseConversionPage
        title="PDF a Word"
        icon={<img src={reloadIcon} alt="convertir" width={124} height={124} />}
        fromFormat="pdf"
        toFormat="docx"
        acceptedTypes={['pdf']}
        conversionOptions={conversionOptions}
        comboType="combo3"
      />

      <ExtraSection 
        title="Beneficios de convertir PDF a DOCX" 
        background="#f0f7ff" 
        color="#003366"
      >
        
      </ExtraSection>
    </div>
  );
};

export default PdfToDocxPage;