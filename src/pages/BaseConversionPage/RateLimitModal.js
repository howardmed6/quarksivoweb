import React from 'react';
import '../../styles/rate-limit-modal.css';

const RateLimitModal = ({ 
  showRateLimitModal, 
  rateLimitInfo, 
  closeRateLimitModal 
}) => {
  if (!showRateLimitModal) return null;

  return (
    <div className="rate-limit-modal-overlay" onClick={closeRateLimitModal}>
      <div className="rate-limit-modal" onClick={(e) => e.stopPropagation()}>
        <div className="rate-limit-modal-header">
          <h2>🚫 Límite de Peticiones Alcanzado</h2>
          <button className="rate-limit-modal-close" onClick={closeRateLimitModal}>
            ✕
          </button>
        </div>
        
        <div className="rate-limit-modal-body">
          <div className="rate-limit-icon">
            ⏰
          </div>
          
          <p className="rate-limit-message">
            {rateLimitInfo?.message}
          </p>
          
          <div className="rate-limit-details">
            <div className="rate-limit-stat">
              <span className="stat-label">Límite diario:</span>
              <span className="stat-value">{rateLimitInfo?.maxRequests || 20} peticiones</span>
            </div>
            
            <div className="rate-limit-stat">
              <span className="stat-label">Peticiones restantes:</span>
              <span className="stat-value">{rateLimitInfo?.remaining || 0}</span>
            </div>
            
            {rateLimitInfo?.resetTime && (
              <div className="rate-limit-stat">
                <span className="stat-label">Reinicio del límite:</span>
                <span className="stat-value">
                  {new Date(rateLimitInfo.resetTime).toLocaleString('es-ES')}
                </span>
              </div>
            )}
          </div>
          
          <div className="rate-limit-suggestions">
            <h4>💡 Sugerencias:</h4>
            <ul>
              <li>Espera hasta que se restablezca tu límite diario</li>
              <li>Optimiza tus imágenes antes de convertir para reducir peticiones</li>
              <li>Agrupa varias conversiones si es posible</li>
            </ul>
          </div>
        </div>
        
        <div className="rate-limit-modal-footer">
          <button className="rate-limit-ok-btn" onClick={closeRateLimitModal}>
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};

export default RateLimitModal;