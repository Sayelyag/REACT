
import React, { Component } from 'react'
import {BrowserRouter, Route, Routes, useParams, useLocation} from 'react-router-dom'

import MenuComponent from './MenuComponent'
import HomeComponent from './HomeComponent'
import ApuestasComponent from './ApuestasComponent'
import CreateApuestas from './CreateApuestas'
import JugadoresComponent from './JugadoresComponent'
import EquiposComponent from './EquiposComponent'
import JugadoresEquipoComponent from './JugadoresEquipoComponent'
import DetalleJugadorComponent from './DetalleJugadorComponent'
import DeleteComponent from './DeleteComponent'

// Recoge el ID del equipo de la dirección y muestra su tarjeta.
function EquipoRoute() {
    const { id } = useParams()

    return <EquiposComponent idEquipo={id} />
}

// Muestra la tabla de jugadores del equipo seleccionado.
function JugadoresEquipoRoute() {
    const { idEquipo } = useParams()

    return <JugadoresEquipoComponent idEquipo={idEquipo} />
}

// Recoge el jugador seleccionado y muestra sus detalles.
function DetalleJugadorRoute() {
    const { idEquipo } = useParams()
    const location = useLocation()

    return (
        <DetalleJugadorComponent
            idEquipo={idEquipo}
            jugador={location.state?.jugador}
        />
    )
}

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                {/* Menú superior. */}
                <MenuComponent />
                <Routes>
                    {/* Página principal. */}
                    <Route
                        path="/"
                        element={<HomeComponent />}
                    />

                    {/* Página de apuestas. */}
                    <Route
                        path="/Apuestas"
                        element={<ApuestasComponent />}
                    />

                    {/* Crear una apuesta. */}
                    <Route
                        path="/insert/apuesta"
                        element={<CreateApuestas />}
                    />

                    {/* Buscador general de jugadores. */}
                    <Route
                        path="/Jugadores"
                        element={<JugadoresComponent />}
                    />

                    {/* Tarjeta del equipo seleccionado. */}
                    <Route
                        path="/equipo/:id"
                        element={<EquipoRoute />}
                    />

                    {/* Tabla de jugadores de un equipo. */}
                    <Route
                        path="/equipo/:idEquipo/jugadores"
                        element={<JugadoresEquipoRoute />}
                    />

                    {/* Detalles de un jugador concreto. */}
                    <Route
                        path="/equipo/:idEquipo/jugadores/:idJugador"
                        element={<DetalleJugadorRoute />}
                    />
                    <Route
                        path="/delete/apuesta"
                        element={<DeleteComponent />}
                    />
                </Routes>
            </BrowserRouter>
        )
    }
}