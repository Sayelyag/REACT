import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ComponentServiceCustomers from './components/ComponentServiceCustomers';
import ComponentServiceSuppliers from './components/ComponentServiceSuppliers';
import Global from './Global';
import EmpleadosDepartamentos from './components/EmpleadosDepartamentos';
import EmpleadosOficio from './components/EmpleadosOficio';
import MenuComponent from './components/MenuComponent';
// import Router from './components/Collatz/Router';
import Router from './components/Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ComponentServiceCustomers />
    <hr/>
    <ComponentServiceSuppliers />
    <hr/>
    <EmpleadosDepartamentos />
    <hr/>
    <EmpleadosOficio />
    <hr/> */}
    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
