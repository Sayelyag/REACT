import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Cine from './Components/Cine';
import Home from './Components/Home';
import Musica from './Components/Musica';
import Router from './Components/Router';
import MenuRutas from './Components/MenuRutas';
import FormSimple from './Components/FormSimple';
import Collatz from './Components/Collatz';
import TablasMultiplicar from './Components/TablasMultiplicar';
import TablaMultiplicarV2 from './Components/TablaMultiplicarV2';
import SeleccionMultiple from './Components/SeleccionMultiple';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Index principal</h1>
    <MenuRutas />
    <hr/> 
    <Router /> 
    <hr/> 
    <FormSimple /> 
    <Collatz /> 
     <h2>Pie de pagina</h2>
    <hr/>
    <TablasMultiplicar />
    <hr/>
    <TablaMultiplicarV2 />
    <hr/>
    <SeleccionMultiple/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
