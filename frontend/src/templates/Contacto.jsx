import { useEffect } from "react";

import '../assets/css/contacto.css';
import Faceicon from '../assets/img/icons/facebook.png';
import Instaicon from '../assets/img/icons/instagram.png';
import Whatsicon from '../assets/img/icons/whatsapp.png';
import Emailicon from '../assets/img/icons/correo.png';

function Contacto() {
  useEffect(() => {
    const renderCaptcha = () => {
      if (
        window.grecaptcha &&
        document.getElementById("recaptcha-container") &&
        !document.getElementById("recaptcha-container").hasAttribute("data-widget-id")
      ) {
        const widgetId = window.grecaptcha.render("recaptcha-container", {
          sitekey: "6LdCFVkrAAAAADnCLpx9GzEL7B0k0jrsG3afN8fk",
        });

        document
          .getElementById("recaptcha-container")
          .setAttribute("data-widget-id", widgetId);
      }
    };

    if (window.grecaptcha) {
      renderCaptcha();
    } else {
      const interval = setInterval(() => {
        if (window.grecaptcha) {
          clearInterval(interval);
          renderCaptcha();
        }
      }, 300);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto (redirección)

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/942bb3077498acba14f2b90a10b5785f", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Aquí puedes mostrar un mensaje antes de recargar si quieres
        alert("Formulario enviado correctamente");

        // Recarga la página
        window.location.reload();
      } else {
        alert("Hubo un problema al enviar el formulario, intenta de nuevo.");
      }
    } catch (error) {
      alert("Error al enviar el formulario, intenta de nuevo.");
      console.error(error);
    }
  };

  return (
    <section id="contacto">
      <h2 data-aos="fade-right">Agende una video consulta sin costo</h2>
      <div data-aos="fade-right" className="contacto">
        <div className="redes-sociales">
          <h3>Redes Sociales</h3>
          <div className="redesicons">
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=61573655517931&locale=es_LA" className="redicon">
              <img src={Faceicon} alt="Facebook" />
              <h5>Facebook</h5>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/bussi_nexa/" className="redicon">
              <img src={Instaicon} alt="Instagram" />
              <h5>Instagram</h5>
            </a>
            <a target="_blank" rel="noreferrer" href="https://wa.me/5513697365" className="redicon">
              <img src={Whatsicon} alt="WhatsApp" />
              <h5>WhatsApp</h5>
            </a>
            <a
              className="redicon"
              onClick={() => {
                navigator.clipboard.writeText('contacto@javiernavaconsultor.com');
                alert('Correo copiado al portapapeles');
              }}
            >
              <img src={Emailicon} alt="Email" />
              <h5>Email</h5>
            </a>
          </div>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <input name="Nombre" type="text" placeholder="Nombre*" required />
            <input name="E-mail" type="email" placeholder="E-Mail*" required />
            <input name="Telefono" type="text" placeholder="Teléfono*" required />
            <textarea name="Comentario" placeholder="Comentarios*" required />
            <input className="none" type="text" name="_honey" />
            <input type="hidden" name="_captcha" value="false" />

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
