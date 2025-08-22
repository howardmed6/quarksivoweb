// ========== AVIF a HEIC ==========
import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const AvifToHeicPage = () => {
 const conversionOptions = [
   { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
   { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
   { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
 ];

 const jsonLd = {
   "@context": "https://schema.org",
   "@type": ["SoftwareApplication","HowTo","FAQPage"],
   "name": "AVIF a HEIC — Convertidor Online",
   "applicationCategory": "FileConverter",
   "operatingSystem": "Web",
   "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
   "howToSteps": [
     { "@type":"HowToStep","text":"Sube tu archivo AVIF." },
     { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
     { "@type":"HowToStep","text":"Descarga el HEIC." }
   ],
   "image": "https://corquark.com/assets/ejemplos/avif-heic-ejemplo.jpg",
   "url": "https://corquark.com/avif-a-heic",
   "mainEntity": [{
     "@type":"Question",
     "name":"¿Por qué convertir AVIF a HEIC?",
     "acceptedAnswer":{"@type":"Answer","text":"Convierte de AVIF a HEIC para compatibilidad con el ecosistema Apple manteniendo alta eficiencia."}
   }]
 };

 return (
   <div className="conversion-page-container">
     <Helmet>
       <title>AVIF a HEIC — Convertidor Online Gratis</title>
       <meta name="description" content="Convierte AVIF a HEIC gratis. Transforma imágenes AVIF al formato Apple para mejor integración." />
       <link rel="canonical" href="https://corquark.com/avif-a-heic" />
       <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
     </Helmet>

     <div className="hero-section">
       <h1 className="hero-title">Convertir AVIF a HEIC</h1>
       <p className="hero-description">
         Convierte imágenes AVIF a HEIC para integración perfecta con dispositivos Apple manteniendo eficiencia.
       </p>
     </div>

     <BaseConversionPage
       title="AVIF a HEIC"
       icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
       fromFormat="avif"
       toFormat="heic"
       functionType = "image"
       acceptedTypes={['avif']}
       conversionOptions={conversionOptions}
       comboType="combo2"
     />

     <ExtraSection title="" background="#ffffff" color="#000000">
     </ExtraSection>
   </div>
 );
};

export default AvifToHeicPage;
