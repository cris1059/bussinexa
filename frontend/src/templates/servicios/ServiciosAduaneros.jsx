import Pre from "../Presentation";
import Ft from "../Footer";
import Wp from "../../components/Wp_icon";
import Sc from "../../components/ScrollToTop";

import '../../assets/css/servicios-aduaneros.css';
import { useNavigate } from 'react-router-dom';

function ServiciosAduaneros() {

    const navigate = useNavigate();

    const Navegar = () => {
        navigate(-1);
        console.log("Volviendo a la página anterior");
    }

    return (
        <>  
            <Sc />
            <Pre/>
            <section id="servicios-aduaneros">
                <button className="btn_volver" onClick={Navegar}>Volver</button>
                <h2>Servicios Aduaneros y Logísticos</h2>
                
                <div className="quienes">
                    <div className='box boxuno'>
                        <h3 className='subtitle about_subtitle'>Especialistas en Comercio Exterior</h3>
                        <p className="parrafoSA">
                            En Bussinexa, somos expertos en facilitar el comercio internacional de tu empresa. 
                            Ofrecemos servicios integrales en materia aduanera y logística para optimizar tus 
                            operaciones de importación y exportación.
                        </p>
                        
                        <div className="servicios-grid">
                            <div className="servicio-card">
                                <h4>🎯 Asesoría Disciplinar y Profesional en Exportación</h4>
                                <ul className='lista-servicios'>
                                    <li>Análisis de viabilidad para exportación de productos</li>
                                    <li>Identificación de mercados objetivo internacionales</li>
                                    <li>Estrategias de penetración en mercados extranjeros</li>
                                    <li>Documentación y certificaciones requeridas</li>
                                    <li>Optimización de procesos de exportación</li>
                                    <li>Cumplimiento de normativas internacionales</li>
                                </ul>
                            </div>

                            <div className="servicio-card">
                                <h4>📋 Consultoría en Regulaciones de Importación</h4>
                                <ul className='lista-servicios'>
                                    <li>Análisis de restricciones no arancelarias (RRNA)</li>
                                    <li>Permisos y autorizaciones especiales</li>
                                    <li>Normas oficiales mexicanas (NOM) aplicables</li>
                                    <li>Certificaciones sanitarias y fitosanitarias</li>
                                    <li>Etiquetado y marcado conforme a regulaciones</li>
                                    <li>Gestión ante autoridades competentes</li>
                                </ul>
                            </div>

                            <div className="servicio-card">
                                <h4>🚛 Consultoría en Despacho Aduanal</h4>
                                <ul className='lista-servicios'>
                                    <li>Clasificación arancelaria correcta de mercancías</li>
                                    <li>Determinación del valor en aduana</li>
                                    <li>Elaboración y revisión de pedimentos</li>
                                    <li>Gestión de reconocimientos aduaneros</li>
                                    <li>Resolución de contingencias aduaneras</li>
                                    <li>Optimización de tiempos de despacho</li>
                                </ul>
                            </div>

                            <div className="servicio-card">
                                <h4>🎓 Asesoría y Capacitación Logística</h4>
                                <ul className='lista-servicios'>
                                    <li>Diseño de cadenas de suministro eficientes</li>
                                    <li>Selección de medios de transporte óptimos</li>
                                    <li>Gestión de inventarios internacionales</li>
                                    <li>Capacitación en normativa aduanera</li>
                                    <li>Implementación de mejores prácticas logísticas</li>
                                    <li>Formación de equipos especializados</li>
                                </ul>
                            </div>
                        </div>

                        <div className="beneficios-section">
                            <h3 className='subtitle'>¿Por qué elegir nuestros servicios?</h3>
                            <div className="beneficios-grid">
                                <div className="beneficio-item">
                                    <span className="beneficio-icon">✅</span>
                                    <div>
                                        <h5>Experiencia Comprobada</h5>
                                        <p>Años de experiencia en comercio exterior y operaciones aduaneras</p>
                                    </div>
                                </div>
                                <div className="beneficio-item">
                                    <span className="beneficio-icon">⚡</span>
                                    <div>
                                        <h5>Agilidad en Procesos</h5>
                                        <p>Reducimos tiempos de despacho y optimizamos tus operaciones</p>
                                    </div>
                                </div>
                                <div className="beneficio-item">
                                    <span className="beneficio-icon">🛡️</span>
                                    <div>
                                        <h5>Cumplimiento Normativo</h5>
                                        <p>Garantizamos el apego total a la legislación vigente</p>
                                    </div>
                                </div>
                                <div className="beneficio-item">
                                    <span className="beneficio-icon">💰</span>
                                    <div>
                                        <h5>Ahorro de Costos</h5>
                                        <p>Identificamos oportunidades de optimización fiscal y logística</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Wp />
            <Ft />
        </>
    )
}

export default ServiciosAduaneros;