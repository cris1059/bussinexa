import React, { useState } from 'react';
import '../assets/css/taller.css';
import TuMarca from '../assets/img/Tu_Marca.jpeg';

function Taller() {
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = () => setIsOpen(true);
  const closeLightbox = () => setIsOpen(false);

  return (
    <section id="taller">
      <h2 data-aos="zoom-in">Taller: Como proteger tu marca legal</h2>
      
      <div className="taller-container" data-aos="fade-up">

        
        <div className="taller-top-row">
            <div className="taller-img" onClick={openLightbox}>
                <img src={TuMarca} alt="Taller Tu Marca" />
            </div>
            
            <div className="taller-main-content">
                <h3>Haz que tu negocio sea oficialmente tuyo, no permitas que el nombre que construiste con tanto esfuerzo sea usado por alguien más.</h3>
                <p>
                    El éxito comienza con la certeza legal. Aprende a gestionar tu registro de marca de manera estratégica y construye una base sólida para el crecimiento de tu empresa.
                </p>
            </div>
        </div>


        <div className="taller-bottom-row">
            <div className="video-text-container">
                <p className="video-text">
                  ¿Sabías que tener el dominio web o el nombre en redes sociales no te hace dueño legal de tu marca? Sin un título de registro ante el IMPI, cualquier persona podría arrebatártela. Evita demandas y cierres legales integrándote a nuestro taller práctico, donde obtendrás tu solicitud lista para enviar y blindar tu negocio para siempre.
                </p>
            </div>
            <div className="taller-video">
                <iframe 
                    width="420" 
                    height="235" 
                    src="https://www.youtube.com/embed/o9VrwHVlcuc" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                ></iframe>
            </div>
        </div>
        
      </div>

      {isOpen && (
        <div className={`lightbox-modal ${isOpen ? 'open' : ''}`} onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <img src={TuMarca} alt="Taller Lightbox" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Taller;
