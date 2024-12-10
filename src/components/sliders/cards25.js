import React from 'react';
import imagen3 from './assests/SalidaEscolarCard.jpg'
import './cards7.css';

function Cards25() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Salida escolar: cómo la energía portátil facilita su organización</h5>
              <p class="card-text">¿Tienes que planear una salida escolar al aire libre y no sabés cómo asegurarte de que no falte la energía? Entra a la nota y enterate la solución que tenemos para vos.</p>
              <div class=" text-body-secondary">
                Fecha: 10/12/24
              </div>
            </div>
          </div>
        }
      </div>
    </div>

  )
}

export default Cards25