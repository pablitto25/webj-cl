import React from 'react';
import imagen3 from './assests/SolarVsGenerador_Card.webp'
import './cards7.css';

function Cards24() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Generadores solares vs generadores tradicionales</h5>
              <p class="card-text">Se avecinan cortes de luz programados para este verano. ¿Y no sabes qué tipo de generador te conviene comprar? Entra a la nota y enterate cuál es la mejor opción energética para vos.</p>
              <div class=" text-body-secondary">
                Fecha: 09/12/24
              </div>
            </div>
          </div>
        }
      </div>
    </div>

  )
}

export default Cards24