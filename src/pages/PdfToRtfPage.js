import React, { useEffect } from 'react';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const PdfToRtfPage = () => {
  const conversionOptions = [
    // { 
    //   id: 'preserve-format', 
    //   icon: <img src={compatibilityIcon} alt="compatibilidad" width={24} height={24} />, 
    //   label: 'Mantener formato básico' 
    // },
    // { 
    //   id: 'legacy-support', 
    //   icon: <img src={retroIcon} alt="compatibilidad" width={24} height={24} />, 
    //   label: 'Compatibilidad con sistemas antiguos' 
    // }
  ];

  useEffect(() => {
    document.title = 'PDF a RTF — Convertidor Gratis';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Convierte PDF a RTF para editar en procesadores antiguos. Mantiene formato básico y es universalmente compatible.';

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://tu-dominio.com/pdf-a-rtf';

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Convertidor PDF a RTF",
      "applicationCategory": "FileConverter",
      "operatingSystem": "Web",
      "offers": { 
        "@type": "Offer", 
        "price": "0", 
        "priceCurrency": "USD" 
      },
      "url": "https://tu-dominio.com/pdf-a-rtf"
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
        <h1 className="hero-title">Convertir PDF a RTF</h1>
        <p className="hero-description">
          Transforma documentos PDF en archivos RTF editables. Formato ideal para sistemas heredados y máxima compatibilidad entre procesadores de texto.
        </p>
      </div>

      <BaseConversionPage
        title="PDF a RTF"
        icon={<img src={reloadIcon} alt="convertir" width={124} height={124} />}
        fromFormat="pdf"
        toFormat="rtf"
        acceptedTypes={['pdf']}
        conversionOptions={conversionOptions}
        comboType="combo2"
      />

      <ExtraSection 
        title="Ventajas del Formato RTF" 
        background="#f0f0ff" 
        color="#330066"
      >
        
      </ExtraSection>
    </div>
  );
};

export default PdfToRtfPage;