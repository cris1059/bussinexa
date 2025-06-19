import '../assets/css/mision.css';
import Misionimg from '../assets/img/mision.jpg';
import { useState, useEffect } from 'react';
import Creer from '../assets/img/creer.jpg';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Imagen1 from '../assets/img/mision1.jpg';
import Imagen2 from '../assets/img/mision2.jpg';
import Imagen3 from '../assets/img/mision3.jpg';

const imagenes = [Imagen1, Imagen2, Imagen3];

function Mision() {
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
        <section id="mision">
            <h2 data-aos="fade-right">Mision</h2>

            <div className="quienes"  data-aos="fade-right">

                
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

                <div className='box boxuno'>
                    <p>
                        Nuestra misión es ser el aliado estratégico que guía a emprendedores y empresas en su
                        camino hacia el éxito, ofreciendo asesoramiento experto y estrategias a medida.
                        Creemos en el poder del talento, la creatividad y la colaboración para transformar
                        negocios y crear oportunidades sostenibles.
                    </p>
                </div>


            </div>            

        </section>
    )
}


export default Mision;