
import React from 'react';
import './banner.css';
import banner from './assest/MejorarLaExperienciaDeTusClientes.jpg';

const Banner15 = () => {
  return (
    <div className="banner-container">
      <div className="div1">
        <div className="stripe-1"></div>
        <div className="stripe-8">
          <div className='BannerTex'>
            <h1 className='BannerTexTitle'>Mejora la experiencia de tus clientes como guía de turismo</h1>
            <h2 className='BannerTexSubTitle'>¿Buscas nuevas formas para asegurar una experiencia inolvidable a tus clientes? Entra a la nota y entérate cuál es la solución que tenemos para ofrecerte.</h2>
          </div>
        </div>
        <div className="stripe-1"></div>
      </div>
      <div className="half-width">
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

export default Banner15;

