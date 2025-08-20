// ========== HEIC a AVIF ==========
import React from 'react';
import { Helmet } from 'react-helmet-async';
import BaseConversionPage from './BaseConversionPage/BaseConversionPage';
import ExtraSection from './BaseConversionPage/ExtraSection';
import { reloadIcon, optimizeIcon, qualityIcon, noiseIcon } from '../utils/iconImports';
import '../styles/pagespages.css';

const HeicToAvifPage = () => {
 const conversionOptions = [
   { id: 'optimize-size', icon: <img src={optimizeIcon} alt="optimizar" width={24} height={24} />, label: 'Disminuir tamaño en lo posible' },
   { id: 'improve-quality', icon: <img src={qualityIcon} alt="calidad" width={24} height={24} />, label: 'Mejorar calidad' },
   { id: 'reduce-noise',  icon: <img src={noiseIcon}  alt="ruido"     width={24} height={24} />, label: 'Reducir ruido' }
 ];

 const jsonLd = {
   "@context": "https://schema.org",
   "@type": ["SoftwareApplication","HowTo","FAQPage"],
   "name": "HEIC a AVIF — Convertidor Online",
   "applicationCategory": "FileConverter",
   "operatingSystem": "Web",
   "offers": { "@type":"Offer", "price":"0", "priceCurrency":"USD" },
   "howToSteps": [
     { "@type":"HowToStep","text":"Sube tu archivo HEIC." },
     { "@type":"HowToStep","text":"Elige la opción deseada (calidad/tamaño/ruido)." },
     { "@type":"HowToStep","text":"Descarga el AVIF." }
   ],
   "image": "https://tu-dominio.com/assets/ejemplos/heic-avif-ejemplo.jpg",
   "url": "https://tu-dominio.com/heic-a-avif",
   "mainEntity": [{
     "@type":"Question",
     "name":"¿Por qué convertir HEIC a AVIF?",
     "acceptedAnswer":{"@type":"Answer","text":"AVIF es el formato de imagen más avanzado con la mejor compresión y calidad, soportado por navegadores modernos."}
   }]
 };

 return (
   <div className="conversion-page-container">
     <Helmet>
       <title>HEIC a AVIF — Convertidor Online Gratis</title>
       <meta name="description" content="Convierte HEIC a AVIF gratis. Transforma fotos de iPhone/iPad al formato más avanzado con mejor compresión." />
       <link rel="canonical" href="https://tu-dominio.com/heic-a-avif" />
       <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
     </Helmet>

     <div className="hero-section">
       <h1 className="hero-title">Convertir HEIC a AVIF</h1>
       <p className="hero-description">
         Convierte fotos HEIC de iPhone/iPad a AVIF, el formato más avanzado con la mejor compresión y calidad.
       </p>
     </div>

     <BaseConversionPage
       title="HEIC a AVIF"
       icon={<img src={reloadIcon} alt="reload" width={124} height={124} />}
       fromFormat="heic"
       toFormat="avif"
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

export default HeicToAvifPage;