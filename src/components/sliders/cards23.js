import React from 'react';
import imagen3 from './assests/card23.png'
import './cards7.css';

function Cards23() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Qué hacer si se corta la luz y necesitás trabajar</h5>
              <p class="card-text">¿Cuántas veces sufriste cortes de luz en plena jornada laboral y no sabías cómo seguir trabajando? Entra a la nota y enterate la solución energética que tenemos para vos.</p>
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

export default Cards23