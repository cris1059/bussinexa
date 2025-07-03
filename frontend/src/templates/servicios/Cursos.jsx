import Pre from "../Presentation";
import Ft from "../Footer";
import Wp from "../../components/Wp_icon";
import Sc from "../../components/ScrollToTop";
//IMAGENES DE LOS CURSOS
import CEC from "../../assets/img/mision.jpg"
import HCT from "../../assets/img/somo.jpg";
import TCME from "../../assets/img/catalogo/servicios.jpg";
import ECP from "../../assets/img/catalogo/productos.jpg";
import PD from "../../assets/img/creer.jpg";
import EM from "../../assets/img/emprendimientos/mermelada.jpg";
import IN from "../../assets/img/emprendimientos/IF.jpg";
import JA from "../../assets/img/emprendimientos/JA.jpg";
import EA from "../../assets/img/madera.jpg";


import React, { useState } from "react";

import '../../assets/css/cursos.css';
import '../../assets/css/modal_dos.css';
import { useNavigate } from 'react-router-dom';
import Modal from "../../components/ModalC";

const cursos = [

    {
        id: 1,
        titulo: "Constitución legal de empresas",
        subtitulo: "Dale estructura legal a tu negocio",
        tiempo: "2hrs",
        texto: "Contenido",
        img: CEC,
        lista: [
            "Tipo de sociedades",
            "Beneficios para los emprendedores",
            "Requisitos para su constitución legal",
            "Sobre los impuestos",
            "Acceso a financiamientos"
        ]
    },
    {
        id: 2,
        titulo: "Herramientas clave para conseguir trabajo",
        subtitulo: "Impulsa tu perfil profesional",
        tiempo: "3hrs",
        texto: "Contenido",
        img: HCT,
        lista: [
            "Reglas de vestimenta",
            "Protocolo de presentación",
            "Prepara tu PITCH",
            "Redes sociales",
            "Tips para diseñar tu imagen personal",
            "Ejercicios practicos: Entrenamiento para entrevista de trabajo",
            "Diseño y entrega de CV.",
            "Publicación de CV en plataformas clave"
        ]
    },
    {
        id: 3,
        titulo: "Trámites COFEPRIS para Micro y Pequeñas Empresas",
        subtitulo: "Modalidad: Transmisión vía Zoom (Incluye grabación para consulta)",
        tiempo: "3hrs",
        texto: "Aprende la normatividad sanitaria que regula:",
        img: TCME,
        lista: [
            "Alimentos y bebidas",
            "Cosméticos",
            "Servicios clínicos y de belleza",
            "Productos herbolarios"
        ]
    },
    {
        id: 4,
        titulo: "Estrategias de comercialización de productos",
        subtitulo: "Diseñar técnicas de promoción de ventas adecuadas para el mercado",
        tiempo: "28hrs (4 días)",
        texto: "Contenido",
        img: ECP,
        lista: [
            "Estrategias de comercialización.",
            "Promoción del producto eficientemente.",
            "Segmentación de mercado.",
            "Mercadotecnia en  los medios digitales",
            "Desarrollo de nuevos productos",
            "Tendencia del diseño en los productos",
            "Imagen corporativa",
        ]
    },
    {
        id: 5,
        titulo: "Plataformas digitales",
        subtitulo: "Impulsa tus ventas con tecnología",
        tiempo: "26hrs (4 días)",
        texto: "Contenido",
        img: PD,
        lista: [
            "Imagen y diseño de la tienda.",
            "Tipo de e-commerce.",
            "Canales de distribución.",
            "Catálogo de productos.", 
            "Política de precios."
        ]
    },
    {
        id: 6,
        titulo: "Elaboracion de mermeladas",
        subtitulo: "Domina el secreto de las mejores mermeladas y genera ingresos",
        tiempo: "5hrs",
        texto: "Que incluye?",
        img: EM,
        lista: [
            "Manual de participante",
            "Constancia con validez curricular",
            "Incluye materiales para elaborar mermeladas"
        ]
    },{
        id: 7,
        titulo: "Elaboracion de inciensos",
        subtitulo: "Con plantas aromáticas y medicinales",
        tiempo: "4hrs",
        texto: "Que incluye?",
        img: IN,
        lista: [
            "Manual de participante",
            "Constancia con validez curricular",
            "Incluye materiales para elaborar varitas, conos y espirales"
        ]
    },{
        id: 8,
        titulo: "Jabones artesanales",
        subtitulo: "Belleza artesanal con jabón",
        tiempo: "4hrs",
        texto: "Que incluye?",
        img: JA,
        lista: [
            "Manual digital del curso",
            "Constancia con validez curricular",
            "Incluye capacitación y 6 jabones de su eleccion a realizar por persona"
        ]
    },{
        id: 9,
        titulo: "Elaboracion de artesanías nivel 1",
        subtitulo: "Con madera nivel 1",
        tiempo: "36hrs (5 días)",
        texto: "Contenido",
        img: EA,
        lista: [
            "Bosque templado y productos forestales maderables y no maderables.",
            "Habilidades, talentos y potenciales de las mujeres artesanas.",
            "Técnicas de conservación de materiales del bosque y uso de herramientas y maquinaria básica.",
            "Diseño y elaboración de artesanías: Bisutería forestal artesanal con semillas del bosque.",
        ]
    },{
        id: 10,
        titulo: "Elaboracion de artesanías nivel 2",
        subtitulo: "Con madera nivel 2",
        tiempo: "36hrs (5 días)",
        texto: "Contenido",
        img: EA,
        lista: [
            "Técnica de tallado en relieve sobre madera (Parte 1)",
            "Técnica de tallado en relieve sobre madera (Parte 2)",
            "Diseño y corte de figuras de madera con sierra de banco",
            "Diseño y elaboración de artesanías con madera y resina epóxica",
        ]
    },
]

function Cursos() {
    const [modalOpen, setModalOpen] = useState(false);
        const [modalData, setModalData] = useState({});
    
        const openModalWith = (cursos) => {
            setModalData(cursos);
            setModalOpen(true);
        };

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
                
                <h2 style={{textAlign: "center", margin: "30px"}}>Cursos disponibles</h2>
                <div>
                    <div className="card-containe">
                {cursos.map((cursos) => (
                <div data-aos="zoom-in" key={cursos.id} className="car" onClick={() => openModalWith(cursos)}>
                    <img src={cursos.img} alt={cursos.titulo} style={{ width: "100%" }} />
                    <h3>{cursos.titulo}</h3>
                </div>
                ))}

        </div>

        <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            titulo={modalData.titulo}
            subtitulo={modalData.subtitulo}
            tiempo={modalData.tiempo}
            texto={modalData.texto}
            img={modalData.img}
            lista={modalData.lista}
        />
                </div>
                <Wp />
            </section>
            <Ft />
        </>
    )
}

export default Cursos;