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
import Seis from "../../assets/img/servicios/SE/SE2.jpg";
import Siete from "../../assets/img/servicios/SE/SE3.jpg";
import Ocho from "../../assets/img/servicios/SE/SE4.jpg";

function SIE() {
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
                    <img className="fade-static left" src={Uno} alt="Plan de negocios" />
                    <div className="leyenda">
                        <h2>Plan de negocios</h2>
                        <p>Diseñamos modelos operativos y financieros para orientar la estrategia de tu empresa. Ideal para emprendedores y expansión de negocios establecidos.</p>
                    </div>
                </div>

                <div data-aos="zoom-in" className="apartado">
                    <div className="leyenda">
                        <h2>Estudios de mercado</h2>
                        <p>Investigaciones personalizadas para conocer hábitos de consumo, tendencias y competidores, que fortalezcan tu toma de decisiones.</p>
                    </div>
                    <img className="fade-static rigth" src={Dos} alt="Estudios de mercado" />
                </div>

                <div data-aos="zoom-in" className="apartado">
                    <img className="fade-static left" src={Tres} alt="Comercio exterior" />
                    <div className="leyenda">
                        <h2>Importación y exportación</h2>
                        <p>Te guiamos en procesos de comercio exterior, regulaciones aduaneras, etiquetado y logística internacional.</p>
                    </div>
                </div>

                <div data-aos="zoom-in" className="apartado">
                    <div className="leyenda">
                        <h2>Participación en ferias y expos</h2>
                        <p>Asesoramos para que tu marca esté presente en eventos sectoriales clave, desde la logística hasta estrategias de presentación y venta.</p>
                    </div>
                    <img className="fade-static rigth" src={Cuatro} alt="Ferias y expos" />
                </div>

                <div data-aos="zoom-in" className="apartado">
                    <img className="fade-static left" src={Cinco} alt="Capacitación" />
                    <div className="leyenda">
                        <h2>Capacitación y motivación <br/> del personal</h2>
                        <p>Programas diseñados para mejorar habilidades técnicas, fomentar liderazgo y aumentar la productividad de tu equipo.</p>
                    </div>
                </div>

                <div data-aos="zoom-in" className="apartado">
                    <div className="leyenda">
                        <h2>Evaluación de viabilidad <br/> y proyecciones</h2>
                        <p>Analizamos riesgos, inversiones necesarias y escenarios financieros para nuevos proyectos o productos antes de su implementación.</p>
                    </div>
                    <img className="fade-static rigth" src={Seis} alt="Viabilidad" />
                </div>

                <div data-aos="zoom-in" className="apartado">
                    <img className="fade-static left" src={Siete} alt="Digitalización" />
                    <div className="leyenda">
                        <h2>Digitalización empresarial</h2>
                        <p>Impulsamos la transformación digital de tu empresa: desde software administrativo hasta presencia en línea, automatización y análisis de datos.</p>
                    </div>
                </div>

                <div data-aos="zoom-in" className="apartado">
                    <div className="leyenda">
                        <h2>Alianzas estratégicas</h2>
                        <p>Identificamos y gestionamos vínculos con socios comerciales, industriales o institucionales para generar valor compartido.</p>
                    </div>
                    <img className="fade-static rigth" src={Ocho} alt="Alianzas" />
                </div>

                <Wp />
            </section>
            <Ft />
        </>
    )
}

export default SIE;
