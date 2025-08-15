import React from 'react';
import { CONTACT_INFO, FOOTER_LINKS, SOCIAL_ICONS } from '../utils/constants';
import '../styles/components.css';

const SocialIcon = ({ type, path }) => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d={path} />
  </svg>
);

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Contacto */}
          <div className="footer-section">
            <h3>CONTACTO</h3>
            <div>
              <p>{CONTACT_INFO.schedule}</p>
              <a href={`mailto:${CONTACT_INFO.email}`} className="email-link">
                {CONTACT_INFO.email}
              </a>
              <p>COL: {CONTACT_INFO.phoneCol}</p>
              <p>USA: {CONTACT_INFO.phoneUSA}</p>
            </div>
          </div>

          {/* Información */}
          <div className="footer-section">
            <h3>INFORMACIÓN</h3>
            <div>
              {FOOTER_LINKS.info.map((link, index) => (
                <a key={index} href={link.href} className="footer-link">
                  {link.text}
                </a>
              ))}
            </div>
          </div>

          {/* Socios */}
          <div className="footer-section">
            <h3>SÉ NUESTRO SOCIO</h3>
            <div>
              {FOOTER_LINKS.partners.map((link, index) => (
                <a key={index} href={link.href} className="footer-link">
                  {link.text}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h3>¿Quieres Mantenerte Al Día?</h3>
            <div>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Ingresa tu email aquí"
                  className="email-input"
                />
                <button className="submit-btn">
                  →
                </button>
              </div>
              
              {/* Redes sociales */}
              <div className="social-links">
                <a href="#facebook" className="social-link">
                  <SocialIcon type="facebook" path={SOCIAL_ICONS.facebook} />
                </a>
                <a href="#pinterest" className="social-link">
                  <SocialIcon type="pinterest" path={SOCIAL_ICONS.pinterest} />
                </a>
                <a href="#instagram" className="social-link">
                  <SocialIcon type="instagram" path={SOCIAL_ICONS.instagram} />
                </a>
                <a href="#tiktok" className="social-link">
                  <SocialIcon type="tiktok" path={SOCIAL_ICONS.tiktok} />
                </a>
              </div>

              {/* Selector de moneda */}
              <div style={{ paddingTop: '16px' }}>
                <select className="currency-selector">
                  <option value="COP" className="currency-option">🇨🇴 (COP $)</option>
                  <option value="USD" className="currency-option">🇺🇸 (USD $)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright">
          © 2025, QUARKIVO Archivo. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;