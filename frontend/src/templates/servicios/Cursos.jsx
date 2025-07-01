import Pre from "../Presentation";
import Ft from "../Footer";
import Wp from "../../components/Wp_icon";
import Sc from "../../components/ScrollToTop";

import '../../assets/css/asesorias.css';
import { useNavigate } from 'react-router-dom';

function Cursos() {

            const navigate = useNavigate();

    const Navegar = () => {
        navigate(-1);
        console.log("Volviendo a la página anterior");

    }

    return (
        <>  
            <Sc />
            < Pre/>
            <section id="areas-asesoria">
                <button className="btn_volver" onClick={Navegar}>Volver</button>
                
                <Wp />
            </section>
            <Ft />
        </>
    )
}

export default Cursos;