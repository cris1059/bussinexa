import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import '../assets/css/servicios.css';
import Serv from "../assets/img/catalogo/servicios.jpg";
import Prod from "../assets/img/catalogo/productos.jpg";
import Ases from "../assets/img/catalogo/asesoria.jpg";
import Curs from "../assets/img/catalogo/cursos.jpg";

{/*IMAGENES SERVICIOS */}

function Servicios() {
  const navigate = useNavigate();

  const items = [
    {
      title: "Servicios Empresariales",
      img: Serv,
        desc: [
  "• Consultoría en aspectos financieros, administrativos y legales.",
  "• Asesoría para trámites de apertura de negocios",
  "• Trámites COFEPRIS, SEMARNAT, Código de barras (G51)",
  "• Protección patronal y revisión de Reglamento Interior de Trabajo",
  "• Diseño de cartera de clientes nacionales e internacionales"
],
link: "/servicios_empresariales",
    },
    {
      title: "Soluciones Integrales para Empresas",
      img: Prod,
      desc: [
  "• Consultoría en aspectos financieros, administrativos y legales.",
  "• Asesoría para trámites de apertura de negocios",
  "• Trámites COFEPRIS, SEMARNAT, Código de barras (G51)",
  "• Protección patronal y revisión de Reglamento Interior de Trabajo",
  "• Diseño de cartera de clientes nacionales e internacionales",
  "• Plan de negocios",
  "• Estudios de mercado",
  "• Apoyo en la importación y exportación de productos",
  "• Revisión y elaboración de contratos mercantiles",
  "• Apoyo logístico y de negociación para asistir a expos y ferias comerciales",
  "• Capacitación y motivación de personal"
]
,
link: "/soluciones_integrales_para_empresas",
    },
    {
      title: "Asesoría Especializada",
      img: Ases,
      desc: [
  "• Asesoría empresarial para emprendedores",
  "• Registro de marca",
  "• Asesoramiento para la constitución legal de sociedades",
  "• Administración de empresas",
  "• Planeación estratégica y rentabilidad",
  "• Estudio de análisis de costos de producción",
  "• Vinculación con mercados internacionales, apoyo en la planeación de la sucesión de socios"
]
,
link: "/asesoria_especializada"
    },
    {
      title: "Cursos",
      img: Curs,
      desc: [
  "• Negociación, servicio al cliente, liderazgo, empoderamiento de la mujer",
  "• Servicio al cliente",
  "• Liderazgo",
  "• Empoderamiento de la mujer",
  "• Elaboración de videos institucionales",
  "• Elaboración CV personal y empresarial"
]
,
link: "/cursos"
    },
  ];


  const Navegar = (ruta) => {
    navigate(ruta);
  }

  return (
    <section id="servicios">
      <h2 data-aos="zoom-in">Impulsa tu Negocio con Nuestros Servicios Especializados</h2>
      <div data-aos="zoom-in" className='content_catalogo'>

      <div className='iconosS'>
          <div className="grupo">
            {items.slice(0, 2).map((item, index) => (
              <div
                className='img cursor-pointer'
                key={index}
                onClick={() => { Navegar(item.link); }}
              >
                <div className='circulo'>
                  <h5 className='servititleM'>{item.title}</h5>
                  <img src={item.img} alt={item.title} />
                </div>
                
              </div>
            ))}
          </div>

      <div className="grupo">
        {items.slice(2, 4).map((item, index) => (
          <div
            className='img cursor-pointer'
            key={index + 2}
            onClick={() => { Navegar(item.link); }}
          >
            <div className='circulo'>
                  <h5 className='servititleM'>{item.title}</h5>
                  <img src={item.img} alt={item.title} />
                </div>
          </div>
        ))}
      </div>
      </div>

</div>
    </section>
  );
}

export default Servicios;
