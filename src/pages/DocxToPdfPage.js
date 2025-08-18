import React, { useEffect } from 'react';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const DocxToPdfPage = () => {
  const conversionOptions = [
    // { 
    //   id: 'high-quality', 
    //   icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, 
    //   label: 'Máxima calidad de impresión' 
    // },
    // { 
    //   id: 'compress-pdf', 
    //   icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, 
    //   label: 'Comprimir para compartir' 
    // },
    // { 
    //   id: 'password-protect', 
    //   icon: <img src={lockIcon} alt="proteger" width={24} height={24} />, 
    //   label: 'Proteger con contraseña' 
    // }
  ];

  useEffect(() => {
    document.title = 'DOCX a PDF — Convertidor Gratis en Línea';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Convierte documentos Word a PDF profesional. Preserva fuentes, imágenes y formato.';

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://tu-dominio.com/docx-a-pdf';

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": ["SoftwareApplication", "HowTo"],
      "name": "Convertidor DOCX a PDF",
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
          { "@type": "HowToStep", "text": "Sube tu documento Word (.docx o .doc)" },
          { "@type": "HowToStep", "text": "Configura las opciones de conversión" },
          { "@type": "HowToStep", "text": "Descarga tu PDF listo para compartir" }
        ]
      },
      "image": "https://tu-dominio.com/assets/ejemplos/docx-pdf-ejemplo.jpg",
      "url": "https://tu-dominio.com/docx-a-pdf"
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
        <h1 className="hero-title">Convertir DOCX a PDF</h1>
        <p className="hero-description">
          Transforma documentos Word en PDFs profesionales. Ideal para contratos, CVs y documentos oficiales que necesitan mantener su formato.
        </p>
      </div>

      <BaseConversionPage
        title="Word a PDF"
        icon={<img src={reloadIcon} alt="convertir" width={124} height={124} />}
        fromFormat="docx"
        toFormat="pdf"
        acceptedTypes={['docx', 'doc']}
        conversionOptions={conversionOptions}
        comboType="combo3"
      />

      <ExtraSection 
        title="¿Por qué convertir a PDF?" 
        background="#fff8f0" 
        color="#663300"
      >
    
      </ExtraSection>
    </div>
  );
};

export default DocxToPdfPage;