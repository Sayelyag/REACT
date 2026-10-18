
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import ServiceClubs from '../services/ServiceClubs'

export default class JugadoresEquipoComponent extends Component {

    // Servicio para consultar los jugadores de la API.
    service = new ServiceClubs()

    // Guardamos los jugadores recibidos.
    state = {
        jugadores: [],
        cargando: true
    }

    // Al entrar en la página, cargamos los jugadores del equipo.
    componentDidMount = async () => {
        await this.loadJugadores()
    }

    // Si cambia el equipo de la URL, volvemos a cargar sus jugadores.
    componentDidUpdate = async (oldProps) => {
        if (oldProps.idEquipo !== this.props.idEquipo) {
            await this.loadJugadores()
        }
    }

    // Obtiene los jugadores del equipo seleccionado.
    loadJugadores = async () => {
        this.setState({
            cargando: true,
            jugadores: []
        })

        try {
            let datos = await this.service.obtenerJugadoresClub(
                this.props.idEquipo
            )

            this.setState({
                jugadores: datos,
                cargando: false
            })
        } catch (error) {
            console.log('Error al cargar los jugadores:', error)

            this.setState({
                jugadores: [],
                cargando: false
            })
        }
    }

    render() {
        return (
            <div style={{
                margin: '30px auto',
                width: '90%',
                textAlign: 'center'
            }}>

                <h1>Jugadores del equipo</h1>

                {/* Volvemos a la tarjeta del equipo seleccionado. */}
                <NavLink to={'/equipo/' + this.props.idEquipo}>
                    <button style={estiloBoton}>
                        Volver
                    </button>
                </NavLink>

                {/* Mensaje mientras se reciben los datos. */}
                {this.state.cargando && (
                    <h3>Cargando jugadores...</h3>
                )}

                {/* Tabla de jugadores del equipo. */}
                {!this.state.cargando && (
                    <table style={{
                        borderCollapse: 'collapse',
                        margin: '25px auto',
                        width: '100%'
                    }}>

                        <thead>
                            <tr>
                                <th style={estiloCabecera}>Nombre</th>
                                <th style={estiloCabecera}>Imagen</th>
                                <th style={estiloCabecera}>Detalles</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.jugadores.map((jugador, index) => (
                                <tr key={jugador.idJugador ?? index}>

                                    {/* Nombre del jugador. */}
                                    <td style={estiloCelda}>
                                        {jugador.nombre}
                                    </td>

                                    {/* Imagen del jugador. */}
                                    <td style={estiloCelda}>
                                        <img
                                            src={jugador.imagen}
                                            alt={jugador.nombre}
                                            style={{
                                                width: '90px',
                                                height: '90px',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    </td>

                                    {/* Enlace a la página de detalles. */}
                                    <td style={estiloCelda}>
                                        <NavLink
                                            to={
                                                '/equipo/' +
                                                this.props.idEquipo +
                                                '/jugadores/' +
                                                (jugador.idJugador ?? index)
                                            }
                                            state={{ jugador: jugador }}
                                        >
                                            <button style={estiloBoton}>
                                                Ver detalles
                                            </button>
                                        </NavLink>
                                    </td>

                                </tr>
                            ))}

                            {/* Mensaje si el equipo no tiene jugadores. */}
                            {this.state.jugadores.length === 0 &&
                                !this.state.cargando && (
                                    <tr>
                                        <td
                                            colSpan="3"
                                            style={estiloCelda}
                                        >
                                            No hay jugadores para mostrar.
                                        </td>
                                    </tr>
                                )}
                        </tbody>

                    </table>
                )}

            </div>
        )
    }
}

// Estilo de las cabeceras.
const estiloCabecera = {
    backgroundColor: '#FFC5D3',
    padding: '12px',
    border: '1px solid #D3D3D3'
}

// Estilo de las celdas.
const estiloCelda = {
    padding: '12px',
    border: '1px solid #D3D3D3'
}

// Estilo de los botones.
const estiloBoton = {
    backgroundColor: '#D97891',
    color: 'white',
    padding: '9px 16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
}
