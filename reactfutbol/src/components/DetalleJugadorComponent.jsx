
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class DetalleJugadorComponent extends Component {

    render() {

        // Recuperamos los datos del jugador seleccionado.
        let jugador = this.props.jugador

        // Si no recibimos el jugador, mostramos un mensaje.
        if (!jugador) {
            return (
                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    <h2>No se han encontrado los datos del jugador.</h2>

                    <NavLink
                        to={
                            '/equipo/' +
                            this.props.idEquipo +
                            '/jugadores'
                        }
                    >
                        <button style={estiloBoton}>
                            Volver
                        </button>
                    </NavLink>
                </div>
            )
        }

        return (
            <div style={{
                margin: '30px auto',
                maxWidth: '600px',
                padding: '20px',
                textAlign: 'center'
            }}>

                <h1>Detalles del jugador</h1>

                {/* Tarjeta con la información individual. */}
                <div style={{
                    border: '1px solid #D3D3D3',
                    borderRadius: '12px',
                    padding: '25px',
                    marginTop: '20px',
                    backgroundColor: '#FFF5F8'
                }}>

                    {/* Imagen del jugador. */}
                    <img
                        src={jugador.imagen}
                        alt={jugador.nombre}
                        style={{
                            width: '160px',
                            height: '160px',
                            objectFit: 'contain',
                            marginBottom: '15px'
                        }}
                    />

                    {/* Nombre del jugador. */}
                    <h2>{jugador.nombre}</h2>

                    {/* Posición del jugador. */}
                    <p>
                        <strong>Posición:</strong>{' '}
                        {jugador.posicion || 'No disponible'}
                    </p>

                    {/* Fecha de nacimiento. */}
                    <p>
                        <strong>Fecha de nacimiento:</strong>{' '}
                        {
                            jugador.fechaNacimiento ??
                            jugador.fecha_nacimiento ??
                            jugador.fechaNac ??
                            'No disponible'
                        }
                    </p>

                    {/* País de origen del jugador. */}
                    <p>
                        <strong>País de origen:</strong>{' '}
                        {jugador.pais || 'No disponible'}
                    </p>

                </div>

                {/* Volvemos a la tabla del mismo equipo. */}
                <NavLink
                    to={
                        '/equipo/' +
                        this.props.idEquipo +
                        '/jugadores'
                    }
                >
                    <button style={estiloBoton}>
                        Volver
                    </button>
                </NavLink>

            </div>
        )
    }
}

// Estilo del botón Volver.
const estiloBoton = {
    backgroundColor: '#D97891',
    color: 'white',
    padding: '10px 18px',
    border: 'none',
    borderRadius: '5px',
    marginTop: '20px',
    cursor: 'pointer'
}