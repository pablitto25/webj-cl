
import React from 'react';
import './banner.css';
import banner from './assest/Energia-portatil-en-el-agro.jpg';

const Banner26 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
          <div className='BannerTex'>
            <h1 className='BannerTexTitle'>Algunas aplicaciones de energía portátil en el agro</h1>
            <h2 className='BannerTexSubTitle'>Conoce cómo la energía portátil puede revolucionar el agro. Entra a la nota y entérate más.</h2>
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

export default Banner26;

