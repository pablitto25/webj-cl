import React from 'react';
import './cardHomeNews.css'; 


const CardHomeNew = () => {
  return (
    <div className='featuredProductContainer'> 
      <div className='conteinerBodyText'>
        {/* <p className='homeText'>Nuevos ingresos 2024</p> */}
        <h1 className='homeTextTitle'>Jackery, la solución multifuncional</h1>
        <span className='homeText'>Descubre todo lo que puedes hacer con los</span>
        <span className='homeText'>productos de Jackery. Animate a inventar tu propio estilo de vida.</span>
      </div>
      <a href="/PRODUCTOS/Jackery%20Generador%20Solar%201000%20-%202%20paneles" className="myButtonHome featuredProductButton" rel="noopener noreferrer"> 
        EXPLORAR MÁS
      </a>
    </div>
  );
};

export default CardHomeNew ;