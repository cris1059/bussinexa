import Pre from "../Presentation";
import Ft from "../Footer";
import Wp from "../../components/Wp_icon";
import Sc from "../../components/ScrollToTop";

import "../../assets/css/servicios/SE.css";
import Uno from "../../assets/img/servicios/SE/SE.jpg";
import Dos from "../../assets/img/servicios/SE/AT.jpg";
import Tres from "../../assets/img/servicios/SE/SE2.jpg";
import Cuatro from "../../assets/img/servicios/SE/SE3.jpg";
import Cinco from "../../assets/img/servicios/SE/SE4.jpg";
import { useNavigate } from 'react-router-dom';
import "../../assets/css/components/btn_back.css";

function Servicios_empresariales() {
    
        const navigate = useNavigate();

    const Navegar = () => {
        navigate(-1);
        console.log("Volviendo a la página anterior");

    }

    return (
        <>
        <Sc />
        < Pre/>
        <section id="Servicio">
            <button className="btn_volver" onClick={Navegar}>Volver</button>

            <div data-aos="zoom-in" className="apartado">
                <img className="fade-static left" src={Uno} alt="Imagen desvanecida" />
                <div className="leyenda">
                    <h2>Consultoría en aspectos financieros, administrativos y legales</h2>
                    <p>Brindamos asesoría integral que combina planificación financiera, optimización de procesos administrativos y soporte legal para garantizar una gestión empresarial sólida y conforme a la normativa.</p>
                </div>
            </div>

            <div data-aos="zoom-in" className="apartado">
                <div className="leyenda">
                    <h2>Asesoría para trámites de apertura de negocios</h2>
                    <p> Acompañamos paso a paso la creación legal de tu empresa: constitución, obtención de licencias, registro fiscal y trámites municipales, asegurando un inicio rápido y sin contratiempos.</p>
                </div>
                <img className="fade-static rigth" src={Dos} alt="Imagen desvanecida" />
            </div>

            <div data-aos="zoom-in" className="apartado">
                <img className="fade-static left" src={Tres} alt="Imagen desvanecida" />
                <div className="leyenda">
                    <h2>Trámites COFEPRIS, SEMARNAT, código de barras (GS1)</h2>
                    <p>Gestionamos ante autoridades como COFEPRIS y SEMARNAT, además de realizar el registro y obtención de códigos de barras (GS1), asegurando cumplimiento regulatorio para productos o servicios.</p>
                </div>
            </div>

            <div data-aos="zoom-in" className="apartado">
                <div className="leyenda">
                    <h2>Protección patronal y revisión de reglamento interior de trabajo</h2>
                    <p>Elaboramos o revisamos tu Reglamento Interior de Trabajo, asegurando que cumpla con la Ley Federal del Trabajo y proteja los derechos tanto de la empresa como del trabajador, minimizando riesgos laborales.
Fundamental para empresas que buscan relaciones laborales seguras y bien reguladas.</p>
                </div>
                <img className="fade-static rigth" src={Cuatro} alt="Imagen desvanecida" />
            </div>

            <div data-aos="zoom-in" className="apartado">
                <img className="fade-static left" src={Cinco} alt="Imagen desvanecida" />
                <div className="leyenda">
                    <h2>Diseño de cartera de clientes nacionales e internacionales</h2>
                    <p>Definimos y estructuramos tu cartera de clientes, identificando mercados objetivo, diseñando estrategias de captación y fidelización tanto a nivel nacional como internacional.</p>
                </div>
            </div>
        <Wp />
        </section>
        <Ft />
        </>
    )
}

export default Servicios_empresariales;