// ========== PNG a HEIC ==========
import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const PngToHeicPage = () => {
 const conversionOptions = [
   { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
   { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
   { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
 ];

 const jsonLd = {
   "@context": "https://schema.org",
   "@type": ["SoftwareApplication","HowTo","FAQPage"],
   "name": "PNG a HEIC — Convertidor Online",
   "applicationCategory": "FileConverter",
   "operatingSystem": "Web",
   "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
   "howToSteps": [
     { "@type":"HowToStep","text":"Sube tu archivo PNG." },
     { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
     { "@type":"HowToStep","text":"Descarga el HEIC." }
   ],
   "image": "https://tu-dominio.com/assets/ejemplos/png-heic-ejemplo.jpg",
   "url": "https://tu-dominio.com/png-a-heic",
   "mainEntity": [{
     "@type":"Question",
     "name":"¿Por qué convertir PNG a HEIC?",
     "acceptedAnswer":{"@type":"Answer","text":"HEIC mantiene la transparencia del PNG pero con mejor compresión, ideal para imágenes con canal alfa."}
   }]
 };

 return (
   <div className="conversion-page-container">
     <Helmet>
       <title>PNG a HEIC — Convertidor Online Gratis</title>
       <meta name="description" content="Convierte PNG a HEIC gratis. Transforma imágenes PNG con transparencia al formato Apple eficiente." />
       <link rel="canonical" href="https://tu-dominio.com/png-a-heic" />
       <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
     </Helmet>

     <div className="hero-section">
       <h1 className="hero-title">Convertir PNG a HEIC</h1>
       <p className="hero-description">
         Convierte imágenes PNG a HEIC manteniendo la transparencia. Mejor compresión para dispositivos Apple.
       </p>
     </div>

     <BaseConversionPage
       title="PNG a HEIC"
       icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
       fromFormat="png"
       toFormat="heic"
       functionType = "image"
       acceptedTypes={['png']}
       conversionOptions={conversionOptions}
       comboType="combo2"
     />

     <ExtraSection title="Texto de ejemplo para futura base" background="#ffffff" color="#000000">
     </ExtraSection>
   </div>
 );
};

export default PngToHeicPage;