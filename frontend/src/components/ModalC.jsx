import React, { useEffect } from "react";
import "../assets/css/modal_dos.css";
import { HashLink } from "react-router-hash-link";

function ModalC({ isOpen, onClose, titulo, subtitulo, tiempo, texto, img, lista }) {
  
  
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
      <div data-aos="zoom-in" className="modal-conten" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <div className="fleDC">
          <h2>{titulo}</h2>
        </div>
        <h5>{subtitulo}</h5>
        <h6>Tiempo: <span>{tiempo}</span></h6>
        <h6>{texto}</h6>
        <ul>
          {Array.isArray(lista) ? (
            lista.map((elemento, i) => <li key={i}>{elemento}</li>)
          ) : (
            <li>{lista}</li> 
          )}
        </ul>
        <HashLink smooth to="/#contacto" className="btn_contac" onClick={onClose}>Contáctanos ahora</HashLink>

      </div>
    </div>
  );
}

export default ModalC;
