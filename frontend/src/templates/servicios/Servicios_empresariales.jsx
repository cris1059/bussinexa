import Pre from "../Presentation";
import "../../assets/css/servicios/SE.css";
import Uno from "../../assets/img/servicios/SE.jpg";

function Servicios_empresariales() {
    

    return (
        <>
        < Pre/>
        <section id="Servicio">
            <button>Volver</button>

            <div className="apartado">
                <img className="fade-static left" src={Uno} alt="Imagen desvanecida" />
                <div className="leyenda">
                    <h2>Consultoría en aspectos financieros, administrativos y legales</h2>
                    <p>Brindamos asesoría integral para optimizar la gestión financiera, organizacional y jurídica de tu empresa. Te ayudamos a tomar decisiones estratégicas mediante el análisis de costos, estructuras administrativas eficientes, cumplimiento normativo y prevención de riesgos legales.</p>
                </div>
            </div>

            <div className="apartado">
                <div className="leyenda">
                    <h2>Consultoría en aspectos financieros, administrativos y legales</h2>
                    <p>Brindamos asesoría integral para optimizar la gestión financiera, organizacional y jurídica de tu empresa. Te ayudamos a tomar decisiones estratégicas mediante el análisis de costos, estructuras administrativas eficientes, cumplimiento normativo y prevención de riesgos legales.</p>
                </div>
                <img className="fade-static rigth" src={Uno} alt="Imagen desvanecida" />
            </div>

            <div className="apartado">
                <img className="fade-static left" src={Uno} alt="Imagen desvanecida" />
                <div className="leyenda">
                    <h2>Consultoría en aspectos financieros, administrativos y legales</h2>
                    <p>Brindamos asesoría integral para optimizar la gestión financiera, organizacional y jurídica de tu empresa. Te ayudamos a tomar decisiones estratégicas mediante el análisis de costos, estructuras administrativas eficientes, cumplimiento normativo y prevención de riesgos legales.</p>
                </div>
            </div>

            <div className="apartado">
                <div className="leyenda">
                    <h2>Consultoría en aspectos financieros, administrativos y legales</h2>
                    <p>Brindamos asesoría integral para optimizar la gestión financiera, organizacional y jurídica de tu empresa. Te ayudamos a tomar decisiones estratégicas mediante el análisis de costos, estructuras administrativas eficientes, cumplimiento normativo y prevención de riesgos legales.</p>
                </div>
                <img className="fade-static rigth" src={Uno} alt="Imagen desvanecida" />
            </div>

        </section>
        </>
    )
}

export default Servicios_empresariales;