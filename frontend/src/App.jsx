import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Link  } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './assets/css/navbar.css';
import './assets/css/style.css';
import Home from './templates/Home';
import Presentation from './templates/Presentation';
import Acerca from './templates/Acerca';
import Empre from './templates/Emprendimientos';
import Servicios from './templates/Servicios';
import Asesorias from './templates/servicios/Asesorias';
import Beneficios from './templates/Beneficios';
import Contacto from './templates/Contacto';
import Footer from './templates/Footer';
import Exp from "./templates/Experiencia";
import SE from "./templates/servicios/Servicios_empresariales";
import SIE from "./templates/servicios/SIE";
import Cursos from "./templates/servicios/Cursos";
import ServiciosAduaneros from "./templates/servicios/ServiciosAduaneros";
import ModalPromoAduanero from "./components/ModalPromoAduanero";

import Wp from "./components/Wp_icon";



function Navbar() {

  return (
    <nav className="navbar text-white shadow-md">
      <div className="padding0 max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Links en escritorio */}
        <div className="escritorio hidden md:flex space-x-6">

          <Link to="home" smooth={true} duration={600} className="cursor-pointer hover:text-gray-200">Inicio</Link>
          <Link to="servicios" smooth={true} duration={600} className="cursor-pointer hover:text-gray-200">Servicios</Link>
          <Link to="beneficios" smooth={true} duration={600} className="cursor-pointer hover:text-gray-200">Beneficios</Link>
          <Link to="empre" smooth={true} duration={600} className="cursor-pointer hover:text-gray-200">Emprendimientos</Link>
          <Link to="quienes-somos" smooth={true} duration={600} className="cursor-pointer hover:text-gray-200">Acerca</Link>
          {/*<Link to="areas-asesoria" smooth={true} duration={600} className="cursor-pointer hover:text-gray-200">Asesoria</Link>*/}
          <Link to="contacto" smooth={true} duration={600} className="cursor-pointer hover:text-gray-200">Contacto</Link>
          
        </div>
      </div>
    </nav>
  );
}

function App() {

    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ModalPromoAduanero />
              <Presentation />
              <Navbar />
              <div className="content_home">
                <Home />
                <Exp />
                <Servicios />
                <Beneficios />
                <Empre />
                <Acerca />
                <Contacto />
                
                <Wp />
                <Footer />
              </div>
            </>
          }
        />
        <Route path="/servicios_empresariales" element={<SE />} />
        <Route path="/soluciones_integrales_para_empresas" element={<SIE />} />
        <Route path="/asesoria_especializada" element={<Asesorias />} />
        <Route path="/servicios_aduaneros" element={<ServiciosAduaneros />} />
        <Route path="/cursos" element={<Cursos />} />
      </Routes>
    </Router>
  );
}

export default App;
