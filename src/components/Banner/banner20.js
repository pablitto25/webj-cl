
import React from 'react';
import './banner.css';
import banner from './assest/Como-construir-una-casita-para-perros-de-manera-rapida-y-facil.cfdb6abaf17e8c92f7db.jpg';

const Banner20 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
          <div className='BannerTex'>
            <h1 className='BannerTexTitle'>Cómo construir una casita para perros de manera rápida y fácil</h1>
            <h2 className='BannerTexSubTitle'>¿Quieres construir una casita para tu perro? Te enseñamos a cómo hacerlo en esta nota.</h2>
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

export default Banner20;

