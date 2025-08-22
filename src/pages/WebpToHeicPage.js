// ========== WebP a HEIC ==========
import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const WebpToHeicPage = () => {
 const conversionOptions = [
   { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
   { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
   { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
 ];

 const jsonLd = {
   "@context": "https://schema.org",
   "@type": ["SoftwareApplication","HowTo","FAQPage"],
   "name": "WebP a HEIC — Convertidor Online",
   "applicationCategory": "FileConverter",
   "operatingSystem": "Web",
   "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
   "howToSteps": [
     { "@type":"HowToStep","text":"Sube tu archivo WebP." },
     { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
     { "@type":"HowToStep","text":"Descarga el HEIC." }
   ],
   "image": "https://corquark.com/assets/ejemplos/webp-heic-ejemplo.jpg",
   "url": "https://corquark.com/webp-a-heic",
   "mainEntity": [{
     "@type":"Question",
     "name":"¿Por qué convertir WebP a HEIC?",
     "acceptedAnswer":{"@type":"Answer","text":"Convierte de WebP a HEIC para compatibilidad con dispositivos Apple manteniendo alta compresión."}
   }]
 };

 return (
   <div className="conversion-page-container">
     <Helmet>
       <title>WebP a HEIC — Convertidor Online Gratis</title>
       <meta name="description" content="Convierte WebP a HEIC gratis. Transforma imágenes WebP al formato Apple para mejor compatibilidad." />
       <link rel="canonical" href="https://corquark.com/webp-a-heic" />
       <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
     </Helmet>

     <div className="hero-section">
       <h1 className="hero-title">Convertir WebP a HEIC</h1>
       <p className="hero-description">
         Convierte imágenes WebP a HEIC para compatibilidad con dispositivos Apple manteniendo alta calidad.
       </p>
     </div>

     <BaseConversionPage
       title="WebP a HEIC"
       icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
       fromFormat="webp"
       toFormat="heic"
       functionType = "image"
       acceptedTypes={['webp']}
       conversionOptions={conversionOptions}
       comboType="combo2"
     />

     <ExtraSection title="" background="#ffffff" color="#000000">
     </ExtraSection>
   </div>
 );
};

export default WebpToHeicPage;
