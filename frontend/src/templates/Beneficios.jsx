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
                            <h2>Mayor probabilidad<br/> de éxito</h2>
                            <h4>La asesoría profesional brinda a los emprendedores una base sólida para construir negocios exitosos. Recibir orientación desde las etapas iniciales permite tomar decisiones más acertadas, evitar errores comunes y enfocar los recursos de manera estratégica. Este acompañamiento experto incrementa notablemente las posibilidades de consolidar un proyecto viable y competitivo en el mercado actual.</h4>
                        </div>
                        <div className='apartado'>
                            <div className='img'>
                                <img src={Soluc} alt="" />
                            </div>
                            <h2>Eficiencia operativa<br/> y optimización de procesos</h2>
                            <h4>Para empresas en funcionamiento, la consultoría representa una herramienta clave para mejorar su desempeño interno. Al contar con la visión objetiva de especialistas, es posible detectar fallas, reducir costos y perfeccionar procesos. La intervención profesional permite que las organizaciones funcionen de forma más ágil, rentable y alineada con sus objetivos estratégicos, generando mejoras visibles en corto plazo.</h4>
                        </div>
                        <div className='apartado'>
                            <div className='img'>
                                <img src={Cont} alt="" />
                            </div>
                            <h2>Impulso al crecimiento <br/> y rentabilidad empresarial</h2>
                            <h4>Las empresas que recurren a consultoría externa suelen ver un aumento del 26 % en ingresos anuales y una reducción del 20 % en costos operativos durante el primer año. También adoptan nuevas tecnologías un 65 % más rápido y mejoran su cuota de mercado en un 18 %. Además, incrementan en un 30 % la retención de clientes, toman decisiones más ágiles y logran una mayor alineación estratégica, lo que mejora su capacidad de adaptación en entornos competitivos.</h4>
                        </div>
                        <div className='apartado'>
                            <div className='img'>
                                <img src={Res} alt="" />
                            </div>
                            <h2>Ventaja competitiva <br/> e innovación constante</h2>
                            <h4>La asesoría fomenta una mentalidad de mejora continua que impulsa la innovación dentro de la empresa. Al trabajar con consultores, las organizaciones adoptan nuevas tecnologías más rápidamente, toman decisiones con mayor agilidad y alinean mejor sus estrategias con los objetivos a largo plazo. Esto les permite mantenerse competitivas, adaptarse con éxito a los cambios del entorno y asegurar un crecimiento sostenido.</h4>
                        </div>
                    </div>
    
                </div>
                
        </section>
    )
}

export default Beneficios;