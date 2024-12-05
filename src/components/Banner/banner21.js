
import React from 'react';
import './banner.css';
import banner from './assest/scouts.jpg';

const Banner21 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
          <div className='BannerTex'>
            <h1 className='BannerTexTitle'>Cómo la energía portátil facilita las salidas scout</h1>
            <h2 className='BannerTexSubTitle'>La energía portátil es la aliada que necesitas para organizar una salida scout inolvidable. Entra a la nota y enterate más.</h2>
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

export default Banner21;

