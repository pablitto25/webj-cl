/* import React, { useState } from 'react'; */
import icon1 from './product7/Telefono.svg'
import icon2 from './product7/Televisor.svg'
import icon3 from './product7/Respirador CPAP.svg'
import icon4 from './product7/Calefactor.svg'
import icon5 from './product7/Cafetera.svg'
import icon6 from './product7/Tostadora.svg'
import './cardIcons.css';

const CardIcons8 = () => {
    /* const [selectedBanner, setSelectedBanner] = useState('bannerProducts1');
  
    const handleTabClick = (banner) => {
      setSelectedBanner(banner);
    }; */
  
    return (
      <div>
        <div className='bannerProducts'>
          
            <div className='bannerProducts1 active'>
              <div className='bannerProductsSlide'>
                <img src={icon1} alt='icons' className='bannerProductsIcons' />
                <p className='bannerProductsText'>Teléfono (18 W)</p>
                <p className='bannerProductsText2'>22,6 cargas</p>
              </div>
              <div className='bannerProductsSlide'>
                <img src={icon2} alt='icons' className='bannerProductsIcons' />
                <p className='bannerProductsText'>TV (60 W)</p>
                <p className='bannerProductsText2'>7,5 h</p>
              </div>
              <div className='bannerProductsSlide'>
                <img src={icon3} alt='icons' className='bannerProductsIcons' /> 
                <p className='bannerProductsText'>Equipo CPAP (60 W)</p>
                <p className='bannerProductsText2'>7,3 h</p>
              </div>
              <div className='bannerProductsSlide'>
                <img src={icon4} alt='icons' className='bannerProductsIcons' />
                <p className='bannerProductsText'>Calefactor (350 W)</p>
                <p className='bannerProductsText2'>1,5 h</p>
              </div>
              <div className='bannerProductsSlide'>
               <img src={icon5} alt='icons' className='bannerProductsIcons' />
                <p className='bannerProductsText'>Cafetera (550 W)</p>
                <p className='bannerProductsText2'>0,8 h</p>
              </div>
              <div className='bannerProductsSlide'>
                <img src={icon6} alt='icons' className='bannerProductsIcons' />
                <p className='bannerProductsText'>Tostadora (650 W)</p>
                <p className='bannerProductsText2'>0,8 h</p>
              </div>
            </div>
          
        
        </div>
        {/* <div className='tabs'>
          <button className='tabsButton' onClick={() => handleTabClick('bannerProducts1')}></button>
          <button className='tabsButton' onClick={() => handleTabClick('bannerProducts2')}></button>
        </div> */}
      </div>
    );
  };
  
export default CardIcons8;







