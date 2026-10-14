// Importamos React y Component para crear un componente de clase.
import React, { Component } from 'react'

// Importamos axios para realizar peticiones a las APIs.
import axios from 'axios'

// Importamos Global, que contiene las URL base de las APIs.
import Global from '../Global'

export default class EmpleadosDepartamentos extends Component {

    // Creamos una referencia para acceder al select
    // y obtener el identificador del departamento seleccionado.
    selectIdDepartamento = React.createRef();

    // Guardamos la URL base de la API de empleados.
    urlEmpleados = Global.urlApiEmpleados;

    // Guardamos la URL base de la API de departamentos.
    urlDepartamentos = Global.urlApiDepartamentos;

    // Método para buscar los empleados de un departamento.
    buscarEmpleados = (event) => {

        // Evitamos que el formulario recargue la página.
        event.preventDefault();

        // Obtenemos el identificador seleccionado en el desplegable.
        // No necesitamos parseInt porque lo utilizamos para construir
        // una URL y no para realizar una operación matemática.
        let idDepartamento =
            this.selectIdDepartamento.current.value;

        // Construimos el endpoint añadiendo el identificador.
        // Ejemplo: api/empleados/empleadosdepartamento/10.
        let request =
            "api/empleados/empleadosdepartamento/" + idDepartamento;

        // Realizamos una petición GET a la API de empleados.
        axios.get(this.urlEmpleados + request).then((response) => {

            // Mostramos un mensaje en la consola.
            console.log("Leyendo empleados");

            // Guardamos los empleados recibidos en el estado.
            // response.data contiene la respuesta de la API.
            this.setState({
                empleados: response.data
            });
        });
    }

    // Método para cargar todos los departamentos desde su API.
    loadDepartamentos = () => {

        // Indicamos el endpoint que devuelve los departamentos.
        let request = "webresources/departamentos";

        // Consultamos la API de departamentos.
        axios.get(this.urlDepartamentos + request).then((response) => {

            // Mostramos un mensaje en la consola.
            console.log("Leyendo departamentos");

            // Guardamos los departamentos recibidos en el estado.
            this.setState({
                departamentos: response.data
            });
        });
    }

    // Método del ciclo de vida de React.
    // Se ejecuta cuando el componente ya se ha montado en pantalla.
    componentDidMount = () => {

        // Cargamos los departamentos automáticamente al entrar.
        this.loadDepartamentos();
    }

    // Estado inicial del componente.
    state = {

        // Array que guardará los empleados de la búsqueda.
        empleados: [],

        // Array que guardará los departamentos recibidos de la API.
        departamentos: []
    }

    // Método que construye la interfaz del componente.
    render() {
        return (
            <div>

                {/* Título principal con color coral claro. */}
                <h1 style={{ color: "lightcoral" }}>
                    Api Empleados Departamentos
                </h1>

                {/* Formulario para seleccionar un departamento. */}
                <form>

                    {/* Etiqueta del desplegable. */}
                    <label>Seleccione departamento: </label>

                    {/* Select conectado a la referencia creada anteriormente. */}
                    <select ref={this.selectIdDepartamento}>

                        {/* Recorremos los departamentos cargados desde la API. */}
                        {this.state.departamentos.map((dept, index) => {
                            return (

                                // Cada opción representa un departamento.
                                // value contiene su número identificador.
                                // El texto visible es el nombre del departamento.
                                <option key={index} value={dept.numero}>
                                    {dept.nombre}
                                </option>
                            )
                        })}

                    </select>

                    {/* Al pulsar, buscamos los empleados del departamento elegido. */}
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

                {/* Lista donde se mostrarán los empleados encontrados. */}
                <ul>

                    {/* Recorremos el array de empleados del estado. */}
                    {this.state.empleados.map((emp, index) => {
                        return (

                            // Creamos un elemento de lista por cada empleado.
                            <li
                                style={{ color: "lightpink" }}
                                key={index}
                            >

                                {/* Mostramos el apellido y el oficio del empleado. */}
                                {emp.apellido}, Oficio: {emp.oficio}

                            </li>
                        )
                    })}

                </ul>

            </div>
        )
    }
}