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
import Mision from './templates/Mision';
import Servicios from './templates/Servicios';
import Asesorias from './templates/Asesorias';
import Beneficios from './templates/Beneficios';
import Contacto from './templates/Contacto';
import Footer from './templates/Footer';
import Exp from "./templates/Experiencia";
import SE from "./templates/servicios/Servicios_empresariales";
import WpIc from "./templates/Wp_icon";



function Navbar() {

  return (
    <nav className="navbar text-white shadow-md">
      <div className="padding0 max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Links en escritorio */}
        <div className="escritorio hidden md:flex space-x-6">

          <Link to="home" smooth={true} duration={600} className="cursor-pointer hover:text-gray-200">Inicio</Link>
          <Link to="servicios" smooth={true} duration={600} className="cursor-pointer hover:text-gray-200">Servicios</Link>
          <Link to="beneficios" smooth={true} duration={600} className="cursor-pointer hover:text-gray-200">Beneficios</Link>
          <Link to="quienes-somos" smooth={true} duration={600} className="cursor-pointer hover:text-gray-200">Acerca</Link>
          <Link to="mision" smooth={true} duration={600} className="cursor-pointer hover:text-gray-200">Mision</Link>
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
              <Presentation />
              <Navbar />
              <div className="content_home">
                <Home />
                <Exp />
                <Servicios />
                <Beneficios />
                <Acerca />
                <Mision />
                <Contacto />
                <Footer />
              </div>
            </>
          }
        />
        <Route path="/servicios_empresariales" element={<SE />} />
      </Routes>
    </Router>
  );
}

export default App;
