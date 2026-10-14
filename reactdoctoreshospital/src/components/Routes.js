import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import HomeComponent from './HomeComponent'
import DoctoresComponent from './DoctoresComponent'
import HospitalesComponent from './HospitalesComponent'
import CreateHospital from './CreateHospital'
import EjemploServiceComponent from './EjemploServiceComponent'

export default class RouterComponent extends Component {

    render() {

        function DoctoresElement() {
            let { idhospital } = useParams()

            return (
                <DoctoresComponent idhospital={idhospital} />
            )
        }

        return (
            <BrowserRouter>

                {/* Menú de navegación */}
                <MenuComponent />

                {/* Definición de las rutas */}
                <Routes>
                    <Route path="/" element={<HomeComponent />}/>
                    <Route path="/doctores/:idhospital" element={<DoctoresElement />}/>
                    <Route path="/createhospital" element={<CreateHospital />}/>
                    <Route path="/hospitales" element={<HospitalesComponent />}/>
                    <Route path="/ejemplos" element={<EjemploServiceComponent />}/>
                </Routes>

            </BrowserRouter>
        )
    }
}