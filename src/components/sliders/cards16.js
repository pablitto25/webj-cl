import React from 'react';
import imagen3 from './assests/MejorarLaExperienciaDeTusClientes.jpg'
import './cards7.css';

function Cards16() {
  return (
    <div className='conteiner'>
      <div className=' row justify-content-center '>
        {
          <div class="card border-0 mb-3" style={{ width: '18rem' }}>
            <img src={imagen3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-secondary">Mejora la experiencia de tus clientes como guía de turismo</h5>
              <p class="card-text">¿Buscas nuevas formas para asegurar una experiencia inolvidable a tus clientes? Entra a la nota y entérate cuál es la solución que tenemos para ofrecerte.</p>
              <div class=" text-body-secondary">
                Fecha: 16/09/24
              </div>
            </div>
          </div>
        }




      </div>
    </div>

  )
}

export default Cards16