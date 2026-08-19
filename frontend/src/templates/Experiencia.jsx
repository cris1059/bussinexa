import React from 'react';
import Exp from "../assets/img/icons/verificar.png";
import Sol from "../assets/img/icons/llave-inglesa.png";
import Res from "../assets/img/icons/exito.png";
import "../assets/css/experiencia.css";

function Experiencia() {
    const items = [
        {
            img: Exp,
            titulo: "Nuestra historia",
            subtitulo: "Con 20 años apoyando el emprendimiento mexicano."
        },
        {
            img: Sol,
            titulo: "Servicios",
            subtitulo: "Estrategias integrales para innovación, crecimiento sostenible y liderazgo."
        },
        {
            img: Res,
            titulo: "Impacto",
            subtitulo: "Hacemos que las ideas se conviertan en resultados reales."
        }
    ];

    return (
        <section id="experiencia">
            <div className="fond">
                <h2 data-aos="zoom-in">Más que consultoría, una alianza para crecer</h2>
                <div className="exp-grid" data-aos="fade-up">
                    {items.map((item, index) => (
                        <div key={index} className="exp-card">
                            <div className="exp-icon-wrapper">
                                <img src={item.img} alt={item.titulo} />
                            </div>
                            <div className="exp-content">
                                <h3>{item.titulo}</h3>
                                <p>{item.subtitulo}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experiencia;
