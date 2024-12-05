import React from 'react';
import imagen3 from './assests/corte-de-luz-card.jpg'
import './cards7.css';

function Cards22() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Cómo prepararse para un corte de luz prolongado</h5>
              <p class="card-text">Se acercan los cortes de luz previstos para este verano, ¿y no sabes cómo prepararte? No te preocupes, entra a la nota y lee las recomendaciones que te traemos.</p>
              <div class=" text-body-secondary">
                Fecha: 06/12/24
              </div>
            </div>
          </div>
        }
      </div>
    </div>

  )
}

export default Cards22