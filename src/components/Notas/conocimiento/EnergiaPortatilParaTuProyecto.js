import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Cards3 from '../../sliders/cards3'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Banner32 from '../../Banner/banner32'

const EnergiaPortatilParaTuProyecto = () => {
    return (
        <div>
            <Helmet>
                <title>Energía portátil para tu proyecto</title>
            </Helmet>
            <header>
                <div className='bannerConteiner'>
                    <Banner32 />
                </div>
            </header>
            <section className='NotaConteiner' >
                <div className='container NotaTexConteiner'>

                    {/* inicio nueva nota */}
                    <p>
                        ¿Quieres construir una casita para tu perrito? ¿Buscas tener una actividad de construcción con tus hijos? ¿O simplemente necesitas arreglar un mueble? Sea cual sea tu <strong>proyecto</strong>, es importante que tengas energía eficiente y segura en cualquier momento y lugar.
                    </p>
                    <p>
                        Para trabajar cómodo, te recomendamos que consigas una estación de energía ya que podrás ocuparte en tu proyecto sin depender de enchufes o alargadores. Además, la energía portátil te permite trabajar en el patio, en el jardín o a donde que sea más conveniente, lo que evita el polvillo, manchas de pintura y suciedad en el interior de tu casa. Por eso, la mejor opción es la <Link to="https://jackery.com.ar/PRODUCTOS/Jackery%20Explorer%201000" className='uline' target='_blank'><span style={{ color: '#FF5000' }}>Explorer 1000</span></Link>.
                    </p>
                    <p>
                        Gracias a su gran capacidad de 1002.2 Wh, puede cargar simultáneamente hasta 8 dispositivos:
                    </p>
                    <ul>
                        <li><strong>Sierra eléctrica</strong>: en todo proyecto, no puede faltar la sierra: con ella puedes cortar diferentes tipos de materiales como la madera, el metal o el plástico, según el tipo de sierra que tengas. Con la Explorer 1000, puedes cargar tu Bosch PST 800 y usarla de manera continua por 1,5 horas.</li>
                        <li><strong>Taladro</strong>: ideal para perforar agujeros en diferentes materiales que necesites. Si cargas tu Dewalt DCD777C2 con la Explorer, puedes usarla de manera continua por 2,6 horas.</li>
                        <li><strong>Lijadora excéntrica</strong>: esta herramienta te permite obtener acabados finos en madera, metal o pintura. Si usas la Explorer 1000, puedes cargar tu Bosch PEX 400 AE y usarla por 2 horas.</li>
                        <li><strong>Destornillador eléctrico</strong>: te sirve para ensamblar muebles, instalar aparatos o arreglar algún mueble. Con la estación de energía eléctrica, puedes cargar tu Bosch IXO 7 y usarla por 5 horas.</li>
                        <li><strong>Compresor de pintura</strong>: si tienes que pintar paredes, muebles o autos, te conviene tener a mano tu compresor de pintura. Con la Explorer, podrás cargar tu compresor de aerografía Airum Mini 20 y usarlo de manera continua por 5 horas.</li>
                        <li><strong>Otros dispositivos</strong>: la Explorer te permite cargar una Macbook Pro13 (8 cargas) y un Iphone 13 (100 cargas), por si quieres escuchar música mientras trabajas en tu proyecto o quieres seguir un tutorial en Youtube.</li>
                    </ul>
                    <p>
                        En definitiva, <strong>Jackery es el aliado perfecto para tus proyectos</strong>. Ocupate de tus proyectos sin depender de alargadores ni enchufes: ten verdadera independencia energética con Jackery.
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
export default EnergiaPortatilParaTuProyecto;