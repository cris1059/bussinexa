import '../assets/css/acerca.css';
import Somos from '../assets/img/somos.jpg';
import Exp from '../assets/img/exp.jpg';

function Acerca() {
    
    return (
        <section id="quienes-somos">
            <h2>Acerca De Nosotros</h2>
            <div className='quienes'>

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

            <div className='quienes'>

                <div className='box none'>
                    <img src={Exp} alt="somos" />
                </div>

                <div className='box uno'>
                    <h3 className='subtitle about_subtitle'>¿Cuál es nuestra experiencia?</h3>
                    <p>
                        Contamos con más de 20 años de experiencia y resultados comprobados en todo el país. Hemos acompañado a empresas y proyectos de diversos sectores, brindando apoyo desde la planificación estratégica hasta la ejecución de soluciones efectivas.
                    </p>
                </div>

            </div>
        
        </section>
    )
}

export default Acerca;