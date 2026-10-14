// Importamos React y Component para crear un componente de clase.
import React, { Component } from 'react'

// Importamos axios para realizar peticiones HTTP a la API.
import axios from 'axios'

// Importamos Global, donde tenemos guardada la URL base de la API.
import Global from '../Global'

export default class EmpleadosOficio extends Component {

    // Creamos una referencia para acceder al select
    // y saber qué oficio ha seleccionado el usuario.
    cajaOficio = React.createRef();

    // Guardamos la URL base de la API de empleados.
    urlEmpleados = Global.urlApiEmpleados;

    // Método que busca los empleados del oficio seleccionado.
    buscarEmpleados = (event) => {

        // Evitamos que el formulario recargue la página.
        event.preventDefault();

        // Obtenemos el valor seleccionado en el select.
        // Ejemplo: "ANALISTA".
        let oficio = this.cajaOficio.current.value;

        // Construimos la parte de la URL que indica
        // qué endpoint de la API queremos consultar.
        // Ejemplo: api/Empleados/EmpleadosOficio/ANALISTA.
        let request = "api/Empleados/EmpleadosOficio/" + oficio;

        // Realizamos una petición GET a la API.
        // Combinamos la URL base con el endpoint.
        axios.get(this.urlEmpleados + request).then((response) => {

            // Mostramos un mensaje en la consola cuando llega la respuesta.
            console.log("Leyendo empleados");

            // Guardamos los empleados recibidos en el estado.
            // response.data contiene los datos devueltos por la API.
            // React actualizará la tabla automáticamente.
            this.setState({
                empleados: response.data
            });
        });
    }

    // Estado inicial del componente.
    state = {

        // Array vacío donde guardaremos los empleados recibidos de la API.
        empleados: [],

        // Array con los oficios que aparecerán en el desplegable.
        oficios: [
            "ANALISTA",
            "VENDEDOR",
            "DIRECTOR",
            "EMPLEADO",
            "PRESIDENTE"
        ]
    }

    // render() define lo que se muestra en pantalla.
    render() {
        return (
            <div>

                {/* Título de la página con texto rosa coral claro. */}
                <h1 style={{ color: "lightcoral" }}>
                    Empleados por Oficio
                </h1>

                {/* Formulario que contiene el select y el botón de búsqueda. */}
                <form>

                    {/* Texto que explica qué debe seleccionar el usuario. */}
                    <label>Seleccione oficio: </label>

                    {/* Desplegable conectado a la referencia cajaOficio. */}
                    <select ref={this.cajaOficio}>

                        {/* Recorremos el array de oficios para crear las opciones. */}
                        {this.state.oficios.map((oficio, index) => {
                            return (

                                // Cada opción representa un oficio.
                                // key ayuda a React a identificar cada elemento.
                                // value es el valor que leeremos al seleccionar.
                                <option key={index} value={oficio}>
                                    {oficio}
                                </option>
                            )
                        })}

                    </select>

                    {/* Al pulsar el botón se ejecuta buscarEmpleados. */}
                    <button
                        type="button"
                        style={{
                            backgroundColor: "white",
                            borderRadius: "8px",
                            padding: "5px"
                        }}
                        onClick={this.buscarEmpleados}
                    >
                        Buscar empleados
                    </button>

                </form>

                {/* Añadimos un salto de línea antes de la tabla. */}
                <br />

                {/* Tabla que ocupa todo el ancho disponible. */}
                <table style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
                }}>

                    {/* Cabecera de la tabla. */}
                    <thead>
                        <tr>

                            {/* Primera columna: apellido del empleado. */}
                            <th style={{ color: "grey" }}>Apellido</th>

                            {/* Segunda columna: oficio del empleado. */}
                            <th style={{ color: "grey" }}>Oficio</th>

                            {/* Tercera columna: salario del empleado. */}
                            <th style={{ color: "grey" }}>Salario</th>

                        </tr>
                    </thead>

                    {/* Cuerpo de la tabla, donde aparecerán los resultados. */}
                    <tbody>

                        {/* Recorremos el array de empleados del estado. */}
                        {this.state.empleados.map((emp, index) => {
                            return (

                                // Creamos una fila por cada empleado recibido.
                                <tr key={index}>

                                    {/* Mostramos el apellido del empleado. */}
                                    <td style={{ color: "lightpink" }}>
                                        {emp.apellido}
                                    </td>

                                    {/* Mostramos su oficio. */}
                                    <td style={{ color: "lightpink" }}>
                                        {emp.oficio}
                                    </td>

                                    {/* Mostramos su salario. */}
                                    <td style={{ color: "lightpink" }}>
                                        {emp.salario}
                                    </td>

                                </tr>
                            )
                        })}

                    </tbody>
                </table>

            </div>
        )
    }
}