import '../assets/css/home.css';
import Flecha from '../assets/img/lineaazul.png'


function Home() {
  return (
<>
      <section id="inicio">
        <div class="split-text-container">
          <span class="text-part left">BUSSI</span>
          <span class="text-part right">NEXA</span>
        </div>
        <h3 className='subtitleB'>CONSULTORES DE NEGOCIOS</h3>
        <img className='Fondoflecha' src={Flecha}/>
        {/*<h1 className='title'>BUSSINEXA</h1>*/}
        <h3 className='frase'>¡Estamos comprometidos para convertir tu idea en una realidad exitosa!</h3>
      </section>
      
</>
  );
}

export default Home;