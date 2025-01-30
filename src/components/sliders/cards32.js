import React from 'react';
import imagen3 from './assests/Sismos_Card.webp'
import './cards7.css';

function Cards32() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Sismo: qué hacer si te quedaste sin luz</h5>
              <p class="card-text">¿Se te cortó la luz por un sismo? La energía portátil de Jackery es la solución que te hace falta. Entra a la nota y entérate más.</p>
              <div class=" text-body-secondary">
                Fecha: 30/01/25
              </div>
            </div>
          </div>
        }
      </div>
    </div>

  )
}

export default Cards32