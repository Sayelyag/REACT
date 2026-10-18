import React, { Component } from 'react'
import Ace from './Ace.jpg'
import { NavLink } from 'react-router-dom'
import ServiceClubs from '../services/ServiceClubs'

export default class MenuComponents extends Component {

    // Creamos el servicio para consultar los equipos de la API.
    service = new ServiceClubs()

    // Guardamos los equipos que recibimos de la API.
    state = {
        equipos: []
    }

    // Se ejecuta al cargar el menú.
    // Pedimos los equipos y los guardamos en el state.
    componentDidMount = async () => {
        let datos = await this.service.obtenerClubs()

        this.setState({
            equipos: datos
        })
    }

    render() {
        return (
            <nav
                className="navbar navbar-expand-lg"
                style={{ backgroundColor: "#fde3f6" }}
                data-bs-theme="light"
            >
                <div className="container-fluid">

                    {/* LOGO Y NOMBRE DE LA APLICACIÓN */}
                    <NavLink
                        className="navbar-brand d-flex align-items-center"
                        to="/"
                    >
                        <img
                            src={Ace}
                            alt="Ace"
                            width="45"
                            height="45"
                            className="rounded-circle me-2"
                        />
                        Apuestas
                    </NavLink>

                    {/* BOTÓN DEL MENÚ PARA PANTALLAS PEQUEÑAS */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Abrir menú"
                        style={{
                            backgroundColor: "#e88eaa",
                            color: "#ffffff",
                            fontWeight: "bold",
                            padding: "12px",
                            borderRadius: "10px",
                            border: "none"
                        }}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* ENLACES DEL MENÚ */}
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            {/* ENLACE A HOME */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Home
                                </NavLink>
                            </li>

                            {/* ENLACE A APUESTAS */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Apuestas">
                                    Apuestas
                                </NavLink>
                            </li>

                            {/* ENLACE A JUGADORES */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Jugadores">
                                    Jugadores
                                </NavLink>
                            </li>

                            {/* DESPLEGABLE DE EQUIPOS */}
                            <li className="nav-item dropdown">

                                {/* Botón que abre la lista de equipos */}
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Equipos
                                </a>

                                {/* Opciones creadas a partir de los equipos de la API */}
                                <ul className="dropdown-menu">

                                    {this.state.equipos.map((equipo) => (
                                        <li key={equipo.idEquipo}>
                                            <NavLink
                                                className="dropdown-item"
                                                to={"/equipo/" + equipo.idEquipo}
                                            >
                                                {equipo.nombre}
                                            </NavLink>
                                        </li>
                                    ))}

                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}