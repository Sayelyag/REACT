import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from './Global'
import axios from 'axios'

export default class MenuComponent extends Component {

    // URL base de la API
    url = Global.urlApiHospitales

    // Estado inicial
    state = {
        hospitales: []
    }

    // Cargar los hospitales desde la API
    loadHospitales = () => {
        let request = 'api/hospitales'

        console.log(this.url + request)

        axios.get(this.url + request)
            .then((response) => {
                console.log('Hospitales recibidos:', response.data)

                this.setState({
                    hospitales: response.data
                })
            })
            .catch((error) => {
                console.log('Error al cargar los hospitales:', error)
            })
    }

    // Ejecutar la petición al montar el componente
    componentDidMount() {
        this.loadHospitales()
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    {/* Nombre de la aplicación */}
                    <NavLink className="navbar-brand" to="/">
                        Hospitales
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
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/doctores/22">
                                    Doctores
                                </NavLink>
                            </li>

                            {/* Enlace para ver todos los hospitales */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/hospitales">
                                    Lista de hospitales
                                </NavLink>
                            </li>

                            {/* Enlace para crear un hospital */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/createhospital">
                                    Crear hospital
                                </NavLink>
                            </li>

                            {/* Desplegable de hospitales */}
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Doctores por hospital
                                </a>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/ejemplos">
                                    Service Component
                                </NavLink>
                            </li>

                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {this.state.hospitales.map((hospital) => (
                                        <li key={hospital.idHospital}>
                                            <NavLink
                                                className="dropdown-item"
                                                to={'/doctores/' + hospital.idHospital}
                                            >
                                                {hospital.nombre}
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