import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
import Banner31 from '../../Banner/banner31'
import imagen from '../conocimiento/assests/las-cruces_0013-2.jpg'
import imagen1 from '../conocimiento/assests/vinia-del-mar.jpg'
import imagen2 from '../conocimiento/assests/El-Tabo-Playa-1.webp'
import imagen3 from '../conocimiento/assests/la-serena-2.webp'
import imagen4 from '../conocimiento/assests/algarrobo.jpg'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const VacacionesEnChile = () => {
    return (
        <div>
            <Helmet>
                <title>Los 5 lugares más elegidos para vacacionar en Chile</title>
            </Helmet>
            <header>
                <div className='bannerConteiner'>
                    <Banner31 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='container NotaTexConteiner'>

                    {/* inicio nueva nota */}
                    <p>
                        Nuestro país ofrece una diversidad de destinos turísticos para todos los gustos: desde playas paradisíacas y grandes ciudades hasta paisajes únicos de la Patagonia y la imponente cordillera de los Andes. Existen diferentes opciones para disfrutar de unas vacaciones inolvidables con amigos o en familia. Pero, ¿cuáles son los destinos más preferidos por los chilenos?
                    </p>
                    <p>
                        Según la <Link to="https://www.subturismo.gob.cl/" className='uline' target='_blank'><span style={{ color: '#FF5000' }}>Subsecretaría de Turismo de Chile</span></Link>, los lugares más visitados por los turistas nacionales son los siguientes:
                    </p>
                    <p>
                        <strong>Valparaíso</strong><br />
                        <i>Conocida como la joya del pacífico</i>
                    </p>
                    <div className='NotaImgConteiner'>
                        <img src={imagen} alt='imagen' />
                    </div>
                    <p>
                        <Link to="https://municipalidaddevalparaiso.cl/" className='uline' target='_blank'><span style={{ color: '#FF5000' }}>Valparaíso</span></Link> se encuentra en la costa central de Chile, a unos 120 km al noroeste de Santiago. Esta ciudad es conocida por su arte callejero, sus cerros pintoresos, sus casas coloridas, sus edificios centenarios y, por supuesto, su vida nocturna. Debido a su notable diseño arquitectónico, Valparaíso se convirtió en Patrimonio de la Humanidad por la Unesco.
                        Los sitios que no puedes dejar de visitar son los cerros Alegre y Concepción, el Paseo 21 de Mayo, la ruta del Street Art y La Sebastiana, una de las casas del emblemático poeta Pablo Neruda.

                    </p>

                    <p>
                        <strong>Viña del Mar</strong><br />
                        <i>Un destino lleno de aventuras</i>
                    </p>
                    <div className='NotaImgConteiner'>
                        <img src={imagen1} alt='imagen' />
                    </div>
                    <p>
                        <Link to="https://municipalidaddevalparaiso.cl/" className='uline' target='_blank'><span style={{ color: '#FF5000' }}>Viña del Mar</span></Link> está situada en la región de Valparaíso, en la costa central de Chile. La "Ciudad Jardín" es el destino perfecto para aquellos que buscan playas, vida noctura y un turismo cultural. Te recomendamos que vayas a la plata Reñaca, al Casino Municipal, al icónico reloj de flores y al Festival Internacional de la Canción de Viña del Mar, uno de los eventos culturales más importantes de Latinoamérica.
                    </p>

                    <p>
                        <strong>El tabo</strong><br />
                        <i>Un balneario para toda la familia</i>
                    </p>
                    <div className='NotaImgConteiner'>
                        <img src={imagen2} alt='imagen' />
                    </div>
                    <p>
                        <Link to="https://eltabo.cl/" className='uline' target='_blank'><span style={{ color: '#FF5000' }}>El tabo</span></Link> está ubicado a 100 km de Santiago, en la zona del litoral central. Este tranquilo balneario es ideal para pasar un lindo momento con la familia. Incluso, está cercano a rutas de trekking que permiten disfrutar de la naturaleza y los paisajes costeros, tales como Quebrada de Córdova y Caleta Las Cruces.
                    </p>

                    <p>
                        <strong>La Serena</strong><br />
                        <i>Ofrece una experiencia cultural única</i>
                    </p>
                    <div className='NotaImgConteiner'>
                        <img src={imagen3} alt='imagen' />
                    </div>
                    <p>
                        <Link to="https://laserena.cl/" className='uline' target='_blank'><span style={{ color: '#FF5000' }}>La Serena</span></Link> se encuentra en la región de Coquimbo, a unos 470 km al norte de Santiago.
                        Es una de las ciudades más antiguas de Chile, reconocida por su arquitectura colonial, playas y su oferta cultural. Te recomendamos que vayas a Valle del Elqui, la Avenida del Mar y el Faro Monumental.
                    </p>

                    <p>
                        <strong>Algarrobo</strong><br />
                        <i>Ideal para conectar con la naturaleza</i>
                    </p>
                    <div className='NotaImgConteiner'>
                        <img src={imagen4} alt='imagen' />
                    </div>
                    <p>
                        <Link to="https://www.turismoalgarrobo.cl/algarrobo.htm" className='uline' target='_blank'><span style={{ color: '#FF5000' }}>Algarrobo</span></Link>, conocido como la "Capital Náutica de Chile", se sitúa a 105 km de Santiago, en el litoral central. Si buscas conectar con la naturaleza, te recomendamos visitar las playas  El Canelo y El Quisco, hacer actividades acuáticas como vela y kayak y, por supuesto, tienes que conocer la piscina más grande del mundo, en el complejo San Alfonso del Mar.
                    </p>

                    <p>
                        <strong>Jackery, el aliado de tus vacaciones</strong>
                        No te olvides que la electricidad no llega a muchos destinos turísticos, lo que podría limitar tus vacaciones. Por eso, te recomendamos que consigas una <Link to="https://jackerychile.com/PRODUCTOS/Jackery%20Explorer%20240" className='uline'><span style={{ color: '#FF5000' }}>Explorer 240</span></Link> para que no dependas de alargadores ni enchufes.
                        Con ella, puedes cargar de manera simultánea diferentes tipos de dispositivos electrónicos que necesitas para tu aventura:
                    </p>

                    <ul>
                        <li><strong>Dispositivos para la cocina</strong>: la estación de energía te permitirá evitar romper la cadena de frío de tus alimentos durante 3,5 horas con la heladera portátil Black+Decker BDC33L y usar por 1 horas la licuadora Hamilton Beach Personal Blender.</li>
                        <li><strong>Dispositivos para el entretenimiento</strong>: para que tus hijos no se aburran durante el viaje de auto, es importante tener energía para cargar los dispositivos que más usan. Con la Explorer 240, podés cargar una tablet Apple iPad por 1 día y un parlante Bluetooth JBL Flip 6, por 19 horas.</li>
                        <li><strong>Dispositivos para fotos y videos</strong>: para sacar fotos y videos del paisaje o de los momentos únicos que tengan en familia, conviene que tengas siempre cargado tu drone y GoPro. Con la Explorer 240 podrás cargar tu drone Hubsan Zino Mini Pro  y usarla continuamente por 1,3 horas. Además, podrás cargar tu GoPro HERO11 y usarla durante 19,2 horas.</li>
                        <li><strong>Dispositivos para la seguridad</strong>: para tener un viaje tranquilo te conviene tener un gps a mano para saber las ubicaciones de cualquier lugar. Con la estación de energía, podrás cargar tu Garmin GPSMAP 64sx y usarla de forma continua por 4 días.
                            Ahora bien, si planeás hacer campamento en la montaña, es imprescindible que tengas a mano luces. Con la Explorer 240, podrás cargar tu Black Diamond Spot 400 Headlamp y usarla de manera continua por 2 días.
                        </li>
                        <li><strong>Dispositivos para la salud</strong>: si tienes algún familiar con alguna complicación de salud, conviene que te asegures energía para casos de emergencia. Con la Explorer 240, podrás usar por 4 horas continuas tu Philips DreamStation Auto CPAP y tu nebulizador Omron NE-C801 por 6 horas.</li>
                    </ul>

                    <p>
                        En definitiva, <strong>Jackery</strong> es el aliado perfecto para tener energía a donde sea que vayas en tus vacaciones. ¡A disfrutar el verano!
                    </p>


                    {/* fin de la nota */}

                </div>

                <div id="novedades" className="cardSlider container mb-3">
                    <p className="texSlider">NOVEDADES</p>
                    <Cards3 />
                    <a href="/Blog/jackery-presenta-el-revolucionario-generador-solar" className="myButton mb-3" target="_blank" rel="noopener noreferrer">
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
export default VacacionesEnChile;