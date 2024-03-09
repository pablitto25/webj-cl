import React from 'react';
import './cardHomeNews.css'; 


const CardHomeNew = () => {
  return (
    <div className='featuredProductContainer'> 
      <div className='conteinerBodyText'>
        <p className='homeText'>Nuevos ingresos 2024</p>
        <h1 className='homeTextTitle'>Generador Solar</h1>
        <p className='homeText'>Energía verde y renovable para exploración</p>
        <p className='homeText'>al aire libre y respaldo de emergencia.</p>
      </div>
      <a href="/PRODUCTOS/Jackery%20Generador%20Solar%201000%20-%202%20paneles" className="myButtonHome featuredProductButton" rel="noopener noreferrer"> 
        EXPLORAR MÁS
      </a>
    </div>
  );
};

export default CardHomeNew ;