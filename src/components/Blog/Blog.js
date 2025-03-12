import React, { useState } from 'react';
import './Blog.css';
import Banner12 from '../Banner/banner12';
import Cards from '../sliders/cards';
import Cards2 from '../sliders/cards2';
import Cards3 from '../sliders/cards3';
import Cards4 from '../sliders/cards4';
import Cards5 from '../sliders/cards5';
import Footer from '../Footer/Footer';
import Cards6 from '../sliders/cards6';
import Cards7 from '../sliders/cards7';
import Cards8 from '../sliders/cards8';
import { Helmet } from 'react-helmet';
import Cards9 from '../sliders/cards9';
import Cards10 from '../sliders/cards10';
import Cards11 from '../sliders/cards11';
import Cards12 from '../sliders/cards12';
import Cards13 from '../sliders/cards13';
import Cards14 from '../sliders/cards14';
import Cards15 from '../sliders/cards15';
import Cards16 from '../sliders/cards16';
import Cards17 from '../sliders/cards17';
import Cards18 from '../sliders/cards18';
import Cards19 from '../sliders/cards19';
import Cards20 from '../sliders/cards20';
import Cards21 from '../sliders/cards21';
import Cards22 from '../sliders/cards22';
import { Link } from 'react-router-dom';
import Cards23 from '../sliders/cards23';
import Cards24 from '../sliders/cards24';
import Cards25 from '../sliders/cards25';
import Cards26 from '../sliders/cards26';
import Cards27 from '../sliders/cards27';
import Cards28 from '../sliders/cards28';
import Cards29 from '../sliders/cards29';
import Cards30 from '../sliders/cards30';
import Cards31 from '../sliders/cards31';
import Cards32 from '../sliders/cards32';
import Cards33 from '../sliders/cards33';
import Cards34 from '../sliders/cards34';



