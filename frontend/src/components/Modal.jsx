import React, { useEffect } from "react";
import "../assets/css/modal.css";
import { scroller } from 'react-scroll';


function Modal({ isOpen, onClose, title, text, subtitle, image, classe, logo }) {
  
  const todasClasses = ["modal-content"].concat(
    Array.isArray(classe) ? classe : typeof classe === "string" ? [classe] : []
  );

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div data-aos="zoom-in" className={todasClasses.join(" ")} onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <div className="fleDC">
            <div className="imagenesL">
                
                <img className="producto" src={image} alt={title} />

            </div>
          <h2>{title}</h2>
        </div>
        <h5>{subtitle}</h5>
        <h6>¿Qué incluye el curso?</h6>
        <ul>
          {Array.isArray(text) ? (
            text.map((elemento, i) => <li key={i}>{elemento}</li>)
          ) : (
            <li>{text}</li> 
          )}
        </ul>
        <button
        className="btn_contac"
  onClick={() => {
    onClose(); 
    setTimeout(() => {
      scroller.scrollTo("contacto", {
        duration: 700,
        smooth: true,
        offset: -50, 
      });
    }, 100); 
  }}
>
  Contáctanos ahora
</button>

      </div>
    </div>
  );
}

export default Modal;
