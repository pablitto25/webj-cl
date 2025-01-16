
import React from 'react';
import './banner.css';
import banner from './assest/vacaciones_en_chile_hero.png';

const Banner31 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
          <div className='BannerTex'>
            <h1 className='BannerTexTitle'>Los 5 lugares más elegidos para vacacionar en Chile</h1>
            <h2 className='BannerTexSubTitle'>¿Quieres vacacionar y no sabes a dónde ir? Te traemos los lugares más elegidos en nuestro país. Entra a la nota y enterate más.</h2>
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

export default Banner31;

