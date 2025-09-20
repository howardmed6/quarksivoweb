import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const TxtToWordPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Documento ligero' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Formato elegante' },
    { id: 'reduce-noise', icon: <img src={noiseIcon} alt="ruido" width={24} height={24} />, label: 'Texto limpio' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "TXT a Word — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo de texto TXT." },
      { "@type":"HowToStep","text":"Elige el estilo de formato." },
      { "@type":"HowToStep","text":"Descarga tu documento Word." }
    ],
    "image": "https://corquark.com/assets/ejemplos/txt-word-ejemplo.jpg",
    "url": "https://corquark.com/txt-a-word",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Puedo abrir el resultado en Word?",
      "acceptedAnswer":{"@type":"Answer","text":"Sí, el archivo generado es 100% compatible con Microsoft Word y otros editores como Google Docs."}
    },{
      "@type":"Question",
      "name":"¿Mantiene el formato del texto?",
      "acceptedAnswer":{"@type":"Answer","text":"El convertidor estructura automáticamente el texto, detecta títulos y crea un documento Word bien formateado."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>TXT a Word — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte TXT a Word gratis. Transforma texto plano en documentos Word editables. Compatible con Microsoft Word y Google Docs." />
        <link rel="canonical" href="https://corquark.com/txt-a-word" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir TXT a Word</h1>
        <p className="hero-description">
          Transforma tus archivos de texto en documentos Word editables. 
          Compatible con Microsoft Word, Google Docs y otros editores populares.
        </p>
      </div>

      <BaseConversionPage
        title="TXT a Word"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="txt"
        toFormat="docx"
        functionType="document"
        acceptedTypes={['txt']}
        conversionOptions={conversionOptions}
        comboType="combo2"
      />

      <ExtraSection title="" background="#ffffff" color="#000000">
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h3>¿Por qué usar Word?</h3>
          <p>
            Microsoft Word es el procesador de textos más usado del mundo. 
            Convierte tu TXT a Word para editarlo fácilmente, añadir imágenes, tablas y más formato.
          </p>
        </div>
      </ExtraSection>
    </div>
  );
};

export default TxtToWordPage;