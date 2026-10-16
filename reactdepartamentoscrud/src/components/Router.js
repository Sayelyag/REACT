import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import MenuComponents from './MenuComponents'
import HomeComponents from './HomeComponents'
import CreateDepartamento from './CreateDepartamento'
import UpdateDepartamentos from './UpdateDepartamentos'
import DeleteComponent from './DeleteComponent'
import { useLocation } from 'react-router-dom'
import HospitalesMultiples from './HospitalesMultiples'

export default class Router extends Component {
    render() {
        function UpdateDepartamentoElement() {
            let { id, nombre, localidad } = useParams()

            return (
                <UpdateDepartamentos
                    id={id}
                    nombre={nombre}
                    localidad={localidad}
                />
            )
        }
        return (
            <BrowserRouter>
                <MenuComponents />
                <Routes>
                    <Route
                        path="/"
                        element={<HomeComponents />}
                    />

                    <Route
                        path="/CreateDepartamento"
                        element={<CreateDepartamento />}
                    />
                    <Route
                        path="/update/:id/:nombre/:localidad"
                        element={<UpdateDepartamentoElement />}
                    />
                    <Route 
                        path='/HospitalesMultiples' 
                        element={<HospitalesMultiples/>}
                    />
                </Routes>
            </BrowserRouter>
        )
    }
}