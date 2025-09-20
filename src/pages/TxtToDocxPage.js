import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const TxtToDocxPage = () => {
  const conversionOptions = [
    { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Formato compacto' },
    { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Formato profesional' },
    { id: 'reduce-noise', icon: <img src={noiseIcon} alt="ruido" width={24} height={24} />, label: 'Limpiar espacios extra' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "TXT a DOCX — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo TXT." },
      { "@type":"HowToStep","text":"Selecciona las opciones de formato." },
      { "@type":"HowToStep","text":"Descarga el archivo DOCX." }
    ],
    "image": "https://corquark.com/assets/ejemplos/txt-docx-ejemplo.jpg",
    "url": "https://corquark.com/txt-a-docx",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Qué es DOCX?",
      "acceptedAnswer":{"@type":"Answer","text":"DOCX es el formato moderno de Microsoft Word, compatible con la mayoría de editores de texto y fácil de editar."}
    },{
      "@type":"Question",
      "name":"¿Detecta títulos automáticamente?",
      "acceptedAnswer":{"@type":"Answer","text":"Sí, el convertidor identifica líneas que parecen títulos y las formatea como encabezados en el documento Word."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>TXT a DOCX — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte TXT a DOCX gratis. Crea documentos Word editables desde texto plano. Detecta títulos y estructura automáticamente." />
        <link rel="canonical" href="https://corquark.com/txt-a-docx" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir TXT a DOCX</h1>
        <p className="hero-description">
          Convierte texto plano en documentos Word editables. 
          Perfecto para crear documentos que puedas modificar y formatear después.
        </p>
      </div>

      <BaseConversionPage
        title="TXT a DOCX"
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
          <h3>Ventajas del formato DOCX</h3>
          <p>
            DOCX es el estándar moderno para documentos de texto. Es compatible con Microsoft Word,
            Google Docs, LibreOffice y la mayoría de editores de texto actuales.
          </p>
        </div>
      </ExtraSection>
    </div>
  );
};

export default TxtToDocxPage;