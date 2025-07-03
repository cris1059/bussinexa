import '../assets/css/beneficios.css';
import Capc from "../assets/img/icons/beneficios/capacitacion.jpg";
import Soluc from "../assets/img/icons/beneficios/soluciones.jpg";
import Cont from "../assets/img/icons/beneficios/contactos.jpg";
import Res from "../assets/img/icons/beneficios/resultados.jpg";



function Beneficios() {
    

    return (
        <section id="beneficios"> 
            <h2 data-aos="zoom-in">Beneficios</h2>
            
                <div className="quienes" data-aos="fade-left">
    
                    <div className='benef'>
                        <div className='apartado'>
                            <div className='img'>
                                <img src={Capc} alt="" />
                            </div>
                            <h2>Capacitación</h2>
                            <h4>Desarrollamos habilidades gerenciales y operativas para emprendedores, directivos y personal clave.</h4>
                        </div>
                        <div className='apartado'>
                            <div className='img'>
                                <img src={Soluc} alt="" />
                            </div>
                            <h2>Soluciones Personalizadas</h2>
                            <h4>Cada empresa es única. Por eso, nuestras estrategias se adaptan a las características y necesidades de cada cliente.</h4>
                        </div>
                        <div className='apartado'>
                            <div className='img'>
                                <img src={Cont} alt="" />
                            </div>
                            <h2>Red de Contactos</h2>
                            <h4>Ofrecemos acceso a una red de expertos, instituciones y aliados en distintas industrias.</h4>
                        </div>
                        <div className='apartado'>
                            <div className='img'>
                                <img src={Res} alt="" />
                            </div>
                            <h2>Resultados Reales</h2>
                            <h4>Trabajamos con enfoque práctico, orientados a generar resultados tangibles y medibles en cada etapa del proyecto.</h4>
                        </div>
                    </div>
    
                </div>
                
        </section>
    )
}

export default Beneficios;