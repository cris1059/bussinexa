import React, { useState } from 'react';
import '../assets/css/taller.css';
import TuMarca from '../assets/img/Tu_Marca.jpeg';
// Imagen para novedades
import VentajasDesventajes from '../assets/img/ventajas.jpeg';

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

        <div className="novedades-content" style={{ 
          display: 'flex', 
          flexDirection: 'row',
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '50px', 
          maxWidth: '1100px', 
          margin: '0 auto',
          flexWrap: 'wrap'
        }}>
          <div className="novedades-img-container" style={{ flex: '1', minWidth: '350px', display: 'flex', justifyContent: 'center' }}>
             <img 
               src={VentajasDesventajes} 
               alt="Ventajas y Desventajas" 
               className="novedades-promo-img"
               onClick={() => openLightbox(VentajasDesventajes)}
             />
          </div>
          <div className="novedades-text-container" style={{ flex: '1', minWidth: '300px' }}>
             <h3 style={{ color: 'var(--color-primario, #e30b0b)', fontSize: '28px', marginBottom: '15px' }}>¡Promoción Especial, No te lo puedes perder!</h3>
             <p style={{ fontSize: '18px', color: '#333', lineHeight: '1.6', textAlign: 'justify' }}>
               Conoce todas las ventajas y beneficios que tenemos preparados para ti. Acompáñanos en esta sesión única donde descubrirás estrategias clave, conocerás a nuestros expertos y sobre todo, aprenderás cómo llevar tu negocio al siguiente nivel con nuestras soluciones.
             </p>
          </div>
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
