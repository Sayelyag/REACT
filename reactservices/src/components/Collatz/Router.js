import React, { Component } from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import HomeComponent from './HomeComponent'
import Collatz from './Collatz'
import NotFoundComponent from './NotFoundComponent'
import MenuComponent from './MenuComponent'

export default class Router extends Component {

    render() {
        return (
            <BrowserRouter>

                {/* Menú de navegación */}
                <MenuComponent />

                {/* Rutas de la aplicación */}
                <Routes>

                    <Route
                        path="/"
                        element={<HomeComponent />}
                    />

                    <Route
                        path="/Collatz"
                        element={<Collatz />}
                    />

                    <Route
                        path="*"
                        element={<NotFoundComponent />}
                    />

                </Routes>

            </BrowserRouter>
        )
    }
}