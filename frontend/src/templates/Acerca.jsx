import '../assets/css/acerca.css';
import '../assets/css/mision.css';
import '../assets/css/videos.css';
import '../assets/css/fundadores.css';
import Somos from '../assets/img/somos.jpg';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Exp from '../assets/img/exp.jpg';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Imagen2 from '../assets/img/carrusel2.jpg';
import Imagen3 from '../assets/img/carrusel3.jpg';

import Image1 from '../assets/img/Mision1.jpg';
import Image2 from '../assets/img/mision2.jpg';
import Image3 from '../assets/img/mision3.jpg';

import Fund from "../assets/img/FUNDACION.png";

const imagenes2 = [Image1, Image2, Image3];

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
    <>
      <section id="fundadores">
        <h2 data-aos="zoom-in">Fundadores</h2>
        <img data-aos="zoom-in" className='img_fundadores' src={Fund} alt="" />
        <div data-aos="zoom-in" className='name_fundadores'>
          <h3>Javier Nava Vega</h3>
          <h3>Mirna Rotstein Faias</h3>
        </div>

      </section>

      <section id="quienes-somos">
      <h2 data-aos="zoom-in">Acerca de nosotros</h2>
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

    <section id="mision">
            <h2 data-aos="fade-right">Mision</h2>

            <div className="quienes"  data-aos="fade-right">

                
        <div className="box carrusel relative">
          <div className="c_img c_imgN overflow-hidden rounded-xl">
            <img
              src={imagenes2[indice]}
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

                <div className='box boxuno'>
                    <p>
                        Nuestra misión es ser el aliado estratégico que guía a emprendedores y empresas en su camino hacia el éxito, ofreciendo asesoramiento experto y estrategias a medida.
                        Creemos en el poder del talento, la creatividad y la colaboración para transformar negocios y crear oportunidades sostenibles. <br />
                        En Bussinexa, nos enorgullece ser parte del viaje empresarial de nuestros clientes, ayudándolos a superar desafíos, alcanzar sus metas y llevar sus proyectos al mercado.
                        ¡Porque cuando nuestros clientes crecen, nosotros crecemos con ellos!
                    </p>
                </div>


            </div>            

        </section>

        <section id='videos'>
          <div className="seccion_video">
            <div className="part">
              <iframe
                height="315"
                src="https://www.youtube-nocookie.com/embed/-KvX39M56Kw?rel=0"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>


            </div>
            <div className="part">
              <h2>¿Pensando en importar desde China?</h2>
              <p>En este video descubrirás 5 tips que te ayudarán a hacerlo de forma más segura, eficiente y rentable. Desde cómo elegir proveedores confiables hasta evitar errores comunes que podrían costarte caro. ¡Ideal si estás por iniciar tu negocio o quieres mejorar tus importaciones!</p>
            </div>    
          </div>
          <div className="seccion_video">
            <div className="part">
              <h2>¿Por qué debes contar con títulos accionarios?</h2>
              <p>Los títulos accionarios respaldan legalmente tu participación en una empresa. Te dan derechos, protegen tu inversión y facilitan el crecimiento con seguridad y claridad.</p>
            </div>  
            <div className="part">
              <iframe
                height="315"
                src="https://www.youtube-nocookie.com/embed/7jKx68aA52w?rel=0"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </section>
    </>
  );
}

export default Acerca;
