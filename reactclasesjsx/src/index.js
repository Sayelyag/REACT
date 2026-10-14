import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contador from './components/Contador';
import DibujosComplejosArray from './components/Dibujos/DibujosComplejosArray';
import DibujosComplejosRender from './components/Dibujos/DibujosComplejosRender';
import PadreDeportes from './components/Deportes/PadreDeportes';
import HijoDeportes from './components/Deportes/HijoDeportes';
import PadreNumeros from './components/Numeros/PadreNumeros';
import HijoNuemros from './components/Numeros/HijoNumeros';
import Comics from './components/Comics';
import Comic from './components/Comic';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Comics />
    <Comic />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
