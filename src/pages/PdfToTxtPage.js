import React, { useEffect } from 'react';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const PdfToTxtPage = () => {
  const conversionOptions = [
    // { 
    //   id: 'preserve-spacing', 
    //   icon: <img src={formatIcon} alt="formato" width={24} height={24} />, 
    //   label: 'Mantener saltos de línea' 
    // },
    // { 
    //   id: 'minimal-formatting', 
    //   icon: <img src={codeIcon} alt="simple" width={24} height={24} />, 
    //   label: 'Texto plano sin formato' 
    // }
  ];

  useEffect(() => {
    document.title = 'PDF a TXT — Extraer Texto de PDFs Gratis';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Extrae texto de archivos PDF a formato TXT. Convierte documentos escaneados con OCR.';

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://tu-dominio.com/pdf-a-txt';

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": ["SoftwareApplication", "HowTo"],
      "name": "Extraer Texto de PDF a TXT",
      "applicationCategory": "FileConverter",
      "operatingSystem": "Web",
      "offers": { 
        "@type": "Offer", 
        "price": "0", 
        "priceCurrency": "USD" 
      },
      "howTo": {
        "name": "Cómo extraer texto de PDF",
        "step": [
          { "@type": "HowToStep", "text": "Selecciona tu archivo PDF" },
          { "@type": "HowToStep", "text": "Elige formato de salida" },
          { "@type": "HowToStep", "text": "Descarga el archivo TXT con tu texto" }
        ]
      },
      "url": "https://tu-dominio.com/pdf-a-txt"
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
        <h1 className="hero-title">Extraer Texto de PDF a TXT</h1>
        <p className="hero-description">
          Convierte cualquier PDF a texto plano. Ideal para análisis de datos, procesamiento de texto o extraer contenido de documentos escaneados.
        </p>
      </div>

      <BaseConversionPage
        title="PDF a Texto"
        icon={<img src={reloadIcon} alt="convertir" width={124} height={124} />}
        fromFormat="pdf"
        toFormat="txt"
        acceptedTypes={['pdf']}
        conversionOptions={conversionOptions}
        comboType="combo2"
      />

      <ExtraSection 
        title="Usos Prácticos" 
        background="#f0fff4" 
        color="#006633"
      >
    
      </ExtraSection>
    </div>
  );
};

export default PdfToTxtPage;