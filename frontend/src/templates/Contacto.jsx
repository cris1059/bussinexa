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

    return (
        <section id="contacto">
            <h2 data-aos="fade-right">Agende una video consulta sin costo</h2>
            <div data-aos="fade-right" className="contacto">
                <div className="redes-sociales">
                    <h3>Redes Sociales</h3>
                    <div className="redesicons">
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=61573655517931&locale=es_LA" className="redicon">
                            <img src={Faceicon} alt="" />
                            <h5>Facebook</h5>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/bussi_nexa/" className="redicon">
                            <img src={Instaicon} alt="" />
                            <h5>Instagram</h5>
                        </a>
                        <a target="_blank" href="https://wa.me/5513697365" className="redicon">
                            <img src={Whatsicon} alt="" />
                            <h5>WhatsApp</h5>
                        </a>
                        <a className="redicon" onClick={() => {
                            navigator.clipboard.writeText('contacto@javiernavaconsultor.com');
                            alert('Correo copiado al portapapeles');
                            }}>
                            <img src={Emailicon} alt="" />
                            <h5>Email</h5>
                        </a>
                    </div>
                </div>
                <div className="form">
                    <form
                        action="https://formsubmit.co/criscamacho1059@gmail.com"
                        method="POST"
                        >
                        <input name="Nombre" type="text" placeholder="Nombre*" required />
                        <input name="E-mail" type="email" placeholder="E-Mail*" required />
                        <input name="Telefono" type="text" placeholder="Teléfono*" required />
                        <textarea name="Comentario" placeholder="Comentarios*" required />
                        <input className="none" type="text" name="_honey"/>
                        <input type="hidden" name="_captcha" value="false" />

                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contacto;