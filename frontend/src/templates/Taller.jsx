import React, { useState } from 'react';
import '../assets/css/taller.css';
import InnovacionImg from '../assets/img/Innovacion.jpeg';
import RegistroMarcasImg from '../assets/img/Registro-Marcas.jpeg';
import MasterClassImg from '../assets/img/Master-Class.jpeg';

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
      
      <div className="taller-container">
        
        {/* Bloque 1: Master Class (Imagen Izquierda, Texto Derecha) */}
        <div className="novedades-item card-glass" data-aos="fade-right">
          <div className="novedades-img-container">
            <img 
              src={MasterClassImg} 
              alt="Master Class de CV y Entrevista" 
              className="novedades-promo-img"
              onClick={() => openLightbox(MasterClassImg)}
            />
          </div>
          <div className="novedades-text-container">
            <span className="novedades-tag">Desarrollo Profesional</span>
            <h3>Impulsa tu Futuro Profesional</h3>
            <p>
              Diseñada especialmente para estudiantes y recién graduados, esta máster class presencial te brindará las herramientas definitivas para destacar en el competitivo mercado laboral. Aprende a redactar un currículum de alto impacto y domina las técnicas clave para triunfar en entrevistas de trabajo en entornos profesionales reales. ¡El momento de abrir las puertas a tu éxito profesional es ahora!
            </p>
          </div>
        </div>

        {/* Bloque 2: Registro de Marcas (Texto Izquierda, Imagen Derecha) */}
        <div className="novedades-item card-glass reverse" data-aos="fade-left">
          <div className="novedades-text-container">
            <span className="novedades-tag">Identidad de Marca</span>
            <h3>Asegura la Identidad de tu Negocio</h3>
            <p>
              Tu marca es tu activo comercial más valioso; no permitas que otros se apropien del nombre que construiste con tanto esfuerzo. Conoce el proceso paso a paso, los requisitos indispensables y las estrategias clave para registrar exitosamente tu marca ante el <strong>IMPI</strong>. Fortalece tu presencia comercial, genera confianza en tus clientes y blinda legalmente tu negocio desde hoy.
            </p>
          </div>
          <div className="novedades-img-container">
            <img 
              src={RegistroMarcasImg} 
              alt="Registro de Marcas" 
              className="novedades-promo-img"
              onClick={() => openLightbox(RegistroMarcasImg)}
            />
          </div>
        </div>

        {/* Bloque 3: Innovación (Imagen Izquierda, Texto Derecha) */}
        <div className="novedades-item card-glass" data-aos="fade-right">
          <div className="novedades-img-container">
            <img 
              src={InnovacionImg} 
              alt="Innovación y Propiedad Intelectual" 
              className="novedades-promo-img"
              onClick={() => openLightbox(InnovacionImg)}
            />
          </div>
          <div className="novedades-text-container">
            <span className="novedades-tag">Capacitación y Legalidad</span>
            <h3>¡Protege tu Creatividad e Innovación!</h3>
            <p>
              Descubre cómo resguardar tus ideas más valiosas y convertirlas en activos estratégicos para tu negocio. Aprende de la mano del Mtro. Javier Nava Vega la importancia de proteger tus obras y creaciones ante <strong>INDAUTOR</strong>. Blindar tu propiedad intelectual es el primer paso para impulsar la innovación, aportar valor real a tus proyectos y asegurar tu éxito en el mercado.
            </p>
          </div>
        </div>

      </div>

      {isOpen && (
        <div className={`lightbox-modal ${isOpen ? 'open' : ''}`} onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <img src={currentImg} alt="Zoom Novedades" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Taller;

