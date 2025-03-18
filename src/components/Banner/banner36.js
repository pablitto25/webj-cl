
import React from 'react';
import './banner.css';
import banner from './assest/4x4_Header.png';

const Banner36 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
          <div className='BannerTex'>
            <h1 className='BannerTexTitle'>Los 5 lugares más elegidos para hacer 4x4 en Chile</h1>
            <h2 className='BannerTexSubTitle'>¿Sabes cuáles fueron los 5 lugares más elegidos para hacer 4x4 en nuestro país? Entra a la nota y entérate más.</h2>
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

export default Banner36;

