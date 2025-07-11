import Wp from "../assets/img/icons/wp_icon.png";
import "../assets/css/components/Wp_icon.css";

function wp_icon() {
    
    

    return (
        <div data-aos="zoom-in" className="icon_st">
            <a className="wp_stycky" href="https://wa.me/5513697365">
                <img src={Wp} alt="Icono WhatsApp" />
            </a>
        </div>
    )
}

export default wp_icon;