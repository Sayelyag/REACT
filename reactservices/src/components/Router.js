import React, { Component } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    useParams
} from 'react-router-dom'

import HomeComponents from './HomeComponents'
import TablaMultiplicar from './TablaMultiplicar'
import NotFoundComponent from './NotFoundComponent'
import MenuComponent from './MenuComponent'

// Componente que recoge el número de la URL
function TablasMultiplicarElement() {
    let { minumero } = useParams()

    return (
        <TablaMultiplicar numero={minumero} />
    )
}

export default class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                {/* El menú debe estar dentro del Router */}
                <MenuComponent />

                <Routes>
                    <Route
                        path="/"
                        element={<HomeComponents />}
                    />

                    <Route
                        path="/TablaMultiplicar"
                        element={<TablaMultiplicar numero="14" />}
                    />

                    <Route
                        path="/tabla/:minumero"
                        element={<TablasMultiplicarElement />}
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