import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
import { Link } from 'react-router-dom'
import Banner24 from '../../Banner/banner24'
import imagen from '../conocimiento/assests/SolarVsGeneradoresComparativa.jpg'
import { Helmet } from 'react-helmet'

const SolaresVsGeneradores = () => {
    return (
        <div>
            <Helmet>
                <title>Generadores solares vs generadores tradicionales</title>
            </Helmet>
            <header>
                <div className='bannerConteiner'>
                    <Banner24 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='NotaTexConteiner'>

                    {/* inicio nueva nota */}
                    <p>
                        Hay diferentes tipos de generadores: los más conocidos son los generadores tradicionales pero también existen los novedosos generadores solares. Pero, ¿cuál es más seguro y eficiente para tener como respaldo de energía? ¿cuál conviene comprar para este verano?
                    </p>
                    <p>
                        En principio, los <strong>generadores tradicionales</strong>, aunque tienen mayor potencia y te permiten alimentar dispositivos de gran consumo, son ruidosos, pesados, costosos, díficiles de configurar, ocupan mucho lugar y provocan emisiones contaminantes que son perjudiciales para tu salud si lo usas en ambientes cerrados.<br />
                        En cambio, los <strong>xgeneradores solares</strong> son livianos, portátiles, silenciosos, fácil de usar, económicos, amigables con el medioambiente y seguros para tu salud porque no generan emisiones contaminantes. Y lo mejor de todo es que ocupan poco espacio, lo que los hace perfectos para usarlo dentro de departamentos.
                    </p>
                    <div className='NotaImgConteiner'>
                        <img src={imagen} alt='imagen' />
                    </div>
                    <p>
                        Entonces, está más que claro qué generador <strong>te conviene comprar para los cortes de luz: un generador solar</strong>. Nuestros generadores solares son perfectos para usarlos en donde sea y en cualquier situación, sean cortes de energía, actividades outdoor o trabajo off grid.
                    </p>
                    <p>
                        Específicamente, te recomendamos el <Link to="/PRODUCTOS/Jackery%20Generador%20Solar%20240" target='_blank'><span style={{ color: '#FF5000' }}>generador solar 240</span></Link> que combina la central eléctrica portátil <strong>Explorer 240</strong> y <strong>SolarSaga 100W</strong>. Cuando la luz del sol incide sobre el panel solar SolarSaga de 100 W, las células fotovoltaicas convierten la energía del sol en electricidad con la mayor eficiencia. Luego, la central eléctrica almacena la electricidad para cargar dispositivos como celulares, notebook, ventiladores portátiles de escritorio, entre otros. ¡El combo perfecto para generar tu propia energía ante los cortes de luz programados para este verano!
                    </p>
                    <p>
                        Gracias a su capacidad de 241.9 Wh, puede cargar simultáneamente diferentes dispositivos, por ejemplo:
                    </p>
                    <ul>
                        <li><strong>Parlante Bluetooth</strong>: podés seguir escuchando música con normalidad mientras trabajás o hacés tareas del hogar. Con la Explorer 240, podés cargar el parlante JBL Flip 6 y usarlo de manera continua por 9,6 horas.</li>
                        <li><strong>Ventilador portátil de escritorio</strong>: para un home office más cómodo, te conviene un ventilador para estar más fresco en el verano. Si, por ejemplo, cargás un ventilador portátil Xiaomi Mi Smart Standing Fan 1C con la estación de energía, podés usarlo de manera continua por 12,8 horas.</li>
                        <li><strong>Lámpara de escritorio</strong>: si tienes que trabajar en la computadora, es importante que tengas un velador para poder trabajar con mayor visualización. Podrás cargar tu lámpara de escritorio LED TaoTronics con la estación de energía, para usarla de forma continua por 38,4 horas.</li>
                        <li><strong>Notebook</strong>: con la Explorer 240, podés usar por 2,25 horas tu notebook y seguir trabajando o ver una película para relajarte.</li>
                        <li><strong>Módem</strong>: te permite tener internet y podés seguir con tu rutina. Podés usar tu módem por 25 horas, si lo cargás con la Explorer 240.</li>
                        <li><strong>Otros dispositivos</strong>: si será un corte prolongado, es imprescindible que puedas conectar algunos electrodomésticos para comer y beber. La Explorer 240 te permitirá
                            disfrutar de hasta 1,3 horas de café caliente con tu cafetera Cafetera Mini Piccolo de Dolce Gusto, hacer licuados por 1,1 hora con la licuadora portátil PopBabies y usar una parrilla eléctrica portátil por una 1 hora.
                        </li>
                    </ul>

                    {/* Falta una imagen aqui */}

                    <p>En resumen, el generador solar 240 es el aliado energético que necesitas para hacerle frente a los cortes de luz. Con Jackery, puedes seguir funcionando.</p>

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
export default SolaresVsGeneradores;