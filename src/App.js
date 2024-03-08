
import Contact from './components/Contact/Contact';
import HOME from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Blog from './components/Blog/Blog';
import PRODUCTOS from './components/Products/Products';
import PRODUCTOS2 from './components/Products/Products2.js';
import PRODUCTOS3 from './components/Products/Products3.js';
import PRODUCTOS4 from './components/Products/Products4.js';
import PRODUCTOS5 from './components/Products/Products5.js';
import PRODUCTOS6 from './components/Products/Products6.js';
import PRODUCTOS7 from './components/Products/Products7.js';
import PRODUCTOS8 from './components/Products/Products8.js';
import TecladoSolar from './components/Notas/conocimiento/TecladoSolar.js';
import MejoresCargadores from './components/Notas/conocimiento/MejoresCargadores.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CorteDeEnergia from './components/Notas/conocimiento/CorteDeEnergia.js';
import LaGuiaDefinitiva from './components/Notas/conocimiento/LaGuiaDefinitiva.js';
import JackeryPresenta from './components/Notas/conocimiento/JackeryPresenta.js';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <NavBar/>
          <Routes>
          <Route path="/" element={<HOME/>} />
          <Route path="/HOME" element={<HOME/>} />
          <Route path="/PRODUCTOS" element={<PRODUCTOS/>} />
          <Route path="/PRODUCTOS/Jackery Explorer 240" element={<PRODUCTOS/>} />
          <Route path="/PRODUCTOS/Jackery Explorer 500" element={<PRODUCTOS2/>} />
          <Route path="/PRODUCTOS/Jackery Explorer 1000" element={<PRODUCTOS3/>} />
          <Route path="/PRODUCTOS/Jackery SolarSaga 100" element={<PRODUCTOS4/>} />
          <Route path="/PRODUCTOS/Jackery Generador Solar 1000 - 2 paneles" element={<PRODUCTOS5/>} />
          <Route path="/PRODUCTOS/Jackery Generador Solar 1000" element={<PRODUCTOS6/>} />
          <Route path="/PRODUCTOS/Jackery Generador Solar 500" element={<PRODUCTOS7/>} />
          <Route path="/PRODUCTOS/Jackery Generador Solar 240" element={<PRODUCTOS8/>} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/Blog/TecladoSolar" element={<TecladoSolar/>} />
          <Route path="/Blog/mejores-cargadores-solares-para-excursiones" element={<MejoresCargadores/>} />
          <Route path="/Blog/corte-de-energia" element={<CorteDeEnergia/>} />
          <Route path="/Blog/la-guia-definitiva-de-tipos-de-paneles-solares" element={<LaGuiaDefinitiva/>} />
          <Route path="/Blog/jackery-presenta-el-revolucionario-generador-solar" element={<JackeryPresenta/>} />
          <Route path="/CONTACTO" element={<Contact/>} />
          </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;



