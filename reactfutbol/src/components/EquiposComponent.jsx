
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import ServiceClubs from '../services/ServiceClubs'

export default class EquiposComponent extends Component {

  // Creamos el servicio para consultar los equipos de la API.
  service = new ServiceClubs()

  // Guardamos el equipo seleccionado.
  state = {
    equipo: null,
    cargando: true
  }

  // Se ejecuta cuando se abre la página del equipo.
  componentDidMount = async () => {
    await this.loadEquipo()
  }

  // Si cambia el ID de la URL, cargamos el nuevo equipo.
  componentDidUpdate = async (oldProps) => {
    if (oldProps.idEquipo !== this.props.idEquipo) {
      await this.loadEquipo()
    }
  }

  // Cargamos todos los equipos y buscamos el seleccionado.
  loadEquipo = async () => {
    this.setState({
      cargando: true,
      equipo: null
    })

    try {
      // Obtenemos los equipos de la API.
      let datos = await this.service.obtenerClubs()

      // Buscamos el equipo cuyo idEquipo coincide con la URL.
      let equipoEncontrado = datos.find(
        equipo =>
          String(equipo.idEquipo) === String(this.props.idEquipo)
      )

      // Guardamos el equipo encontrado en el state.
      this.setState({
        equipo: equipoEncontrado || null,
        cargando: false
      })

    } catch (error) {
      console.log('Error al cargar el equipo:', error)

      this.setState({
        equipo: null,
        cargando: false
      })
    }
  }

  render() {

    // Mientras llegan los datos de la API, mostramos un mensaje.
    if (this.state.cargando) {
      return <h2 style={{ textAlign: 'center' }}>
        Cargando equipo...
      </h2>
    }

    // Si no encontramos el equipo, mostramos un mensaje.
    if (this.state.equipo == null) {
      return (
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <h2>No se ha encontrado el equipo</h2>

          <NavLink to="/">
            <button style={estiloBoton}>
              Volver a Inicio
            </button>
          </NavLink>
        </div>
      )
    }

    // Guardamos el equipo para acceder a sus propiedades.
    let equipo = this.state.equipo

    return (
      <div style={{
        margin: '30px auto',
        maxWidth: '750px',
        textAlign: 'center',
        padding: '20px'
      }}>

        {/* Nombre del equipo */}
        <h1>{equipo.nombre}</h1>

        {/* Tarjeta con la información del equipo */}
        <div style={{
          border: '1px solid #D3D3D3',
          borderRadius: '12px',
          padding: '20px',
          marginTop: '20px',
          backgroundColor: '#FFF5F8'
        }}>

          {/* Escudo o imagen del equipo */}
          <img
            src={equipo.imagen}
            alt={equipo.nombre}
            style={{
              width: '180px',
              height: '180px',
              objectFit: 'contain',
              marginBottom: '20px'
            }}
          />

          {/* Descripción del equipo */}
          <p style={{
            textAlign: 'left',
            whiteSpace: 'pre-line',
            lineHeight: '1.6',
            fontWeight: 'normal'
          }}>
            {equipo.descripcion}
          </p>

          {/* Número de Champions del equipo */}
          <p>
            Champions ganadas: {equipo.champions}
          </p>

          {/* Enlace a la web oficial del equipo */}
          <p>
            <a
              href={equipo.web}
              target="_blank"
              rel="noreferrer"
            >
              Web oficial
            </a>
          </p>

        </div>

        {/* Botones para navegar por la aplicación */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          flexWrap: 'wrap',
          marginTop: '25px'
        }}>

          {/* Volvemos a la página principal */}
          <NavLink to="/">
            <button style={estiloBoton}>
              Volver a Inicio
            </button>
          </NavLink>

          {/* Enviamos el ID del equipo al buscador de jugadores */}
          <NavLink to={'/equipo/' + equipo.idEquipo + '/jugadores'}>
            <button style={estiloBoton}>
              Ver jugadores
            </button>
          </NavLink>
        </div>
      </div>
    )
  }
}

// Estilo compartido por los botones.
const estiloBoton = {
  backgroundColor: '#D97891',
  color: 'white',
  padding: '10px 18px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
}