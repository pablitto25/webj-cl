
import Contact from './components/Contact/Contact';
import HOME from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Blog from './components/Blog/Blog';
import PRODUCTOS from './components/Products/Jackery-Explorer-240.js';
import PRODUCTOS2 from './components/Products/Jackery-Explorer-500.js';
import PRODUCTOS3 from './components/Products/Jackery-Explorer-1000.js';
import PRODUCTOS4 from './components/Products/Jackery-SolarSaga-100.js';
import PRODUCTOS5 from './components/Products/Jackery-Generador-Solar-1000-2-paneles.js';
import PRODUCTOS6 from './components/Products/Jackery-Generador-Solar-1000.js';
import PRODUCTOS7 from './components/Products/Jackery-Generador-Solar-500.js';
import PRODUCTOS8 from './components/Products/Jackery-Generador-Solar-240.js';
import TecladoSolar from './components/Notas/conocimiento/TecladoSolar.js';
import MejoresCargadores from './components/Notas/conocimiento/MejoresCargadores.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CorteDeEnergia from './components/Notas/conocimiento/CorteDeEnergia.js';
import LaGuiaDefinitiva from './components/Notas/conocimiento/LaGuiaDefinitiva.js';
import JackeryPresenta from './components/Notas/conocimiento/JackeryPresenta.js';
import DiaDeLaTierra from './components/Notas/conocimiento/DiaDeLaTierra.js';
import TecnologiaVerde from './components/Notas/conocimiento/TecnologiaVerde.js';
import JackeryExplorer240 from './components/Notas/conocimiento/JackeryExplorer240.js';
import JackerySolarSaga100 from './components/Notas/conocimiento/JackerySolarSaga100.js';
import JackeryLaSolucionMultifuncional from './components/Notas/conocimiento/JackeryLaSolucionMultifuncional.js';
import JackerGeneradorSolar240 from './components/Notas/conocimiento/JackerGeneradorSolar240.js';
import JackeryExpoMinera from './components/Notas/conocimiento/JackeryExpoMinera.js';
import JackeryGeneradoresSolares from './components/Notas/conocimiento/JackeryGeneradoresSolares.js';
import JackeryRazones from './components/Notas/conocimiento/JackeryRazones.js';
import JackeryEstacionesDeEnergia from './components/Notas/conocimiento/JackeryEstacionesDeEnergia.js';
import MejorarLaExperienciaDeTusClientes from './components/Notas/conocimiento/MejorarLaExperienciaDeTusClientes.js';



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
          <Route path="/Blog/dia-de-la-tierra" element={<DiaDeLaTierra/>} />
          <Route path="/Blog/tecnologia-verde-tecnologia-jackery" element={<TecnologiaVerde/>} />
          <Route path="/Blog/jackery-explorer-240-la-mejor-estacion-de-energia-portatil-para-tus-vacaciones" element={<JackeryExplorer240/>} />
          <Route path="/Blog/panel-jackery-solarsaga-100w-5-beneficios-de-implementarlo-en-tu-vida" element={<JackerySolarSaga100/>} />
          <Route path="/Blog/jackery-la-solucion-multifuncional" element={<JackeryLaSolucionMultifuncional/>} />
          <Route path="/Blog/jackery-generador-solar-240-produce-tu-propia-energia-al-aire-libre" element={<JackerGeneradorSolar240/>} />
          <Route path="/Blog/expo-san-juan-minera-2024-jackery-estuvo-presente" element={<JackeryExpoMinera/>} />
          <Route path="/blog/que-son-los-generadores-solares" element={<JackeryGeneradoresSolares/>} />
          <Route path="/blog/jackery-explorer-500-10-razones-por-las-que-tienes-que-comprarla" element={<JackeryRazones/>} />
          <Route path="/blog/que-son-las-estaciones-de-energia" element={<JackeryEstacionesDeEnergia/>} />
          <Route path="/blog/mejora-la-experiencia-de-tus-clientes-como-guia-de-turismo" element={<MejorarLaExperienciaDeTusClientes/>} />
          <Route path="/CONTACTO" element={<Contact/>} />
          </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;



