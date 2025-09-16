import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/components/modal-promo-aduanero.css';

function ModalPromoAduanero() {
  const [isVisible, setIsVisible] = useState(true);
  const [showCloseButton, setShowCloseButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCloseButton(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
  };

  const handleNavigate = () => {
    navigate('/servicios_aduaneros');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="modal-overlay-promo">
      <div className="modal-promo-content">
        {showCloseButton && (
          <button className="modal-close-btn" onClick={handleClose}>
            ×
          </button>
        )}
        
        <div className="modal-header">
          <h2>🚢 ¡NUEVO CURSO DISPONIBLE!</h2>
          <div className="badge-nuevo">NUEVO</div>
        </div>
        
        <div className="modal-body">
          <h3>Servicios Aduaneros y Logísticos</h3>
          <p>Descubre nuestros servicios especializados en comercio exterior:</p>
          
          <ul className="curso-beneficios">
            <li>✅ Asesoría en proyectos de exportación</li>
            <li>✅ Procesos de despacho aduanal</li>
            <li>✅ Capacitación logística especializada</li>
          </ul>
          
          <div className="info-ubicacion">
            <p>📍 Disponible en la pestaña de <strong>Servicios</strong></p>
          </div>
        </div>
        
        <div className="modal-footer">
          <button className="btn-inscribirse" onClick={handleNavigate}>
            Ver Servicios Aduaneros
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalPromoAduanero;