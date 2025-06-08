import { BrowserRouter as Router} from 'react-router-dom';
import { Link  } from 'react-scroll';
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

function Navbar() {

  return (
    <nav className="navbar text-white shadow-md">
      <div className="padding0 max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Links en escritorio */}
        <div className="escritorio hidden md:flex space-x-6">

          <Link to="home" smooth={true} duration={600} className="cursor-pointer hover:text-gray-200">Inicio</Link>
          <Link to="quienes-somos" smooth={true} duration={600} className="cursor-pointer hover:text-gray-200">Acerca</Link>
          <Link to="mision" smooth={true} duration={600} className="cursor-pointer hover:text-gray-200">Mision</Link>
          <Link to="servicios" smooth={true} duration={600} className="cursor-pointer hover:text-gray-200">Servicios</Link>
          <Link to="areas-asesoria" smooth={true} duration={600} className="cursor-pointer hover:text-gray-200">Asesoria</Link>
          <Link to="beneficios" smooth={true} duration={600} className="cursor-pointer hover:text-gray-200">Beneficios</Link>
          <Link to="contacto" smooth={true} duration={600} className="cursor-pointer hover:text-gray-200">Contacto</Link>
          
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Presentation/>
      <Navbar />
      <div className='content_home'>
        <Home/>
        <Acerca/>
        <Mision/>
        <Servicios/>
        <Asesorias/>
        <Beneficios/>
        <Contacto/>
        <Footer/>
      </div>
      
    </Router>
  );
}

export default App;
