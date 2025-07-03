import React, { useState } from "react";
import Modal from "../components/Modal";
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/img/logobussinexaNueva.png";
import mermel from "../assets/img/emprendimientos/mermelada.jpg";
import inci from "../assets/img/emprendimientos/IF.jpg";
import Jart from "../assets/img/emprendimientos/JA.jpg";
import Mas from "../assets/img/catalogo/cursos.jpg";

const items = [
    {
        id: 1,
        title: "Elaboracion de mermeladas",
        subtitle: "Domina el secreto de las mejores mermeladas y genera ingresos",
        text: [
            "Manual de participante",
            "Constancia ECO217",
            "Incluye materiales para elaborar mermeladas",
        ],
        image: mermel,
        logo: Logo,
        classe:[
            "mermeBP",
        ]
    },    {
        id: 2,
        title: "Elaboración de inciensos",
        subtitle: "Con plantas aromáticas y medicinales",
        text: [
            "Mmanual de participante",
            "Constancia con validez curricular",
            "Incluye materiales para elaborar varitas, conos y espirales",
        ],
        image: inci,
        logo: Logo,
        classe:[
            "mermeBP",
        ]
    },   {
        id: 3,
        title: "Jabones artesanales",
        subtitle: "Belleza artesanal con jabón",
        text: [
            "Incluye 4 horas prácticas de capacitación, y 6 jabones de su elección a realizar por persona",
            "Constancia con validez curricular",
            "Manual digital del curso",
        ],
        image: Jart,
        logo: Logo,
        classe:[
            "mermeBP",
        ]
    },
];

import "../assets/css/empre.css";

function Emprendimientos() {
    
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState({});

    const openModalWith = (item) => {
        setModalData(item);
        setModalOpen(true);
    };

      const Navegar = () => {
    navigate('/cursos');
  }

    return (
        <section id="empre">
            <h2 data-aos="zoom-in">¿Quieres emprender con práctica?</h2>
            <div className="card-container" data-aos="zoom-in">
                {items.map((item) => (
                <div key={item.id} className="card" onClick={() => openModalWith(item)}>
                    <img src={item.image} alt={item.title} style={{ width: "100%" }} />
                    <h3>{item.title}</h3>
                </div>
                ))}

            <div className="card" onClick={() => {Navegar()}}>
                <img src={Mas} alt="Mas cursos" style={{ width: "100%" }} />
                <h3 >Más cursos</h3>

            </div>

        </div>

        <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            title={modalData.title}
            text={modalData.text}
            subtitle={modalData.subtitle}
            image={modalData.image}
            classe={modalData.classe}
            logo={modalData.logo}
        />
        </section>
    )
}


export default Emprendimientos;