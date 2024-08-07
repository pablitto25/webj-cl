
import './Products.css'
import Cards5 from '../sliders/cards5';
import CardProduct from '../Card/cardProducts/CardProduct8'
import Gallery from '../gallery/gallery8';
import imagen from './assests/producto8/240507-Jackery-Web-Landing-Generador 240-I-1920x1080.jpg'
import imagen2 from './assests/producto8/240507-Jackery-Web-Landing-Generador 240-D-1920x1080.jpg'
import CardIcons from '../Card/cardIcons/cardIcons8';
import Calculator from '../calculator/calculator';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';

const PRODUCTOS8 = () => {

  const watts = 240;
  const wattsLimit = 200;

  return (

    <div className='conteiner'>
      <Helmet>
        <title>Jackery Generador Solar 240</title>
      </Helmet>
      <div className='conteinerProducts1'>
        <div className='conteinerProducts1Imagen'>
          <CardProduct />
        </div>
        <div className='conteinerProducts1ImagenText'>
          <h1 className='textProducts'>Jackery Generador Solar 240</h1>
          <h2 className='numberProducts'> $721.990</h2>
          <p className='BodyProducts'>Jackery Generador Solar 240: Estación de Energía Portátil Jackery Explorer 240 + Panel Solar SolarSaga 100W</p>
          <p className='BodyProducts'>Batería de litio con capacidad de 240 Wh</p>
          <p className='BodyProducts'>Inversor de 200 W (sobretensión de 400 W)</p>
          <p className='BodyProducts'>Carga al 100% tu equipo en tan solo 8 horas</p>
          <p className='BodyProducts'>Resistente al agua IP65</p>
          <p className='BodyProducts'>Alta eficiencia de conversión de hasta el 23%</p>
          <a href="https://www.mercadolibre.cl/ms/gz/checkout/buy-ms?px_variant_id=25186&item_id=MLC2028426670&parent_url=https://jackery.mercadoshops.cl/MLC-2028426670-jackery-generador-solar-240-_JM&context=vip-mshops&channel=mshops&ms_store=jackery.mercadoshops.cl&quantity=1" className="myButtonProduct mb-3" target="_blank" rel="noopener noreferrer">
            COMPRAR AHORA
          </a>
        </div>
      </div>
      <div className='conteinerProducts2'>
        <div className='ProductDescription'>
          <h1 className='textProducts'>Jackery Generador Solar 240</h1>
          <div className='borderContainer'>
            <p className='BodyProducts'>
              Su diseño robusto, seguro y fácil de mantener convierte al Jackery Generador Solar 240   como uno de los favoritos de los amantes de la naturaleza. LLévalo a donde te llame la aventura.
            </p>
          </div>
        </div>
        <div className='ProductVideo'>
          <div className='ProductVideo'>
            <iframe
              width='100%'
              height='400px'
              src="https://www.youtube.com/embed/Tz9uVgdKT4E?si=Mmv_qkAVG4KdlBHd"
              title='Product Video'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className='ProductDescription'>
          <p className='BodyProducts'>Jackery Generador Solar 240 combina la central eléctrica portátil Explorer 240 y SolarSaga 100W: la solución energética ideal para aventuras al aire libre. Cuando la luz del sol incide sobre el panel solar SolarSaga de 100 W, las células fotovoltaicas convierten la energía del sol en electricidad con la mayor eficiencia. Luego, la central eléctrica almacena la electricidad para cargar dispositivos como teléfonos, computadoras portátiles, cámaras, etc.</p>
        </div>

      </div>
      <div className='conteinerProducts3'>
        <div className='ProductDescription'>
          <h1 className='textProducts'>¿Por qué elegir el Jackery Generador Solar 240?</h1>
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
        <h1 className='container textProducts center'>Todo lo que puedes alimentar con tu Jackery Generador Solar 240</h1>
        <p className='textReview'>La estación de energía Explorer 240 del generador te permite alimentar simultáneamente diversos tipos de dispositivos.</p>
        <CardIcons />
      </div>
      <div className='conteinerProducts6'>
        <div className='ProductDescription'>
          <h1 className='textProducts'>Simulador de tiempo de funcionamiento</h1>
          <p className='textReview'>Ingresa el voltaje de un dispositivo (que no exceda los 200 W) y descubre cuánto tiempo, aproximadamente, puedes usarlo de manera continua si lo alimentas con la Explorer 240. </p>
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

export default PRODUCTOS8;