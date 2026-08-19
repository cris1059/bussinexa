import React from 'react';
import { Link } from 'react-scroll';
import '../assets/css/taller.css';

import Faceicon from '../assets/img/icons/facebook.png';
import Instaicon from '../assets/img/icons/instagram.png';
import Whatsicon from '../assets/img/icons/whatsapp.png';

function Taller() {
  return (
    <section id="novedades">
      <h2 data-aos="zoom-in">Novedades</h2>
      
      <div className="taller-container">
        <div className="novedades-banner-card" data-aos="fade-up">
          <h3>¡Próximos Eventos Muy Pronto!</h3>
          <p>
            Estamos preparando nuevos talleres, master class  y eventos presenciales para ti. 
            Mantente informado sobre nuestras próximas fechas siguiéndonos en redes sociales o contáctanos directamente.
          </p>

          <div className="novedades-action-buttons">
            <a 
              href="https://www.facebook.com/profile.php?id=61573655517931&locale=es_LA" 
              target="_blank" 
              rel="noreferrer" 
              className="social-btn facebook"
            >
              <img src={Faceicon} alt="Facebook" />
              <span>Facebook</span>
            </a>
            <a 
              href="https://www.instagram.com/bussi_nexa/" 
              target="_blank" 
              rel="noreferrer" 
              className="social-btn instagram"
            >
              <img src={Instaicon} alt="Instagram" />
              <span>Instagram</span>
            </a>
            <a 
              href="https://wa.me/5513697365" 
              target="_blank" 
              rel="noreferrer" 
              className="social-btn whatsapp"
            >
              <img src={Whatsicon} alt="WhatsApp" />
              <span>WhatsApp</span>
            </a>
            <Link 
              to="contacto" 
              smooth={true} 
              duration={600} 
              className="contact-scroll-btn"
            >
              Contactar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Taller;
