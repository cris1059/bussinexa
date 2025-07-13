import Pre from "../Presentation";
import Ft from "../Footer";
import Wp from "../../components/Wp_icon";
import Sc from "../../components/ScrollToTop";
import { useNavigate } from 'react-router-dom';

import "../../assets/css/servicios/SE.css";
import Uno from "../../assets/img/servicios/SE/SE.jpg";
import Dos from "../../assets/img/servicios/SE/AT.jpg";
import Tres from "../../assets/img/servicios/SE/SE2.jpg";
import Cuatro from "../../assets/img/servicios/SE/SE3.jpg";
import Cinco from "../../assets/img/servicios/SE/SE4.jpg";

function Servicios_empresariales() {
    const navigate = useNavigate();
    const Navegar = () => {
        navigate(-1);
        console.log("Volviendo a la página anterior");
    }

    return (
        <>
            <Sc />
            <Pre />
            <section id="Servicio">
                <button className="btn_volver" onClick={Navegar}>Volver</button>

                <div data-aos="zoom-in" className="apartado">
                    <img className="fade-static left" src={Uno} alt="Consultoría" />
                    <div className="leyenda">
                        <h2>Consultoría financiera, <br/> administrativa y legal</h2>
                        <p>Asesoría integral para una gestión empresarial eficiente, combinando estrategias financieras, control administrativo y cumplimiento legal.</p>
                    </div>
                </div>

                <div data-aos="zoom-in" className="apartado">
                    <div className="leyenda">
                        <h2>Asesoría para trámites de <br/> apertura de negocios</h2>
                        <p>Desde la constitución legal hasta licencias y registros fiscales. Facilitamos todo el proceso para arrancar operaciones sin complicaciones.</p>
                    </div>
                    <img className="fade-static rigth" src={Dos} alt="Trámites" />
                </div>

                <div data-aos="zoom-in" className="apartado">
                    <img className="fade-static left" src={Tres} alt="Protección laboral" />
                    <div className="leyenda">
                        <h2>Protección patronal y <br/> reglamento interior</h2>
                        <p>Revisamos y elaboramos reglamentos laborales conforme a la Ley Federal del Trabajo, previniendo conflictos y protegiendo a tu empresa.</p>
                    </div>
                </div>

                <div data-aos="zoom-in" className="apartado">
                    <div className="leyenda">
                        <h2>Soporte legal para <br/> relaciones laborales</h2>
                        <p>Atención a conflictos, despidos, contratos laborales y cumplimiento de obligaciones patronales. Evita sanciones y resuelve contingencias.</p>
                    </div>
                    <img className="fade-static rigth" src={Cuatro} alt="Soporte legal" />
                </div>

                <div data-aos="zoom-in" className="apartado">
                    <img className="fade-static left" src={Cinco} alt="Cartera de clientes" />
                    <div className="leyenda">
                        <h2>Diseño de cartera de <br/> clientes estratégicos</h2>
                        <p>Definimos perfiles de cliente ideal y estrategias para atraerlos y fidelizarlos, con enfoque nacional y regional.</p>
                    </div>
                </div>

                <Wp />
            </section>
            <Ft />
        </>
    )
}

export default Servicios_empresariales;
