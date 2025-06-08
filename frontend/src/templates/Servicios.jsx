import '../assets/css/servicios.css';

function Servicios() {
    

    return (
        <section id="servicios">
            <h2>Servicios</h2>
            <div className='quienes'>
    
                <div className='box uno'>
                    <h3 className='subtitle about_subtitle'>¿Qué tipo de servicios ofrecemos?</h3>
                    <p>
                        Ofrecemos servicios de asesoría y consultoría especialmente diseñados para emprendedores, visionarios y equipos que buscan transformar sus ideas en negocios sólidos y sostenibles.
                    </p>
                </div>

                
                {/*<
                <div className='box'>
                   img src='{Somos}' alt="somos" />
                </div>
                */}
    
            </div>

            <div className='quienes'>
                <div className='box uno'>
                    <h3 className='subtitle about_subtitle'>¿Cuál es el enfoque de nuestra consultoría?</h3>
                    <p>
                        Nos enfocamos en desarrollar proyectos con una base ética, sustentable y con valor social. Acompañamos a nuestros clientes en la construcción de modelos de negocio que no solo sean rentables, sino que también generen un impacto positivo en su entorno.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Servicios;