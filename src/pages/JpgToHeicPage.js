// ========== JPG a HEIC ==========
import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const JpgToHeicPage = () => {
 const conversionOptions = [
   { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
   { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
   { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
 ];

 const jsonLd = {
   "@context": "https://schema.org",
   "@type": ["SoftwareApplication","HowTo","FAQPage"],
   "name": "JPG a HEIC — Convertidor Online",
   "applicationCategory": "FileConverter",
   "operatingSystem": "Web",
   "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
   "howToSteps": [
     { "@type":"HowToStep","text":"Sube tu archivo JPG." },
     { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
     { "@type":"HowToStep","text":"Descarga el HEIC." }
   ],
   "image": "https://corquark.com/assets/ejemplos/jpg-heic-ejemplo.jpg",
   "url": "https://corquark.com/jpg-a-heic",
   "mainEntity": [{
     "@type":"Question",
     "name":"¿Por qué convertir JPG a HEIC?",
     "acceptedAnswer":{"@type":"Answer","text":"HEIC ofrece mejor compresión que JPG con la misma calidad, reduciendo el tamaño de archivo significativamente."}
   }]
 };

 return (
   <div className="conversion-page-container">
     <Helmet>
       <title>JPG a HEIC — Convertidor Online Gratis</title>
       <meta name="description" content="Convierte JPG a HEIC gratis. Transforma imágenes JPG al formato Apple con mejor compresión y calidad." />
       <link rel="canonical" href="https://corquark.com/jpg-a-heic" />
       <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
     </Helmet>

     <div className="hero-section">
       <h1 className="hero-title">Convertir JPG a HEIC</h1>
       <p className="hero-description">
         Convierte imágenes JPG a HEIC para mejor compresión y calidad. Formato eficiente para dispositivos Apple.
       </p>
     </div>

     <BaseConversionPage
       title="JPG a HEIC"
       icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
       fromFormat="jpg"
       toFormat="heic"
       functionType = "image"
       acceptedTypes={['jpg', 'jpeg']}
       conversionOptions={conversionOptions}
       comboType="combo2"
     />

     <ExtraSection title="" background="#ffffff" color="#000000">
     </ExtraSection>
   </div>
 );
};

export default JpgToHeicPage;
