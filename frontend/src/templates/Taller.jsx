import React, { useState } from 'react';
import '../assets/css/taller.css';
import TuMarca from '../assets/img/Tu_Marca.jpeg';
// Imágenes para novedades (Asegúrate de guardarlas en src/assets/img con estos nombres)
import novedad1 from '../assets/img/novedad1.jpeg';
import novedad2 from '../assets/img/novedad2.jpeg';
import novedad3 from '../assets/img/novedad3.jpeg';

function Taller() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);

  const openLightbox = (imgSrc) => {
    setCurrentImg(imgSrc);
    setIsOpen(true);
  };
  
  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImg(null);
  };

  return (
    <section id="novedades">
      <h2 data-aos="zoom-in">Novedades</h2>
      
      <div className="taller-container" data-aos="fade-up">

        {/* --- CAROUSEL PURE CSS --- */}
        <div className="novedades-carousel-container">
          <div className="novedades-carousel-track">
            <div className="novedades-carousel-slide" onClick={() => openLightbox(novedad1)}>
              {/* Cambia el fallback si la imagen aún no se sube para que no se rompa la app */}
              <img src={novedad1} alt="Novedad 1" onError={(e) => e.target.src=TuMarca} />
            </div>
            <div className="novedades-carousel-slide" onClick={() => openLightbox(novedad2)}>
              <img src={novedad2} alt="Novedad 2" onError={(e) => e.target.src=TuMarca} />
            </div>
            <div className="novedades-carousel-slide" onClick={() => openLightbox(novedad3)}>
              <img src={novedad3} alt="Novedad 3" onError={(e) => e.target.src=TuMarca} />
            </div>
            {/* Slide duplicado para lograr el efecto infinito sin cortes */}
            <div className="novedades-carousel-slide" onClick={() => openLightbox(novedad1)}>
              <img src={novedad1} alt="Novedad 1" onError={(e) => e.target.src=TuMarca} />
            </div>
          </div>
        </div>

        <div className="novedades-description" style={{ textAlign: 'center', marginTop: '30px' }}>
          <p style={{ fontSize: '18px', color: '#333', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            ¡No te pierdas nuestro evento especial <strong>este martes</strong>! Acompáñanos en esta sesión única donde descubrirás estrategias clave, conocerás a nuestros expertos y sobre todo aprenderás cómo llevar tu negocio al siguiente nivel.
          </p>
        </div>

        {/* ---SECCIÓN TALLER--- 
        <div className="taller-top-row" style={{ marginTop: '50px' }}>
            <div className="taller-img" onClick={() => openLightbox(TuMarca)}>
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
        */}
        
      </div>

      {isOpen && (
        <div className={`lightbox-modal ${isOpen ? 'open' : ''}`} onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <img src={currentImg} alt="Zoom Lightbox" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Taller;
