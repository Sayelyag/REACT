import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import SumarNumeros from './components/SumarNumeros/SumarNumeros';
import SaludoPadre from './components/SaludoPH/SaludoPadre';
import MatematicasPadre from './components/Matematicas/MatematicasPadre';
import Contador from './components/Contador';
import Car from './components/Car';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Car marca="Audi" modelo="Q8" velocidadmaxima="240" aceleracion="25" />
    <Car marca="Pontiac" modelo="Firebird" velocidadmaxima="340" aceleracion="33" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
