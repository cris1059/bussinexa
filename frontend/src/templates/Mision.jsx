import '../assets/css/mision.css';
import Misionimg from '../assets/img/mision.jpg';
import Creer from '../assets/img/creer.jpg';

function Mision() {
    return (
        <section id="mision">
            <h2 data-aos="fade-right">Mision</h2>

            <div className="quienes"  data-aos="fade-right">

                
                <div className='box boxmision'>
                    <img className='misionimg' src={Misionimg} alt="somos" />
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