import React from 'react';
import '../styles/FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <div className="features-container">
      {/* Sección 1: Sobre Quarksivo + descarga */}
      <section className="feature-section section-about">
        <div className="section-content">
          <div className="text-content">
            <h2>Quarksivo transforma tu forma de trabajar con archivos</h2>
            <ul className="feature-list">
              <li>Convierte, edita y organiza documentos sin complicaciones</li>
              <li>Todo desde una sola web, sin instalar nada</li>
              <li>Disponible para Android y muy pronto para Apple</li>
            </ul>
            <div className="download-buttons">
              <button className="btn-download btn-google-play">
                <span className="download-icon">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/5/55/Google_Play_2016_icon.svg"
    alt="Play Triangle"
    style={{ width: '20px', verticalAlign: 'middle' }}
  />
</span>

                Google Play
              </button>
              <button className="btn-download btn-app-store disabled">
<span className="download-icon">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
    alt="Apple logo"
    style={{ width: '18px', verticalAlign: 'middle' }}
  />
</span>
                App Store (Próximamente)
              </button>
            </div>
          </div>
          <div className="mockup-container">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="app-interface">
                  <div className="app-header">QUARKIVO</div>
                  <div className="app-icons">
                    <div className="app-icon">📄</div>
                    <div className="app-icon">🖼️</div>
                    <div className="app-icon">📹</div>
                    <div className="app-icon">🔒</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2: Beneficios clave */}
      <section className="feature-section section-benefits">
        <div className="section-content">
          <div className="text-content">
            <h2>Todo lo que necesitas, en un solo lugar</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">⚡</div>
                <h3>Ahorra tiempo</h3>
                <p>Evita mil webs diferentes para tareas simples</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🛠️</div>
                <h3>Múltiples funciones</h3>
                <p>Convierte formatos, edita PDFs, comprime imágenes y más</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🚀</div>
                <h3>Rápido y seguro</h3>
                <p>Sin necesidad de registro, protege tu privacidad</p>
              </div>
            </div>
          </div>
          <div className="dashboard-mockup">
            <div className="dashboard-screen">
              <div className="dashboard-header">
                <div className="logo-mini">Q</div>
                <div className="search-bar"></div>
              </div>
              <div className="dashboard-tools">
                <div className="tool-card">PDF</div>
                <div className="tool-card">IMG</div>
                <div className="tool-card">VIDEO</div>
                <div className="tool-card">WORD</div>
                <div className="tool-card">EXCEL</div>
                <div className="tool-card">ZIP</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3: Funciones destacadas */}
      <section className="feature-section section-features">
        <div className="section-content">
          <h2>¿Qué puede hacer Quarksivo por ti?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <span className="feature-emoji">📝</span>
              <span>Convertir PDF, Word, Excel, PPT, etc.</span>
            </div>
            <div className="feature-item">
              <span className="feature-emoji">🖼️</span>
              <span>Comprimir o redimensionar imágenes sin perder calidad</span>
            </div>
            <div className="feature-item">
              <span className="feature-emoji">📹</span>
              <span>Reducir tamaño de videos</span>
            </div>
            <div className="feature-item">
              <span className="feature-emoji">🔒</span>
              <span>Proteger archivos con contraseña</span>
            </div>
            <div className="feature-item">
              <span className="feature-emoji">🧹</span>
              <span>Eliminar metadatos</span>
            </div>
            <div className="feature-item">
              <span className="feature-emoji">📂</span>
              <span>Organizar documentos en carpetas</span>
            </div>
            <div className="feature-item">
              <span className="feature-emoji">🔁</span>
              <span>Conversión múltiple (batch)</span>
            </div>
            <div className="feature-item">
              <span className="feature-emoji">✂️</span>
              <span>Dividir y unir PDFs</span>
            </div>
            <div className="feature-item">
              <span className="feature-emoji">📧</span>
              <span>Comprimir para enviar por correo</span>
            </div>
            <div className="feature-item">
              <span className="feature-emoji">🖋️</span>
              <span>Editar texto en PDFs</span>
            </div>
          </div>
          <p className="features-footer">Y mucho más... todo desde una sola página, sin instalaciones.</p>
        </div>
      </section>

      {/* Sección 4: Llamado final a la acción */}
      <section className="feature-section section-cta">
        <div className="section-content">
          <h2>Empieza gratis y ahorra tiempo cada día</h2>
          <p className="cta-description">
            Quarksivo es tu nueva caja de herramientas digital. 
            Accede desde cualquier navegador, o instala la app para mayor comodidad.
          </p>
          <div className="cta-buttons">
            <button className="btn-cta btn-primary">
              🔵 Empezar gratis
            </button>
            <button className="btn-cta btn-secondary">
              ⚪ Descargar la app
            </button>
          </div>
          <div className="floating-elements">
            <div className="floating-icon icon-1">📄</div>
            <div className="floating-icon icon-2">🖼️</div>
            <div className="floating-icon icon-3">📹</div>
            <div className="floating-icon icon-4">🔒</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;