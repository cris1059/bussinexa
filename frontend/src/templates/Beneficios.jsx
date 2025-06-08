import '../assets/css/beneficios.css';


function Beneficios() {
    

    return (
        <section id="beneficios"> 
            <h2>Beneficios</h2>
            
                <div className="quienes">
    
                    <div className='box boxuno'>
                        <h3 className='subtitle about_subtitle'>¿Qué beneficios ofrece nuestro servicio de asesoría?</h3>
                        <ol className='beneficios'>
                            <li>Capacitación
                                <ul className='sub'>
                                    <li>Desarrollamos habilidades gerenciales y operativas para emprendedores, directivos y personal clave.</li>
                                </ul>
                            </li>
                            <li>Soluciones Personalizadas
                                <ul className="sub">
                                    <li>Cada empresa es única. Por eso, nuestras estrategias se adaptan a las características y necesidades de cada cliente.</li>
                                </ul>
                            </li>
                            <li>Red de Contactos
                                <ul className="sub">
                                    <li>Ofrecemos acceso a una red de expertos, instituciones y aliados en distintas industrias.</li>
                                </ul>
                            </li>
                            <li>Resultados Reales
                                <ul className="sub">
                                    <li>Trabajamos con enfoque práctico, orientados a generar resultados tangibles y medibles en cada etapa del proyecto.</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
    
                </div>
        </section>
    )
}

export default Beneficios;