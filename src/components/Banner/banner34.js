
import React from 'react';
import './banner.css';
import banner from './assest/CorteDeLuzTuSolucion_Header.png';

const Banner33 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
          <div className='BannerTex'>
            <h1 className='BannerTexTitle'>¿Cortes de luz? Descubre cómo un generador solar puede ser tu solución</h1>
            <h2 className='BannerTexSubTitle'>¿Cansado de los cortes de luz en el verano? Entra a la nota y entérate la solución que tenemos para ti.</h2>
          </div>
        </div>
        <div className="stripe-1"></div>
      </div>
      <div className="half-width-second">
        <img src={banner} alt="Banner" className="banner-image fluid-img" />
      </div>
      <div className="div3">
        <div className="stripe-2"></div>
        <div className="stripe-8">
        </div>
        <div className="stripe-2"></div>
      </div>
    </div>
  );
};

export default Banner33;

