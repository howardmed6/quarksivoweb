import React, { useEffect } from 'react';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const PdfToOdtPage = () => {
  const conversionOptions = [
    // { 
    //   id: 'open-format', 
    //   icon: <img src={openSourceIcon} alt="open source" width={24} height={24} />, 
    //   label: 'Formato abierto' 
    // },
    // { 
    //   id: 'libre-compat', 
    //   icon: <img src={libreIcon} alt="libreoffice" width={24} height={24} />, 
    //   label: 'Optimizado para LibreOffice' 
    // }
  ];

  useEffect(() => {
    document.title = 'PDF a ODT — Convertidor Open Source';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Convierte PDF a ODT (OpenDocument) para usar en suites de oficina gratuitas. 100% libre y sin restricciones.';

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://corquark.com/pdf-a-odt';

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Convertidor PDF a ODT",
      "applicationCategory": "FileConverter",
      "operatingSystem": "Web",
      "offers": { 
        "@type": "Offer", 
        "price": "0", 
        "priceCurrency": "USD" 
      },
      "url": "https://corquark.com/pdf-a-odt",
      "applicationSuite": "OpenDocument Format"
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
        <h1 className="hero-title">Convertir PDF a ODT (OpenDocument)</h1>
        <p className="hero-description">
          Transforma tus PDFs en documentos editables de formato abierto. Ideal para usuarios de software libre como LibreOffice y OpenOffice.
        </p>
      </div>

      <BaseConversionPage
        title="PDF a ODT"
        icon={<img src={reloadIcon} alt="convertir" width={124} height={124} />}
        fromFormat="pdf"
        toFormat="odt"
        acceptedTypes={['pdf']}
        conversionOptions={conversionOptions}
        comboType="combo2"
      />

      <ExtraSection 
        title="¿Por qué usar ODT?" 
        background="#fff0f5" 
        color="#660033"
      >
      
      </ExtraSection>
    </div>
  );
};

export default PdfToOdtPage;