import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../assets/css/servicios.css';
import Serv from "../assets/img/catalogo/servicios.jpg";
import Prod from "../assets/img/catalogo/productos.jpg";
import Ases from "../assets/img/catalogo/asesoria.jpg";
import Curs from "../assets/img/catalogo/cursos.jpg";

{/*IMAGENES SERVICIOS */}

function Servicios() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
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
link: "/servicios",
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
    },
  ];

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const Navegar = (ruta) => {
    navigate(ruta);
  }

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

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
            onClick={() => { openModal(item); console.log(index + 2); }}
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


      {/* Modal pantalla completa */}
      <AnimatePresence>
        {modalOpen && selectedItem && (
          <motion.div
            className="fixed inset-0 bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <button
                className="close"
                onClick={closeModal}
              >
                X
              </button>
              <h3 className="text-xl text-black font-bold mb-2">{selectedItem.title}</h3>
              <ul className="text-left space-y-1 text-sm text-gray-700">
                {selectedItem.desc.map((line, i) => (
                    <li key={i}>{line}</li>
                ))}
                </ul>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Servicios;
