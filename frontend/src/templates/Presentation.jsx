import '../assets/css/presentation.css';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link  } from 'react-scroll';

import Logo from '../assets/img/logo.png';
import Faceicon from '../assets/img/icons/facebook.png';
import Instaicon from '../assets/img/icons/instagram.png';
import Whatsicon from '../assets/img/icons/whatsapp.png';
import Emailicon from '../assets/img/icons/correo.png';



function Presentation() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div id='home' className='target'>
      <div className='logo'>
        {/*<img src={Logo} alt="" width='100px'/>*/}
        <h5>BUSSINEXA</h5>
      </div>
      <div className='redes_sociales'>
        <a href="https://www.facebook.com/profile.php?id=61573655517931&locale=es_LA" target='_blank'>
          <img src={Faceicon} alt="" className='iconR' />
        </a>
        <a href="https://www.instagram.com/bussi_nexa/" target='_blank'>
          <img src={Instaicon} alt="" className="iconR" />
        </a>
        <a href="https://wa.me/5513697365">
          <img src={Whatsicon} alt="" className="iconR" />
        </a>
        <a onClick={() => {
          navigator.clipboard.writeText('contacto@javiernavaconsultor.com');
          alert('Correo copiado al portapapeles');
        }}>
          <img src={Emailicon} alt="Copiar correo" className="iconR cursor-pointer" />
        </a>
      </div>
      {/* Icono hamburguesa */}
        <button onClick={toggleMenu} className="menu none" aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Links en móvil */}
      {isOpen && (
        <div className="navbar-movil">
          <button className='equis' onClick={toggleMenu}><X size={28} /> </button>
            <div className="options">
                <Link to="inicio" smooth={true} duration={600} className="cursor-pointer hover:text-gray-200">Inicio</Link>
                <Link to="quienes-somos" smooth={true} duration={600} className="cursor-pointer hover:text-gray-200">Acerca</Link>
                <Link to="mision" smooth={true} duration={600} className="cursor-pointer hover:text-gray-200">Mision</Link>
                <Link to="servicios" smooth={true} duration={600} className="cursor-pointer hover:text-gray-200">Catalogo</Link>
                {/*<Link to="areas-asesoria" smooth={true} duration={600} className="cursor-pointer hover:text-gray-200">Asesoria</Link>*/}
                <Link to="beneficios" smooth={true} duration={600} className="cursor-pointer hover:text-gray-200">Beneficios</Link>
                <Link to="contacto" smooth={true} duration={600} className="cursor-pointer hover:text-gray-200">Contacto</Link>
            </div>
        </div>
      )}
    </div>
  )
}

export default Presentation;