import '../assets/css/mision.css';
import Misionimg from '../assets/img/mision.jpg';
import Creer from '../assets/img/creer.jpg';

function Mision() {
    return (
        <section id="mision">
            <h2>Mision</h2>

            <div className="quienes">

                <div className='box boxuno'>
                    <h3 className='subtitle about_subtitle'>¿Cuál es?</h3>
                    <p>
                        Nuestra misión es ser el aliado estratégico que guía a emprendedores y empresas en su camino hacia el éxito. Ofrecemos asesoramiento experto y estrategias a medida que responden a las necesidades reales de cada proyecto.
                    </p>
                </div>

                <div className='box boxmision'>
                    <img className='misionimg' src={Misionimg} alt="somos" />
                </div>

            </div>

            <div className="quienes">

                <div className='none box boxmision'>
                    <img className='misionimg' src={Creer} alt="somos" />
                </div>

                <div className='box boxuno'>
                    <h3 className='subtitle about_subtitle'>¿Qué creemos y qué nos impulsa?</h3>
                    <p>
                        Creemos en el poder del talento, la creatividad y la colaboración como motores de transformación. En Bussinexa, nos enorgullece ser parte del viaje empresarial de nuestros clientes, ayudándolos a superar desafíos, alcanzar sus metas y llevar sus ideas al mercado de manera sostenible y con impacto.
                    </p>
                </div>



            </div>

            

        </section>
    )
}


export default Mision;