import React, { useState } from 'react';
import Exp from "../assets/img/icons/verificar.png";
import Sol from "../assets/img/icons/llave-inglesa.png";
import Res from "../assets/img/icons/exito.png";
import "../assets/css/experiencia.css";
import WpIc from "./Wp_icon";

function Apartado({ img, titulo, subtitulo }) {
  const [desplegado, setDesplegado] = useState(false);

  const toggleContenido = () => {
    setDesplegado(!desplegado);
  };

  return (
    <div className="apartado">
      <img
        src={img}
        alt=""
        onClick={toggleContenido}
        style={{ cursor: "pointer" }}
      />
      <div
        className="texto-desplegable"
        style={{
          maxHeight: desplegado ? "100px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.5s ease",
        }}
      >
        <h2>{titulo}</h2>
        <h3>{subtitulo}</h3>
      </div>
    </div>
  );
}

function Experiencia() {
  return (
    <section id="experiencia">
      <div className="fond">
        <h2 data-aos="zoom-in">Más que consultoría, una alianza para crecer</h2>
        <div className="exp" data-aos="zoom-in">
          <Apartado
            img={Exp}
            titulo="Nuestra historia"
            subtitulo="Más de 20 años apoyando el emprendimiento mexicano."
          />
          <Apartado
            img={Sol}
            titulo="Servicios"
            subtitulo="Estrategias integrales para innovación y crecimiento."
          />
          <Apartado
            img={Res}
            titulo="Impacto"
            subtitulo="Hacemos que las ideas se conviertan en resultados reales."
          />
        </div>
      </div>
    </section>
  );
}

export default Experiencia;
