
import Exp from "../assets/img/icons/verificar.png";
import Sol from "../assets/img/icons/llave-inglesa.png";
import Res from "../assets/img/icons/verificar.png";
import "../assets/css/experiencia.css";
import WpIc from "./Wp_icon";


function Experiencia() {
    
    return (
        <section id="experiencia">
            <div className="fond">
                <h2 data-aos="zoom-in">Más que consultoría, una alianza para crecer</h2>
                <div className="exp" data-aos="zoom-in">
                    
                    <div className="apartado">
                        <img src={Exp} alt="" />
                        {/* <h2>¿Quienes somos?</h2> */}
                        <h3>20 años impulsando
                            emprendedores y empresas mexicanas
                        </h3>
                    </div>
                    <div className="apartado">
                        <img src={Sol} alt="" />
                        <h3>Soluciones integrales a medida
                            para crecer, innovar y destacar
                        </h3>
                    </div>
                    <div className="apartado">
                        <img src={Res} alt="" />
                        <h3>Convertimos ideas en negocios
                            rentables y sostenibles
                        </h3>
                    </div>
                </div>
            </div> 
        </section>
    )
}

export default Experiencia;