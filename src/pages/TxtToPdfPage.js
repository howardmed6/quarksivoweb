import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const TxtToPdfPage = () => {
  const conversionOptions = [
   // { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Reducir tamaño (fuente menor)' },
   // { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar presentación' },
    //{ id: 'reduce-noise', icon: <img src={noiseIcon} alt="ruido" width={24} height={24} />, label: 'Limpiar formato' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "TXT a PDF — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo TXT." },
      { "@type":"HowToStep","text":"Elige las opciones de formato deseadas." },
      { "@type":"HowToStep","text":"Descarga el PDF generado." }
    ],
    "image": "https://corquark.com/assets/ejemplos/txt-pdf-ejemplo.jpg",
    "url": "https://corquark.com/txt-a-pdf",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Por qué convertir TXT a PDF?",
      "acceptedAnswer":{"@type":"Answer","text":"El PDF preserva el formato, es compatible universalmente y perfecto para compartir documentos de texto que no cambien."}
    },{
      "@type":"Question",
      "name":"¿Se conserva el formato original?",
      "acceptedAnswer":{"@type":"Answer","text":"El convertidor detecta automáticamente títulos y estructura el texto para crear un PDF profesional y legible."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>TXT a PDF — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte TXT a PDF gratis. Mantiene formato, detecta títulos automáticamente. Perfecto para documentos, reportes y textos." />
        <link rel="canonical" href="https://corquark.com/txt-a-pdf" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir TXT a PDF</h1>
        <p className="hero-description">
          Transforma tus archivos de texto plano en documentos PDF profesionales. 
          Detecta títulos automáticamente y mantiene la estructura original.
        </p>
      </div>

      <BaseConversionPage
        title="TXT a PDF"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="txt"
        toFormat="pdf"
        functionType="document"
        acceptedTypes={['txt']}
        conversionOptions={conversionOptions}
        comboType="combo2"
      />

      <ExtraSection title="" background="#ffffff" color="#000000">
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h3>¿Por qué convertir TXT a PDF?</h3>
          <p>
            Los archivos PDF son ideales para compartir documentos que mantengan su formato original,
            sin importar el dispositivo o sistema operativo donde se abran.
          </p>
        </div>
      </ExtraSection>
    </div>
  );
};

export default TxtToPdfPage;