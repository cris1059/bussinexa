import '../assets/css/acerca.css';
import Somos from '../assets/img/somos.jpg';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Exp from '../assets/img/exp.jpg';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Imagen2 from '../assets/img/carrusel2.jpg';
import Imagen3 from '../assets/img/carrusel3.jpg';

const imagenes = [Somos, Imagen2, Imagen3];

function Acerca() {
  const [indice, setIndice] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalo = setInterval(() => {
      cambiarImagen((indice + 1) % imagenes.length);
    }, 5000);
    return () => clearInterval(intervalo);
  }, [indice]);

  const cambiarImagen = (nuevoIndice) => {
    setFade(false);
    setTimeout(() => {
      setIndice(nuevoIndice);
      setFade(true);
    }, 300); 
  };

  const avanzar = () => cambiarImagen((indice + 1) % imagenes.length);
  const retroceder = () => cambiarImagen((indice - 1 + imagenes.length) % imagenes.length);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="quienes-somos">
      <h2 data-aos="zoom-in">Acerca De Nosotros</h2>
      <div className='quienes' data-aos="zoom-in">

        <div className='box uno'>
          <h3 className='subtitle about_subtitle'>¿Quiénes Somos?</h3>
          <p>
            Somos un equipo con más de 20 años de experiencia, enfocado en ayudar a emprendedores y empresas a crecer e innovar. Ofrecemos soluciones integrales y trabajamos de cerca con cada cliente para convertir sus ideas en negocios exitosos.
          </p>
        </div>

        <div className="box carrusel relative">
          <div className="c_img overflow-hidden rounded-xl">
            <img
              src={imagenes[indice]}
              alt={`slide-${indice}`}
              className={`transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>

          {/* Botón Izquierdo */}
          <button
            onClick={retroceder}
            className="absolute btnizq"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Botón Derecho */}
          <button
            onClick={avanzar}
            className="absolute btnder"
          >
            <ChevronRight size={24} />
          </button>
        </div>

      </div>
    </section>
  );
}

export default Acerca;
