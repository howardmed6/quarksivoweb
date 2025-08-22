// ========== HEIC a WEBP ==========
import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const HeicToWebpPage = () => {
 const conversionOptions = [
   { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
   { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
   { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
 ];

 const jsonLd = {
   "@context": "https://schema.org",
   "@type": ["SoftwareApplication","HowTo","FAQPage"],
   "name": "HEIC a WebP — Convertidor Online",
   "applicationCategory": "FileConverter",
   "operatingSystem": "Web",
   "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
   "howToSteps": [
     { "@type":"HowToStep","text":"Sube tu archivo HEIC." },
     { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
     { "@type":"HowToStep","text":"Descarga el WebP." }
   ],
   "image": "https://corquark.com/assets/ejemplos/heic-webp-ejemplo.jpg",
   "url": "https://corquark.com/heic-a-webp",
   "mainEntity": [{
     "@type":"Question",
     "name":"¿Por qué convertir HEIC a WebP?",
     "acceptedAnswer":{"@type":"Answer","text":"WebP ofrece mejor compresión que JPG manteniendo alta calidad, ideal para web y aplicaciones modernas."}
   }]
 };

 return (
   <div className="conversion-page-container">
     <Helmet>
       <title>HEIC a WebP — Convertidor Online Gratis</title>
       <meta name="description" content="Convierte HEIC a WebP gratis. Transforma fotos de iPhone/iPad a formato moderno con mejor compresión y calidad." />
       <link rel="canonical" href="https://corquark.com/heic-a-webp" />
       <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
     </Helmet>

     <div className="hero-section">
       <h1 className="hero-title">Convertir HEIC a WebP</h1>
       <p className="hero-description">
         Convierte fotos HEIC de iPhone/iPad a WebP para mejor compresión y calidad. Formato moderno ideal para web.
       </p>
     </div>

     <BaseConversionPage
       title="HEIC a WebP"
       icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
       fromFormat="heic"
       toFormat="webp"
       functionType = "image"
       acceptedTypes={['heic']}
       conversionOptions={conversionOptions}
       comboType="combo2"
     />

     <ExtraSection title="" background="#ffffff" color="#000000">
     </ExtraSection>
   </div>
 );
};

export default HeicToWebpPage;