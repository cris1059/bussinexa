import Pre from "../Presentation";
import Ft from "../Footer";
import Wp from "../../components/Wp_icon";
import Sc from "../../components/ScrollToTop";
import Uno from "../../assets/img/servicios/SE/SE.jpg";
import Dos from "../../assets/img/servicios/SE/AT.jpg";
import Tres from "../../assets/img/servicios/SE/SE2.jpg";
import Cuatro from "../../assets/img/servicios/SE/SE3.jpg";
import Cinco from "../../assets/img/servicios/SE/SE4.jpg";
import Seis from "../../assets/img/servicios/SE/SE2.jpg";
import Siete from "../../assets/img/servicios/SE/SE3.jpg";
import Ocho from "../../assets/img/servicios/SE/SE4.jpg";


import '../../assets/css/servicios/SE.css';
import { useNavigate } from 'react-router-dom';

function SIE() {

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
      <h2>Consultoría financiera, administrativa y legal</h2>
      <p>Ofrecemos soluciones integrales para mejorar la eficiencia de tu empresa, con asesoría especializada en gestión financiera, procesos administrativos y cumplimiento legal.</p>
    </div>
  </div>

  <div data-aos="zoom-in" className="apartado">
    <div className="leyenda">
      <h2>Trámites COFEPRIS, SEMARNAT y código de barras (GS1)</h2>
      <p>Gestionamos ante autoridades como COFEPRIS y SEMARNAT, así como el registro y obtención de códigos de barras, asegurando el cumplimiento normativo de tus productos.</p>
    </div>
    <img className="fade-static rigth" src={Dos} alt="Imagen desvanecida" />
  </div>

  <div data-aos="zoom-in" className="apartado">
    <img className="fade-static left" src={Tres} alt="Imagen desvanecida" />
    <div className="leyenda">
      <h2>Diseño de cartera de clientes</h2>
      <p>Identificamos mercados clave y estructuramos tu cartera de clientes potenciales para expandir tu presencia a nivel nacional e internacional.</p>
    </div>
  </div>

  <div data-aos="zoom-in" className="apartado">
    <div className="leyenda">
      <h2>Plan de negocios</h2>
      <p>Elaboramos planes estratégicos y financieros claros para guiar el crecimiento, inversión y operación efectiva de tu empresa desde el inicio.</p>
    </div>
    <img className="fade-static rigth" src={Cuatro} alt="Imagen desvanecida" />
  </div>

  <div data-aos="zoom-in" className="apartado">
    <img className="fade-static left" src={Cinco} alt="Imagen desvanecida" />
    <div className="leyenda">
      <h2>Estudios de mercado</h2>
      <p>Realizamos análisis detallados para conocer a tus clientes, competidores y oportunidades de crecimiento en el entorno comercial.</p>
    </div>
  </div>

  <div data-aos="zoom-in" className="apartado">
    <div className="leyenda">
      <h2>Importación y exportación de productos</h2>
      <p>Te acompañamos en el proceso de comercio internacional, cumpliendo con requisitos aduanales y logrando una logística eficiente.</p>
    </div>
    <img className="fade-static rigth" src={Seis} alt="Imagen desvanecida" />
  </div>

  <div data-aos="zoom-in" className="apartado">
    <img className="fade-static left" src={Siete} alt="Imagen desvanecida" />
    <div className="leyenda">
      <h2>Expos y ferias comerciales</h2>
      <p>Brindamos apoyo logístico y asesoría en negociación para que tu empresa participe exitosamente en eventos y ferias del sector.</p>
    </div>
  </div>

  <div data-aos="zoom-in" className="apartado">
    <div className="leyenda">
      <h2>Capacitación y motivación de personal</h2>
      <p>Ofrecemos programas de formación y desarrollo enfocados en mejorar el rendimiento, liderazgo y compromiso de tu equipo de trabajo.</p>
    </div>
    <img className="fade-static rigth" src={Ocho} alt="Imagen desvanecida" />
  </div>

  <Wp />
</section>

            <Ft />
        </>
    )
}

export default SIE;