const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('TODOS'); // Estado para la categoría seleccionada

  return (
    <div className='conteiner'>
      <Helmet>
        <title>Blogs</title>
      </Helmet>
      <div className='bannerConteiner'>
        <Banner12 />
      </div>
      <div className='conteinerBlog'>
        <div className="menuSlider">
          <p className="menuSliderTex" onClick={() => setSelectedCategory('TODOS')}>TODOS</p>
          <p className="menuSliderTex" onClick={() => setSelectedCategory('CONSEJOS DE COMPRA')}>CONSEJOS DE COMPRA</p>
          <p className="menuSliderTex" onClick={() => setSelectedCategory('ESTILO DE VIDA')}>ESTILO DE VIDA</p>
          <p className="menuSliderTex" onClick={() => setSelectedCategory('EMERGENCIA')}>EMERGENCIA</p>
          <p className="menuSliderTex" onClick={() => setSelectedCategory('CONOCIMIENTO')}>CONOCIMIENTO</p>
          <p className="menuSliderTex" onClick={() => setSelectedCategory('NOVEDADES')}>NOVEDADES</p>
        </div>
        <section className='conteinerCards'>
          {selectedCategory === 'TODOS' && (
            <>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Home office: energía portátil para hacer home en cualquier lugar</p>
                <Cards34 />
                <Link className="myButton mb-3" rel="noopener noreferrer" to={"/blog/home-office-energia-portatil-para-hacer-home-en-cualquier-lugar"}>EXPLORAR MÁS</Link>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">¿Cortes de luz? Descubre cómo un generador solar puede ser tu solución </p>
                <Cards33 />
                <Link className="myButton mb-3" rel="noopener noreferrer" to={"/blog/cortes-de-luz-descubre-como-un-generador-solar-puede-ser-tu-solucion"}>EXPLORAR MÁS</Link>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Sismo: qué hacer si te quedaste sin luz</p>
                <Cards32 />
                <Link className="myButton mb-3" rel="noopener noreferrer" to={"/blog/sismos-que-hacer-si-te-quedaste-sin-luz"}>EXPLORAR MÁS</Link>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Energía portátil para tu proyecto</p>
                <Cards31 />
                <Link className="myButton mb-3" rel="noopener noreferrer" to={"/blog/energia-portatil-para-tu-proyecto"}>EXPLORAR MÁS</Link>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Energía portátil para unas vacaciones de verano sin límites</p>
                <Cards30 />
                <Link className="myButton mb-3" rel="noopener noreferrer" to={"/blog/energia-portatil-para-unas-vacaciones-de-verano-sin-limites"}>EXPLORAR MÁS</Link>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Corte de luz: qué hacer ante temperaturas extremas</p>
                <Cards29 />
                <Link className="myButton mb-3" rel="noopener noreferrer" to={"/blog/cortes-de-luz-que-hacer-ante-temperaturas-extremas"}>EXPLORAR MÁS</Link>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Energía portátil para una Navidad inolvidable</p>
                <Cards28 />
                <Link className="myButton mb-3" rel="noopener noreferrer" to={"/blog/energia-portatil-para-una-navidad-inolvidable"}>EXPLORAR MÁS</Link>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Cómo el uso de la energía portátil revoluciona el trabajo en la minería</p>
                <Cards27 />
                <Link className="myButton mb-3" rel="noopener noreferrer" to={"/blog/como-el-uso-de-la-energia-portatil-revoluciona-el-trabajo-en-la-mineria"}>EXPLORAR MÁS</Link>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Algunas aplicaciones de energía portátil en el agro</p>
                <Cards26 />
                <Link className="myButton mb-3" rel="noopener noreferrer" to={"/blog/algunas-aplicaciones-de-energia-portatil-en-el-agro"}>EXPLORAR MÁS</Link>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Salida escolar: cómo la energía portátil facilita su organización</p>
                <Cards25 />
                <Link className="myButton mb-3" rel="noopener noreferrer" to={"/blog/salidar-escolar-como-la-energia-portatil-facilita-su-organizacion"}>EXPLORAR MÁS</Link>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Generadores solares vs generadores tradicionales</p>
                <Cards24 />
                <Link className="myButton mb-3" rel="noopener noreferrer" to={"/blog/generador-solar-vs-generadores-tradicionales"}>EXPLORAR MÁS</Link>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Qué hacer si se corta la luz y necesitás trabajar</p>
                <Cards23 />
                <Link className="myButton mb-3" rel="noopener noreferrer" to={"/blog/que-hacer-si-se-corta-la-luz-y-necesitas-trabajar"}>EXPLORAR MÁS</Link>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Cómo prepararse para un corte de luz prolongado</p>
                <Cards22 />
                <Link className="myButton mb-3" rel="noopener noreferrer" to={"/blog/como-prepararse-para-un-corte-de-luz-prolongado"}>EXPLORAR MÁS</Link>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Cómo la energía portátil facilita las salidas scout</p>
                <Cards21 />
                <Link className="myButton mb-3" rel="noopener noreferrer" to={"/blog/como-la-energia-portatil-facilita-las-salidas-scout"}>EXPLORAR MÁS</Link>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Cómo construir una casita para perros de manera rápida y fácil</p>
                <Cards20 />
                <Link className="myButton mb-3" rel="noopener noreferrer" to={"/blog/como-construir-una-casita-para-perros-de-manera-rapida-y-facil"}>EXPLORAR MÁS</Link>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Cómo trabajar sin conexión eléctrica para un rodaje en exteriores</p>
                <Cards19 />
                <a href="/blog/como-trabajar-sin-conexion-electrica-para-un-rodaje-en-exteriores" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Mejora la experiencia de tus clientes como guía de turismo</p>
                <Cards18 />
                <a href="/blog/mejorar-la-experiencia-de-tus-clientes-como-guia-de-turismo" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Cómo prepararse para los cortes de luz previstos para este verano</p>
                <Cards17 />
                <a href="/blog/como-prepararse-para-los-cortes-de-luz-previstos-para-este-verano" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Mejora la experiencia de tus clientes como guía de turismo</p>
                <Cards16 />
                <a href="/blog/mejora-la-experiencia-de-tus-clientes-como-guia-de-turismo" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">¿Qué son las estaciones de energía?</p>
                <Cards15 />
                <a href="/blog/que-son-las-estaciones-de-energia" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">10 razones por las que tienes que comprarla</p>
                <Cards14 />
                <a href="/blog/jackery-explorer-500-10-razones-por-las-que-tienes-que-comprarla" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">¿Qué son los generadores solares?</p>
                <Cards13 />
                <a href="/blog/que-son-los-generadores-solares" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Expo San Juan minera 2024: Jackery estuvo presente</p>
                <Cards12 />
                <a href="/Blog/expo-san-juan-minera-2024-jackery-estuvo-presente" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Jackery generador solar 240: produce tu propia energía al aire libre</p>
                <Cards11 />
                <a href="/Blog/jackery-generador-solar-240-produce-tu-propia-energia-al-aire-libre" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Jackery, la solución multifuncional</p>
                <Cards10 />
                <a href="/Blog/jackery-la-solucion-multifuncional" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Panel Jackery Solarsaga 100w: 5 beneficios de implementarlo en tu vida</p>
                <Cards9 />
                <a href="/Blog/panel-jackery-solarsaga-100w-5-beneficios-de-implementarlo-en-tu-vida" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Jackery Explorer 240: la mejor estación de energía portátil para tus vacaciones</p>
                <Cards8 />
                <a href="/Blog/jackery-explorer-240-la-mejor-estacion-de-energia-portatil-para-tus-vacaciones" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">TECNOLOGÍA VERDE, TECNOLOGÍA JACKERY</p>
                <Cards7 />
                <a href="/Blog/tecnologia-verde-tecnologia-jackery" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">DÍA DE LA TIERRA</p>
                <Cards6 />
                <a href="/Blog/dia-de-la-tierra" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="consejosDeCompra" className="cardSlider container mb-3">
                <p className="texSlider">CONSEJOS DE COMPRA</p>
                <Cards />
                <a href="/BLOG/TecladoSolar" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="estiloDeVida" className="cardSlider container mb-3">
                <p className="texSlider">ESTILO DE VIDA</p>
                <Cards2 />
                <a href="/Blog/mejores-cargadores-solares-para-excursiones" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="emergencia" className="cardSlider container mb-3">
                <p className="texSlider">EMERGENCIA</p>
                <Cards3 />
                <a href="/Blog/corte-de-energia" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="conocimiento" className="cardSlider container mb-3">
                <p className="texSlider">CONOCIMIENTO</p>
                <Cards4 />
                <a href="/Blog/la-guia-definitiva-de-tipos-de-paneles-solares" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">NOVEDADES</p>
                <Cards5 />
                <a href="/Blog/jackery-presenta-el-revolucionario-generador-solar" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
            </>
          )}
          {/* Agrega el resto de tus cards de blog aquí y filtra según selectedCategory */}

          {selectedCategory === 'CONSEJOS DE COMPRA' && (
            <div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">10 razones por las que tienes que comprarla</p>
                <Cards14 />
                <a href="/blog/jackery-explorer-500-10-razones-por-las-que-tienes-que-comprarla" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Jackery generador solar 240: produce tu propia energía al aire libre</p>
                <Cards11 />
                <a href="/Blog/jackery-generador-solar-240-produce-tu-propia-energia-al-aire-libre" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Panel Jackery Solarsaga 100w: 5 beneficios de implementarlo en tu vida</p>
                <Cards9 />
                <a href="/Blog/panel-jackery-solarsaga-100w-5-beneficios-de-implementarlo-en-tu-vida" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="consejosDeCompra" className="cardSlider container mb-3">
                <p className="texSlider">CONSEJOS DE COMPRA</p>
                <Cards />
                <a href="/BLOG/TecladoSolar" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Jackery Explorer 240: la mejor estación de energía portátil para tus vacaciones</p>
                <Cards8 />
                <a href="/Blog/jackery-explorer-240-la-mejor-estacion-de-energia-portatil-para-tus-vacaciones" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
            </div>
          )}

          {selectedCategory === 'ESTILO DE VIDA' && (
            <div id="estiloDeVida" className="cardSlider container mb-3">
              <p className="texSlider">ESTILO DE VIDA</p>
              <Cards2 />
              <a href="/Blog/mejores-cargadores-solares-para-excursiones" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
            </div>
          )}

          {selectedCategory === 'EMERGENCIA' && (
            <>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Cómo prepararse para los cortes de luz previstos para este verano</p>
                <Cards17 />
                <a href="/blog/como-prepararse-para-los-cortes-de-luz-previstos-para-este-verano" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="emergencia" className="cardSlider container mb-3">
                <p className="texSlider">EMERGENCIA</p>
                <Cards3 />
                <a href="/Blog/corte-de-energia" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
            </>
          )}

          {selectedCategory === 'CONOCIMIENTO' && (
            <div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">¿Qué son las estaciones de energía?</p>
                <Cards15 />
                <a href="/blog/que-son-las-estaciones-de-energia" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Expo San Juan minera 2024: Jackery estuvo presente</p>
                <Cards13 />
                <a href="/Blog/expo-san-juan-minera-2024-jackery-estuvo-presente" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">Jackery, la solución multifuncional</p>
                <Cards10 />
                <a href="/Blog/jackery-la-solucion-multifuncional" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="conocimiento" className="cardSlider container mb-3">
                <p className="texSlider">CONOCIMIENTO</p>
                <Cards4 />
                <a href="/Blog/la-guia-definitiva-de-tipos-de-paneles-solares" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
            </div>
          )}

          {selectedCategory === 'NOVEDADES' && (
            <div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">¿Qué son los generadores solares?</p>
                <Cards13 />
                <a href="/Blog/expo-san-juan-minera-2024-jackery-estuvo-presente" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">NOVEDADES</p>
                <Cards5 />
                <a href="/Blog/jackery-presenta-el-revolucionario-generador-solar" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
              <div id="novedades" className="cardSlider container mb-3">
                <p className="texSlider">TECNOLOGÍA VERDE, TECNOLOGÍA JACKERY</p>
                <Cards7 />
                <a href="/Blog/tecnologia-verde-tecnologia-jackery" className="myButton mb-3" rel="noopener noreferrer">EXPLORAR MÁS</a>
              </div>
            </div>
          )}

        </section>
      </div>
      <footer className='conteinerFooter'>
        <Footer />
      </footer>
    </div>
  );
};

export default Blog;
