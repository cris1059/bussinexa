
import '../assets/css/asesorias.css';

function Asesorias() {
    return (
        <section id="areas-asesoria">
            <h2>Asesoria</h2>
            
                        <div className="quienes">
            
                            <div className='box boxuno'>
                                <h3 className='subtitle about_subtitle'>¿En qué áreas brindamos asesoría?</h3>
                                <p>
                                    En Bussinexa, ofrecemos un acompañamiento integral en las siguientes áreas clave para el desarrollo empresarial:
                                </p>
                                <ol className='listaordenada'>
                                    <li>1.- Validación de Ideas
                                        <ul className='sublista'>
                                            <li>Análisis del mercado y viabilidad de la idea.</li>
                                            <li>Identificación de oportunidades de negocio reales.</li>
                                        </ul>
                                    </li>
                                    <li>2.- Elaboración y Diseño del Plan de Negocios
                                        <ul className='sublista'>
                                            <li>Estudio técnico, análisis de costos y estudio de mercado.</li>
                                            <li>Evaluación económico-financiera, presupuesto de inversión y rentabilidad.</li>
                                        </ul>
                                    </li>
                                    <li>3.- Financiamiento y Recursos
                                        <ul className='sublista'>
                                            <li>Búsqueda de fuentes de financiamiento, subvenciones e inversionistas.</li>
                                            <li>Gestión de recursos y elaboración del presupuesto inicial.</li>
                                        </ul>
                                    </li>
                                    <li>4.- Marketing y Estrategia de Entrada al Mercado
                                        <ul className='sublista'>
                                            <li>Diseño de estrategias de marketing efectivas para el lanzamiento.</li>
                                            <li>Segmentación de mercado, posicionamiento y comunicación.</li>
                                        </ul>
                                    </li>
                                    <li>5.- Desarrollo de Producto o Servicio
                                        <ul className='sublista'>
                                            <li>Asesoría en diseño, validación y mejora continua del producto/servicio.</li>
                                            <li>Implementación de procesos de innovación.</li>
                                        </ul>
                                    </li>
                                    <li>6.- Aspectos Legales y Administrativos
                                        <ul className="sublista">
                                            <li>Apoyo en la formalización legal del negocio y cumplimiento fiscal.</li>
                                            <li>Estructura organizativa, trámites y gestión administrativa.</li>
                                        </ul>
                                    </li>
                                    <li>7.- Asesoría Fiscal y Contable
                                        <ul className="sublista">
                                            <li>Trámites ante el SAT y cumplimiento tributario.</li>
                                            <li>Diseño de estrategias fiscales adaptadas a cada empresa.</li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                        </div>
        </section>
    )
}

export default Asesorias;