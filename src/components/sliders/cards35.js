import React from 'react';
import imagen3 from './assests/4x4_Card.png'
import './cards7.css';

function Cards35() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Los 5 lugares más elegidos para hacer 4x4 en Chile</h5>
              <p class="card-text">¿Sabes cuáles fueron los 5 lugares más elegidos para hacer 4x4 en nuestro país? Entra a la nota y entérate más.</p>
              <div class=" text-body-secondary">
                Fecha: 10/03/25
              </div>
            </div>
          </div>
        }
      </div>
    </div>

  )
}

export default Cards35