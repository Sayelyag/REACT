import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import ServiceEmpleados from '../services/ServiceEmpleados'

export default class MenuComponent extends Component {

    // Creamos el objeto del servicio
    service = new ServiceEmpleados()

    // Estado inicial
    state = {
        oficios: []
    }

    // Cargar los oficios desde el servicio
    loadOficios = () => {
        this.service.getOficios()
            .then((result) => {
                console.log('Oficios recibidos:', result)

                this.setState({
                    oficios: result
                })
            })
            .catch((error) => {
                console.log('Error al cargar los oficios:', error)
            })
    }

    // Ejecutar la petición al montar el componente
    componentDidMount() {
        this.loadOficios()
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    {/* Nombre de la aplicación */}
                    <NavLink className="navbar-brand" to="/">
                        Empleados
                    </NavLink>

                    {/* Botón del menú para móviles */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Opciones de navegación */}
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            {/* Enlace al Home */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Home
                                </NavLink>
                            </li>

                            {/* Desplegable de oficios */}
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Empleados por oficio
                                </a>

                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdown"
                                >
                                    {
                                        this.state.oficios.map((oficio, index) => (
                                            <li key={index}>
                                                <NavLink
                                                    className="dropdown-item"
                                                    to={'/empleados/' + encodeURIComponent(oficio)}
                                                >
                                                    {oficio}
                                                </NavLink>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}