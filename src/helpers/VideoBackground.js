import React, { useState, useRef, useEffect } from 'react';
import { videoSources } from './videoData';

const VideoBackground = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(() => 
    Math.floor(Math.random() * videoSources.length)
  );
  const videoRef = useRef(null);

  // Función para obtener el siguiente video aleatorio (diferente al actual)
  const getNextRandomVideo = () => {
    if (videoSources.length <= 1) return 0;
    
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * videoSources.length);
    } while (newIndex === currentVideoIndex);
    
    return newIndex;
  };

  // Manejar cuando termina un video
  const handleVideoEnded = () => {
    const nextIndex = getNextRandomVideo();
    setCurrentVideoIndex(nextIndex);
  };

  // Efecto para cargar el nuevo video cuando cambia el índice
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // Recarga el video con la nueva fuente
      videoRef.current.play().catch(console.error); // Reproduce automáticamente
    }
  }, [currentVideoIndex]);

  return (
    <div className="home-video-section">
      <video 
        ref={videoRef}
        className="home-video"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnded}
        key={currentVideoIndex} // Fuerza re-render cuando cambia el video
      >
        <source src={videoSources[currentVideoIndex]} type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>
    </div>
  );
};

export default VideoBackground;