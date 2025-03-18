import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
import Banner36 from '../../Banner/banner36'
import imagen1 from '../conocimiento/assests/UnaAventuraAOtroNivel.jpg'
import imagen2 from '../conocimiento/assests/Altiplano-andino-surrealismo-al-natural.jpg'
import imagen3 from '../conocimiento/assests/Pampa-del-Tamarugal.jpg'
import imagen4 from '../conocimiento/assests/donde-queda-y-como-llegar-ritoque-la-tranquila-playa-dunas-y-bosques-menos-una-hora-renaca-foto-instagram-jpdelaharpe.webp'
import imagen5 from '../conocimiento/assests/MAULETEC.jpg'
import imagen6 from '../conocimiento/assests/jackery-tu-mejor-aliado-en-la-aventura.jpg'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const Hacer4x4EnChile = () => {
    return (
        <div>
            <Helmet>
                <title>Los 5 lugares más elegidos para hacer 4x4 en Chile</title>
            </Helmet>
            <header>
                <div className='bannerConteiner'>
                    <Banner36 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='container NotaTexConteiner'>

                    {/* inicio nueva nota */}
                    <p>
                        ¿Quieres tener una experiencia de mucha adrenalina? Entonces, la aventura 4x4 es para vos. Existen muchos lugares para hacerlo pero no hay mejor opción que ir a los sitios más elegidos por los chilenos, según la Secretaría de Turismo de Chile. ¿Quieres saber cuáles son? ¡Quédate a leer la nota y enterate!
                    </p>
                    <strong>Desierto de Atacama</strong><br />
                    <i>Una aventura a otro nivel</i>
                    <div className='NotaImgConteiner'>
                        <img src={imagen1} alt='imagen' />
                    </div>

                    <p>
                        El <Link to="https://www.sernatur.cl/region/atacama/" className='uline' target='_blank' style={{ color: '#FF5000' }}>Desierto de Atacama</Link> está ubicado en el norte de Chile. Es el lugar perfecto para desafiar tus límites: la ruta que conecta San Pedro de Atacama con los géiseres del Tatio ofrece altitudes superiores a los 4,000 metros y temperaturas extremas. Además, podrás conducir por terrenos difíciles como el Valle de la Luna o el Valle de la Muerte, mientras disfrutas paisajes únicos como las dunas gigantes y los salares.
                    </p>
                    <strong>Altiplano andino</strong><br />
                    <i>Una experiencia de ensueño</i>
                    <div className='NotaImgConteiner'>
                        <img src={imagen2} alt='imagen' />
                    </div>

                    <p>
                        El <Link to="https://repositorio.uchile.cl/handle/2250/141211" className='uline' target='_blank' style={{ color: '#FF5000' }}>Altiplano andino</Link> comprende las regiones de Tarapacá, Antofagasta, parte de la región de Atacama, Arica y Parinacota. Entre muchos de sus territorios para hacer 4x4, recomendamos aquel camino que se hace para llegar a la Laguna Roja, ubicada en la comuna de Camarones, en la región de Arica y Parinacota.
                        Dicha ruta parte de la localidad de Camiña (Tarapacá) y atraviesa la ruta A-41, cuyo nivel dificultad es bien complicado debido a sus piedras sultas, curvas y saltos: ideal para aquellos que sueñan con una aventura extrema.
                    </p>

                    <strong>Pampa del Tamarugal</strong><br />
                    <i>En el corazón del desierto del norte de Chile</i>
                    <div className='NotaImgConteiner'>
                        <img src={imagen3} alt='imagen' />
                    </div>

                    <p>
                        La <Link to="https://patrimonio.bienes.cl/patrimonio/pampa-del-tamarugal/" className='uline' target='_blank' style={{ color: '#FF5000' }}>Pampa del Tamarugal</Link> está situada en el centro del desierto del norte de Chile. Este lugar se distingue por sus extrañas formaciones geológicas y por sus antiguas oficinas salitreras, tales como Humberstone y Santa Laura. Aunque mayoritariamente su terreno sea plano, en parte de su recorrido te encontrarás con tramos de arena y suelos muy desafiantes que te darán mucha adrenalina: una experiencia off-road a otro nivel.
                    </p>

                    <strong>Dunas de ritoque</strong><br />
                    <i>Ideal para los fánaticos de la arena</i>
                    <div className='NotaImgConteiner'>
                        <img src={imagen4} alt='imagen' />
                    </div>
                    <p>
                        Las <Link to="https://www.mhnv.gob.cl/media/6890" className='uline' target='_blank' style={{ color: '#FF5000' }}>Dunas de Ritoque</Link> se encuentran en la comuna costera Quintero, en la región de Valparaíso. Este lugar se caracteriza por sus desiertas dunas, sus piedras y riscos que ofrecen una oportunidad de vivir un 4x4 diferente, perfecto para los que aman la arena.
                    </p>

                    <strong>Valle del río Maule</strong><br />
                    <i>Una aventura desafiante</i>
                    <div className='NotaImgConteiner'>
                        <img src={imagen5} alt='imagen' />
                    </div>
                    <p>
                        El <Link to="https://www.sernatur.cl/region/maule/" className='uline' target='_blank' style={{ color: '#FF5000' }}>Valle del río Maule</Link> se ubica a 250 kilómetros al sur de Santiago. Este valle se caracteriza por paisajes de ensueño, cascadas, lagos y ríos. Entre los muchos sitios que tiene para hacer 4x4, te sugerimos hacer aquel camino que parte desde Talca, por la ruta CH115, hacia el Paso Pehuenche. Luego de 70 kilómetros, toma el desvío hacia Armerillo y continúa por el Valle del Río Claro. Encontrarás en esta aventura paisajes increíbles y verdaderos desafíos para vehículos 4x4.
                    </p>
                    <p>
                        <strong>Jackery, tu mejor aliado en la aventura 4x4</strong><br />
                        En las travesías off-road, la electricidad no siempre está disponible; lo que podría complicar el uso de tus dispositivos. Para que nada frene tu aventura, te recomendamos que lleves una estación de energía, como la Explorer 1000, ya que es portátil, liviana, segura, fácil de usar y eficiente para alimentar todo tipo de dispositivos que necesitas:
                    </p>
                    <ul>
                        <li><strong>GPS</strong>: te permite conocer rutas y ver mapas en áreas remotas donde no hay señal de celular. Si, por ejemplo, cargás tu gps Garmin Overlander con la Explorer 1000, podrás usarla de manera continua por 3 días.</li>
                        <li><strong>Radio VHF</strong>: te habilita a comunicarte con otros vehículos o servicios de emergencia en zonas sin cobertura. Con la Explorer 1000, podrás cargar tu Midland GXT1000VP4 y usarla de manera continua por 6 días.</li>
                        <li><strong>Compresor de aire portátil</strong>: vas a poder ajustar la presión de los neumáticos en función del terreno o en el caso de que tengas alguna pinchadura. Podrás cargar tu Viair 88Pm con la estación de energía, para usarla de forma continua por 3,3 horas.</li>
                        <li><strong>Luces LED</strong>: te permite mejorar la visibilidad en la noche en terrenos hostiles. Si, por ejemplo, cargás Nilight 20” LED Light Bar con la Explorer 1000, podrás usarla de manera continua por 6,3 horas.</li>
                        <li><strong>Heladerita portátil</strong>: para conservar tus alimentos y bebidas en óptimas condiciones te conviene llevar una heladerita portátil. Con la Explorer 1000, puedes alimentar tu Dometic CFX3 y usarla de manera continua por 13 horas
                        </li>
                        <li><strong>Parrilla eléctrica portátil</strong>: te conviene llevar una parrilla para cocinarte ya que los vientos son tan fuertes que impiden prender el fuego fácilmente. Puedes alimentar tu Aigostar Hitte 30HFA con la estación de energía, para usarla de forma continua por 1 hora.</li>
                        <li><strong>Drone y cámara</strong>: para registrar toda tu experiencia es conveniente que lleves tu drone y cámara. Con la Explorer 1000 puedes cargar tu drone DJI Mini 3 Pro y usarla continuamente por 10 horas, como así también, puedes cargar tu cámara Sony Alpha 7 IV y usarla por 4 días para registrar toda tu experiencia.</li>
                    </ul>

                    <div className='NotaImgConteiner'>
                        <img src={imagen6} alt='imagen' style={{ width: 600 }}/>
                    </div>

                    <p>
                    En resumen, <strong>Jackery es el aliado perfecto para hacer 4x4</strong> ya que te asegura energía en todo momento y lugar. Consigue tu Explorer para poder tener verdadera independencia energética en una aventura de máxima adrenalina.
                    </p>



                    {/* <div className='NotaImgConteiner'>
                        <img src={imagen1} alt='imagen' />
                    </div>
                    
                    <Link to="https://laserena.cl/" className='uline' target='_blank'><span style={{ color: '#FF5000' }}></span></Link> */}

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
export default Hacer4x4EnChile;