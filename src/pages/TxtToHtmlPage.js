import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const TxtToHtmlPage = () => {
  const conversionOptions = [
 //   { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'HTML ligero (sin CSS)' },
  //  { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Diseño elegante' },
   // { id: 'reduce-noise', icon: <img src={noiseIcon} alt="ruido" width={24} height={24} />, label: 'Limpiar formato' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication","HowTo","FAQPage"],
    "name": "TXT a HTML — Convertidor Online",
    "applicationCategory": "FileConverter",
    "operatingSystem": "Web",
    "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
    "howToSteps": [
      { "@type":"HowToStep","text":"Sube tu archivo TXT." },
      { "@type":"HowToStep","text":"Selecciona el estilo de página web." },
      { "@type":"HowToStep","text":"Descarga el archivo HTML." }
    ],
    "image": "https://corquark.com/assets/ejemplos/txt-html-ejemplo.jpg",
    "url": "https://corquark.com/txt-a-html",
    "mainEntity": [{
      "@type":"Question",
      "name":"¿Para qué sirve convertir a HTML?",
      "acceptedAnswer":{"@type":"Answer","text":"HTML es perfecto para publicar contenido en web, blogs, o cualquier plataforma online. Se ve igual en todos los navegadores."}
    },{
      "@type":"Question",
      "name":"¿Incluye estilos CSS?",
      "acceptedAnswer":{"@type":"Answer","text":"Sí, por defecto incluye CSS integrado para que se vea profesional. Puedes elegir la opción 'ligero' para HTML puro."}
    }]
  };

  return (
    <div className="conversion-page-container">
      <Helmet>
        <title>TXT a HTML — Convertidor Online Gratis</title>
        <meta name="description" content="Convierte TXT a HTML gratis. Transforma texto plano en páginas web con estilos CSS. Perfecto para blogs y sitios web." />
        <link rel="canonical" href="https://corquark.com/txt-a-html" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Convertir TXT a HTML</h1>
        <p className="hero-description">
          Convierte texto plano en páginas web con estilos incluidos. 
          Perfecto para blogs, documentación web y contenido online.
        </p>
      </div>

      <BaseConversionPage
        title="TXT a HTML"
        icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
        fromFormat="txt"
        toFormat="html"
        functionType="document"
        acceptedTypes={['txt']}
        conversionOptions={conversionOptions}
        comboType="combo2"
      />

      <ExtraSection title="" background="#ffffff" color="#000000">
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h3>¿Por qué HTML?</h3>
          <p>
            HTML es el lenguaje universal de la web. Tu texto convertido se verá perfecto 
            en cualquier navegador y es fácil de publicar online o integrar en sitios web.
          </p>
        </div>
      </ExtraSection>
    </div>
  );
};

export default TxtToHtmlPage;