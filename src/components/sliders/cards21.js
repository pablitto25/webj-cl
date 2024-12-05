import React from 'react';
import imagen3 from './assests/scouts-cards.png'
import './cards7.css';

function Cards21() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Cómo la energía portátil facilita las salidas scout</h5>
              <p class="card-text">La energía portátil es la aliada que necesitas para organizar una salida scout inolvidable. Entra a la nota y enterate más.</p>
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

export default Cards21