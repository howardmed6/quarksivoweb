import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const TxtToPptPage = () => {
  const conversionOptions = [
   // { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Más contenido por slide' },
    //{ id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Slides más elegantes' },
  //  { id: 'reduce-noise', icon: <img src={noiseIcon} alt="ruido" width={24} height={24} />, label: 'Texto más limpio' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "TXT a PPT — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo de texto TXT." },
      { "@type":"HowToStep","text":"Elige las opciones de presentación." },
      { "@type":"HowToStep","text":"Descarga tu presentación PowerPoint." }
    ],
    "image": "https://corquark.com/assets/ejemplos/txt-ppt-ejemplo.jpg",
    "url": "https://corquark.com/txt-a-ppt",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Cómo divide el texto en slides?",
      "acceptedAnswer":{"@type":"Answer","text":"El convertidor detecta automáticamente títulos y secciones para crear slides lógicos, aproximadamente 150 palabras por slide."}
    },{
      "@type":"Question",
      "name":"¿Funciona con PowerPoint?",
      "acceptedAnswer":{"@type":"Answer","text":"Sí, genera archivos PPTX completamente compatibles con Microsoft PowerPoint, Google Slides y otros editores."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>TXT a PPT — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte TXT a PowerPoint gratis. Crea presentaciones automáticamente desde texto plano. Compatible con PPT y Google Slides." />
        <link rel="canonical" href="https://corquark.com/txt-a-ppt" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir TXT a PowerPoint</h1>
        <p className="hero-description">
          Transforma texto plano en presentaciones PowerPoint automáticamente. 
          Divide el contenido en slides y detecta títulos para crear presentaciones profesionales.
        </p>
      </div>

      <BaseConversionPage
        title="TXT a PPT"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="txt"
        toFormat="pptx"
        functionType="document"
        acceptedTypes={['txt']}
        conversionOptions={conversionOptions}
        comboType="combo2"
      />

      <ExtraSection title="" background="#ffffff" color="#000000">
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h3>De texto a presentación en segundos</h3>
          <p>
            Perfecto para convertir apuntes, guiones o documentos en presentaciones. 
            El algoritmo divide automáticamente el contenido en slides legibles y bien estructurados.
          </p>
        </div>
      </ExtraSection>
    </div>
  );
};

export default TxtToPptPage;