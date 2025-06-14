import '../assets/css/acerca.css';
import Somos from '../assets/img/somos.jpg';
import Exp from '../assets/img/exp.jpg';
import { useEffect } from 'react';
import { Link  } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Acerca() {
    
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
                        Somos un equipo apasionado y comprometido con el éxito de emprendedores y empresas. Nos especializamos en brindar soluciones integrales que impulsan el crecimiento y la innovación. Con más de 20 años de experiencia y resultados comprobados en todo el país, trabajamos mano a mano con nuestros clientes para entender a fondo sus necesidades y convertir sus ideas en realidades prósperas que contribuyen al desarrollo de nuestro país.
                    </p>
                </div>

                <div className='box'>
                    <img src={Somos} alt="somos" />
                </div>

            </div>
        
        </section>
    )
}

export default Acerca;