import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards5 from '../../sliders/cards5'
import { Helmet } from 'react-helmet'
import Banner33 from '../../Banner/banner33'
import { Link } from 'react-router-dom'



const Sismos = () => {
  return (
    <div>
      <Helmet>
        <title>Sismo: qué hacer si te quedaste sin luz</title>
      </Helmet>
      <header>
        <div className='bannerConteiner'>
          <Banner33 />
        </div>
      </header>
      {/* Start Note */}
      <section className='NotaConteiner' >
        <div className='NotaTexConteiner'>

          <p>
            Según el <Link to="https://www.sismologia.cl/" target='_blank'><span style={{ color: '#FF5000' }}>Centro Sismológico Nacional</span></Link>, los <strong>sismos</strong> son aquella liberación repentina de energía que provoca ondas elásticas, cuya posterior propagación se da en el interior de la Tierra. Una vez que dicha propagación llega a la superficie terrestre, se produce el movimiento y vibración del suelo.
          </p>
          <p>
            Los sismos son muy frecuentes en Chile: nuestro país tiene un promedio de 7 mil sismos al año. Esto se debe a que el territorio chileno se encuentra en la placa Sudamericana, la cual hace contacto con la placa de Nazca en su lado oeste. En efecto, dicha interacción entre ambas placas ocasiona que el país sea propenso a experimentar un número alto de sismos.
          </p>
          <p>
            Dada la alta frecuencia en nuestro país, resulta necesario adquirir otra fuente de energía ya que los sismos vienen acompañados de cortes de luz prolongados y altas probabilidades de cortocircuitos.
          </p>
          <p>
            Entonces, la solución es comprar un generador solar de <strong>Jackery</strong>. Te recomendamos el <Link to="https://www.sismologia.cl/" target='_blank'><span style={{ color: '#FF5000' }}>generador solar 1000</span></Link> que combina la central eléctrica portátil <strong>Explorer 1000 y SolarSaga 100W</strong>: el combo perfecto para generar tu propia energía ante los cortes de luz producidos por los sismos.
          </p>
          <p>
            Asimismo, el generador solar, a diferencia del generador a combustible, es liviano, portátil, silencioso, económico, ocupa poco espacio y es seguro para tu salud porque no genera emisiones contaminantes. Gracias a su capacidad de 1002.2Wh, puedes cargar simultáneamente diferentes dispositivos:
          </p>
          <ul>
            <li><strong>Dispositivos para la salud</strong>: con la Explorer 1000, puedes cargar tu Philips DreamStation Auto CPAP y usarla por 16 horas, tu nebulizador Omron NE-C801 y usarla de manera continua por 26 horas. De este modo, puedes cuidar la salud de tu familia en todo momento.</li>
            <li><strong>Dispositivos para la cocina</strong>: la Explorer 1000 te permitirá evitar romper la cadena de frío de tus alimentos durante 13 horas con la heladera portátil Dometic CFX3, usar por 2 horas la licuadora Oster Classic 4655 y asar a la parrilla eléctrica por 1 hora con tu Aigostar Hitte 30HFA.</li>
            <li><strong>Dispositivos para trabajar</strong>: si necesitas seguir trabajando, entonces asegúrate de tener cargados los dispositivos que más usas. Con la Explorer 1000, podrás usar la notebook por 9 cargas, el módem por más de 100 horas y el celular por 100 cargas.</li>
            <li><strong>Dispositivos para la seguridad</strong>: es importante que esté cargado tu sistema de alarma ya que la batería de respaldo podría agotarse antes de que regrese la electricidad. Por eso, te recomendamos que la cargues con la Explorer ya que puedes usarla de manera continua por 20 horas.
              Además, te sugerimos cargar luces durante el corte de luz. Si, por ejemplo, cargas tu lámpara Gadnic LED con la Explorer 1000, podrás usarla de manera continua por 11 días.
              Por otro lado, con la Explorer, puedes cargar tu alerta para sismos para saber si va a ocurrir un próximo sismo. Con la Explorer 1000, puedes cargar tu alarma de advertencia de terremoto C-88QUAKE y usarla durante 11 días.
              Ahora bien, si te encuentras frente a un sismo de alto grado, recomendamos que tengas cargado tu silbato eléctrico para poder alertar tu ubicación en el caso de que te quedes atrapado o ante una emergencia. Con la estación de energía, podrás cargar tu silbato electrónico Junction y usarlo por 15 días. Asimismo, si las conexiones de gas han sido dañadas, te conviene usar un detector de monóxido de carbono portátil para que puedas monitorear la calidad del aire en tu casa o departamento y evitar accidentes. Si, por ejemplo, cargas tu Aouzea JKD-512COM   y puedes usarlo por 20 días.</li>
          </ul>
          <p>
            En conclusión, te recomendamos que te prepares con anticipación y te asegures de tener energía segura para la próxima vez que haya un sismo. La energía portátil de Jackery es la aliada que necesitas para enfrentar los cortes de luz producidos por los sismos.
          </p>



        </div>
        {/* End Note */}

        <div id="novedades" className="cardSlider container mb-3">
          <p className="texSlider">NOVEDADES</p>
          <Cards5 />
          <a href="https://tu-pagina.com" className="myButton mb-3" target="_blank" rel="noopener noreferrer">
            EXPLORAR MÁS
          </a>
        </div>

      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
export default Sismos;