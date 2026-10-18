import React, { Component } from 'react'
import ServiceClubs from '../services/ServiceClubs'

export default class JugadoresComponent extends Component {

    // Creamos el servicio para realizar peticiones a la API.
    service = new ServiceClubs()

    // Referencia al input donde escribimos el nombre.
    inputNombre = React.createRef()

    // Referencia al desplegable para seleccionar un equipo.
    selectEquipo = React.createRef()

    // STATE: almacena los datos que utiliza el componente.
    state = {
        jugadores: [],         // Lista de jugadores encontrados.
        equipos: [],           // Lista de equipos de la API.
        buscarRealizado: false // Controla cuándo aparece la tabla.
    }

    // CARGAR EQUIPOS:
    // Obtiene los equipos de la API para mostrarlos en el desplegable.
    loadEquipos = async () => {
        let datos = await this.service.obtenerClubs()

        console.log("EQUIPOS RECIBIDOS:", datos)

        // Guardamos los equipos recibidos en el state.
        this.setState({
            equipos: datos
        })
    }

    // BUSCAR POR NOMBRE:
    // Se ejecuta cuando enviamos el formulario del nombre.
    buscarNombre = async (event) => {

        // Evita que el formulario recargue la página.
        event.preventDefault()

        // Obtenemos el nombre escrito en el input.
        let nombre = this.inputNombre.current.value

        // Llamamos al servicio que busca jugadores por nombre.
        let datos = await this.service.obtenerJugadoresNombre(nombre)

        console.log("HEMOS BUSCADO POR NOMBRE")

        // Guardamos los jugadores y mostramos la tabla.
        this.setState({
            jugadores: datos,
            buscarRealizado: true
        })
    }

    // BUSCAR POR EQUIPO:
    // Se ejecuta cuando enviamos el formulario del desplegable.
    buscarEquipo = async (event) => {

        // Evita que el formulario recargue la página.
        event.preventDefault()

        // Obtenemos el ID del equipo seleccionado.
        // IMPORTANTE: la API utiliza idEquipo, no id.
        let id = this.selectEquipo.current.value

        console.log("ID DEL EQUIPO:", id)

        // Comprobamos que se haya seleccionado un equipo.
        if (id !== '') {

            // Obtenemos los jugadores pertenecientes a ese equipo.
            let datos = await this.service.obtenerJugadoresClub(id)

            console.log("HEMOS BUSCADO POR EQUIPO")

            // Actualizamos la lista y mostramos la tabla.
            this.setState({
                jugadores: datos,
                buscarRealizado: true
            })
        }
    }

    // COMPONENTDIDMOUNT:
    // Se ejecuta cuando el componente aparece por primera vez.
    componentDidMount = async () => {

        // Cargamos los equipos para rellenar el desplegable.
        await this.loadEquipos()

        // Si recibimos la propiedad equipos, buscamos por ese equipo.
        if (this.props.equipos != null) {

            let datos = await this.service.obtenerJugadoresClub(
                this.props.equipos
            )

            this.setState({
                jugadores: datos,
                buscarRealizado: true
            })

        // Si recibimos coincidencias, buscamos por nombre.
        } else if (this.props.coincidencias != null) {

            let datos = await this.service.obtenerJugadoresNombre(
                this.props.coincidencias
            )

            this.setState({
                jugadores: datos,
                buscarRealizado: true
            })
        }
    }

    // COMPONENTDIDUPDATE:
    // Se ejecuta cuando cambian las propiedades o el state.
    componentDidUpdate = async (oldProps) => {

        // Si cambia el equipo recibido por props, volvemos a buscar.
        if (
            this.props.equipos != null &&
            oldProps.equipos !== this.props.equipos
        ) {

            let datos = await this.service.obtenerJugadoresClub(
                this.props.equipos
            )

            this.setState({
                jugadores: datos,
                buscarRealizado: true
            })

        // Si cambia el nombre recibido por props, buscamos de nuevo.
        } else if (
            this.props.coincidencias != null &&
            oldProps.coincidencias !== this.props.coincidencias
        ) {

            let datos = await this.service.obtenerJugadoresNombre(
                this.props.coincidencias
            )

            this.setState({
                jugadores: datos,
                buscarRealizado: true
            })
        }
    }

    // RENDER:
    // Define los formularios y la tabla que aparecen en pantalla.
    render() {
        return (
            <div style={{
                marginTop: '20px',
                textAlign: 'center',
                fontWeight: 'bold'
            }}>

                <h1>Buscar jugadores</h1>

                {/* FORMULARIO PARA BUSCAR POR NOMBRE */}
                <form onSubmit={this.buscarNombre}>

                    <label>Introduce jugador: </label>

                    <input
                        type="text"
                        ref={this.inputNombre}
                        placeholder="Nombre del jugador"
                    />

                    <button
                        type="submit"
                        style={estiloBoton}
                    >
                        Buscar
                    </button>

                </form>

                <br />

                {/* FORMULARIO PARA BUSCAR POR EQUIPO */}
                <form onSubmit={this.buscarEquipo}>

                    <label>Seleccione equipo: </label>

                    <select
                        ref={this.selectEquipo}
                        defaultValue=""
                    >
                        <option value="">
                            Seleccione un equipo
                        </option>

                        {/* Recorremos los equipos para crear las opciones. */}
                        {this.state.equipos.map((equipo) => (
                            <option
                                key={equipo.idEquipo}
                                value={equipo.idEquipo}
                            >
                                {equipo.nombre}
                            </option>
                        ))}
                    </select>

                    <button
                        type="submit"
                        style={estiloBoton}
                    >
                        Buscar
                    </button>

                </form>

                {/* TABLA DE JUGADORES:
                    Solo aparece después de realizar una búsqueda. */}
                {this.state.buscarRealizado && (

                    <table style={{
                        borderCollapse: 'collapse',
                        margin: '30px auto',
                        width: '80%'
                    }}>

                        <thead>
                            <tr>
                                <th style={estiloCabecera}>Imagen</th>
                                <th style={estiloCabecera}>Nombre</th>
                                <th style={estiloCabecera}>Posición</th>
                                <th style={estiloCabecera}>País</th>
                            </tr>
                        </thead>

                        <tbody>

                            {/* Recorremos los jugadores para crear las filas. */}
                            {this.state.jugadores.map((jugador, index) => (
                                <tr key={jugador.idJugador ?? index}>

                                    <td style={estiloCelda}>
                                        <img
                                            src={jugador.imagen}
                                            alt={jugador.nombre}
                                            style={{ width: '100px' }}
                                        />
                                    </td>

                                    <td style={estiloCelda}>
                                        {jugador.nombre}
                                    </td>

                                    <td style={estiloCelda}>
                                        {jugador.posicion}
                                    </td>

                                    <td style={estiloCelda}>
                                        {jugador.pais}
                                    </td>

                                </tr>
                            ))}

                        </tbody>

                    </table>
                )}

            </div>
        )
    }
}

// ESTILOS DE LA TABLA Y LOS BOTONES.

// Estilo de las cabeceras de la tabla.
const estiloCabecera = {
    backgroundColor: '#FFC5D3',
    padding: '10px',
    border: '1px solid #D3D3D3'
}

// Estilo de las celdas de la tabla.
const estiloCelda = {
    padding: '10px',
    border: '1px solid #D3D3D3'
}

// Estilo compartido por ambos botones.
const estiloBoton = {
    backgroundColor: '#D97891',
    color: 'white',
    marginLeft: '10px',
    padding: '8px 15px',
    border: 'none',
    borderRadius: '5px'
}