import React, { Component } from 'react'
import ServiceClubs from '../services/ServiceClubs'
import { NavLink } from 'react-router-dom'

// Componente que muestra el listado de apuestas
export default class ApuestasComponent extends Component {

    // Estado inicial: un array vacío donde se guardarán las apuestas
    state = {
        apuestas: []
    }

    deleteApuestas = (idApuesta) => {
        this.service.deleteApuestas(idApuesta).then((result) => {
            this.loadApuestas();
        })
    }

    // Creamos una instancia del servicio para trabajar con las apuestas
    service = new ServiceClubs()

    // Función asíncrona que obtiene las apuestas del servicio
    obtenerApuestas = async () => {
        // Esperamos a que el servicio devuelva los datos
        let datos = await this.service.obtenerApuestas()

        // Guardamos las apuestas obtenidas en el estado
        this.setState({
            apuestas: datos
        })
    }

    // Método que se ejecuta automáticamente cuando se monta el componente
    componentDidMount = async () => {
        // Obtenemos las apuestas al cargar la página
        await this.obtenerApuestas()
    }

    // Método que genera la interfaz del componente
    render() {
        return (
            <div style={{
                // Organizamos los elementos en una columna
                display: "flex",
                flexDirection: "column",
                gap: "10px", // Espacio entre los elementos
                padding: "20px", // Espacio interior del contenedor
                alignItems: "center", // Centramos los elementos horizontalmente
                textAlign: "center" // Centramos el texto
            }}>

                {/* Enlace para acceder al formulario de creación de apuestas */}
                <NavLink
                    to="/insert/apuesta"
                    className="btn"
                    style={{
                        backgroundColor: "#FFC5D3",
                        border: "1px solid #FFC5D3",
                        padding: "10px 25px",
                        marginBottom: "10px"
                    }}
                >
                    Añadir Apuesta
                </NavLink>

                {/* Título principal de la página */}
                <h1>Apuestas</h1>

                {/* Mostramos los equipos del partido */}
                <h2>Local: Real Madrid | Visitante: Barcelona</h2>

                {/* Tabla que muestra las apuestas registradas */}
                <table className='table table-bordered'>

                    {/* Cabecera de la tabla */}
                    <thead
                        style={{
                            border: "2px solid #9b0024",
                            textAlign: "center",
                            width: "80%",
                            margin: "0 auto"
                        }}
                    >
                        <tr>
                            {/* Columnas de la tabla */}
                            <th style={{ backgroundColor: "#f4a6b8", color: "#702d43" }}>Usuario</th>
                            <th style={{ backgroundColor: "#f4a6b8", color: "#702d43" }}>Resultado</th>
                            <th style={{ backgroundColor: "#f4a6b8", color: "#702d43" }}>Fecha</th>
                            <th style={{ backgroundColor: "#f4a6b8", color: "#702d43" }}>Eliminar</th>
                        </tr>
                    </thead>

                    {/* Cuerpo de la tabla */}
                    <tbody>
                        {
                            // Recorremos el array de apuestas para mostrar cada una
                            this.state.apuestas.map((apuesta, index) => {
                                return (
                                    // Creamos una fila por cada apuesta
                                    <tr key={index}>
                                        {/* Mostramos el usuario que realizó la apuesta */}
                                        <td style={{ backgroundColor: "#f4a6b8", color: "#702d43" }}>{apuesta.usuario}</td>

                                        {/* Mostramos el resultado apostado */}
                                        <td style={{ backgroundColor: "#f4a6b8", color: "#702d43" }}>{apuesta.resultado}</td>

                                        {/* Mostramos la fecha de la apuesta */}
                                        <td style={{ backgroundColor: "#f4a6b8", color: "#702d43" }}>{apuesta.fecha}</td>

                                        <td style={{ backgroundColor: "#f4a6b8", color: "#702d43" }}>

                                            <NavLink
                                                className="btn"
                                                to="/delete/apuesta"
                                                state={{
                                                    idApuesta: apuesta.idApuesta,
                                                    usuario: apuesta.usuario,
                                                    resultado: apuesta.resultado,
                                                    fecha: apuesta.fecha
                                                }}
                                                style={{
                                                    backgroundColor: "#e88eaa",
                                                    color: "#ffffff",
                                                    fontWeight: "bold",
                                                    padding: "12px",
                                                    borderRadius: "10px",
                                                    border: "none"
                                                }}
                                            >
                                                Delete
                                            </NavLink>

                                        </td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}
