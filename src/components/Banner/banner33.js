
import React from 'react';
import './banner.css';
import banner from './assest/Sismos_Header.png';

const Banner33 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
          <div className='BannerTex'>
            <h1 className='BannerTexTitle'>Sismo: qué hacer si te quedaste sin luz</h1>
            <h2 className='BannerTexSubTitle'>¿Se te cortó la luz por un sismo? La energía portátil de Jackery es la solución que te hace falta. Entra a la nota y entérate más.</h2>
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

