
import './Products.css'
import Cards5 from '../sliders/cards5';
import CardProduct from '../Card/cardProducts/CardProduct7'
import Gallery from '../gallery/gallery7';
import imagen from './assests/producto7/240507-Jackery-Web-Landing-Generador 500-I-1920x1080 (1).jpg'
import imagen2 from './assests/producto7/240507-Jackery-Web-Landing-Generador 500-D-1920x1080 (1).jpg'
import CardIcons from '../Card/cardIcons/cardIcons7';
import Calculator from '../calculator/calculator';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';

const PRODUCTOS7 = () => {

  const watts = 500;
  const wattsLimit = 500;

  return (

    <div className='conteiner'>
      <Helmet>
        <title>Jackery Generador Solar 500</title>
      </Helmet>
      <div className='conteinerProducts1'>
        <div className='conteinerProducts1Imagen'>
          <CardProduct />
        </div>
        <div className='conteinerProducts1ImagenText'>
          <h1 className='textProducts'>Jackery Generador Solar 500</h1>
          <h2 className='numberProducts'> $1.014.990</h2>
          <p className='BodyProducts'>Jackery Generador Solar 500: Estación de Energía Portátil Jackery Explore 500 + Panel Solar SolarSaga 100W</p>
          <p className='BodyProducts'>Batería de 518 Wh</p>
          <p className='BodyProducts'>Inversor de 500 W (sobretensión de 1000 W)</p>
          <p className='BodyProducts'>Seguro, limpio y silencioso</p>
          <p className='BodyProducts'>7 salidas para dispositivos exteriores</p>
          <p className='BodyProducts'>A prueba de agua y polvo IP65</p>
          <p className='BodyProducts'>Alta eficiencia de conversión de hasta el 23%</p>
          <a href="https://www.mercadolibre.cl/ms/gz/checkout/buy-ms?px_variant_id=25186&item_id=MLC2028375988&parent_url=https://jackery.mercadoshops.cl/MLC-2028375988-jackery-generador-solar-500-_JM&context=vip-mshops&channel=mshops&ms_store=jackery.mercadoshops.cl&quantity=1" className="myButtonProduct mb-3" target="_blank" rel="noopener noreferrer">
            COMPRAR AHORA
          </a>
        </div>
      </div>
      <div className='conteinerProducts2'>
        <div className='ProductDescription'>
          <h1 className='textProducts'>Jackery Generador Solar 500</h1>
          <div className='borderContainer'>
            <p className='BodyProducts'>
              El generador solar 500 es uno de los más livianos y portátiles en el mercado; es perfecto para proporcionar energía limpia a tus múltiples dispositivos en tus diversas actividades al aire libre.
            </p>
          </div>
        </div>
        <div className='ProductVideo'>
          <div className='ProductVideo'>
            <iframe
              width='100%'
              height='400px'
              src="https://www.youtube.com/embed/D0sgYdQppd0"
              title='Product Video'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className='ProductDescription'>
          <p className='BodyProducts'>El Jackery Generador Solar 500 es una solución energética que combina la Estación de Energía Portátil Explorer 500 de Jackery y el panel solar SolarSaga100W. Este convierte la energía capturada por los paneles solares en energía eléctrica, y luego la almacena en la estación de energía portátil para su posterior uso. Este generador solar es una fuente de energía fiable y limpia para campistas, vehículos recreativos o como respaldo de emergencia.</p>
        </div>

      </div>
      <div className='conteinerProducts3'>
        <div className='ProductDescription'>
          <h1 className='textProducts'>¿Por qué elegir el Jackery Generador Solar 500?</h1>
        </div>
        <Gallery />
      </div>
      <div className='conteinerProducts4'>
        <div className='ProductDescription'>
          <h1 className='textProducts'>Descubre más sobre energía solar</h1>
        </div>
        <div className='containerReview'>
          <div className="cardReview">
            <div className='cardImgReview'>
              <img src={imagen} className="card-img-top" alt="..." />
            </div>
            <div className='card-body cardbodyReview'>
              <div className='card2'>
                <h1 className='titleReview'>Súmate a la energía limpia</h1>
                <p className='textReview'>Nuestro planeta reclama la transición energética. Empieza a formar parte del cambio con la energía limpia de Jackery  </p>
              </div>
            </div>
          </div>
          <div className="cardReview" >
            <div className='cardImgReview'>
              <img src={imagen2} className="card-img-top" alt="..." />
            </div>
            <div className='card-body cardbodyReview'>
              <div className='card2'>
                <h1 className='titleReview'>Expande tus conocimientos sobre energía solar</h1>
                <p className='textReview'> Ingresa aquí si quieres conocer más sobre el funcionamiento de los generadores solares</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='conteinerProducts5'>
      <h1 className='container textProducts center'>Todo lo que puedes alimentar con tu Jackery Generador Solar 500</h1>
        <p className='container textReview'>La estación de energía Explore 500 del generador te permite cargar dispositivos de baja a alta potencia, tales como bombas de aire, televisores, mini-refrigeradores, entre otros.</p>
        <CardIcons />
      </div>
      <div className='conteinerProducts6'>
        <div className='ProductDescription'>
          <h1 className='textProducts'>Simulador de tiempo de funcionamiento</h1>
          <p className='textReview'>Ingresa el voltaje de un dispositivo (que no exceda los 500 W) y descubre cuánto tiempo, aproximadamente, puedes usarlo de manera continua si lo alimentas con la Explorer 500.</p>
          <Calculator watts ={watts} wattsLimit = {wattsLimit}/>
          <p>*Ten en cuenta que los resultados son aproximados</p>
        </div>
        <div id="novedades" className="cardSlider container mb-3">
          <p className="texSlider">NOVEDADES</p>
          <Cards5 />
          <a href="https://tu-pagina.com" className="myButton mb-3" target="_blank" rel="noopener noreferrer">
            EXPLORAR MÁS
          </a>
        </div>
      </div>
      <footer className='conteinerFooter'>
        <Footer />
      </footer>

    </div>




  );
};

export default PRODUCTOS7;