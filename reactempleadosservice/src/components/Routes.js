import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'

import MenuComponent from './MenuComponents'
import HomeComponent from './HomeComponents'
import EmpleadosOficio from './EmpleadosOficio'

export default class RoutesComponent extends Component {

    render() {

        // Recogemos el oficio que llega desde la URL
        function EmpleadosElement() {
            let { oficio } = useParams()

            return (
                <EmpleadosOficio oficio={oficio} />
            )
        }

        return (
            <BrowserRouter>

                {/* Menú de navegación */}
                <MenuComponent />

                {/* Definición de las rutas */}
                <Routes>

                    {/* Página principal */}
                    <Route
                        path="/"
                        element={<HomeComponent />}
                    />

                    {/* Empleados filtrados por oficio */}
                    <Route
                        path="/empleados/:oficio"
                        element={<EmpleadosElement />}
                    />

                </Routes>

            </BrowserRouter>
        )
    }
}