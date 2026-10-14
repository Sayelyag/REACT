import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import EmpleadosComponent from './EmpleadosComponent'

export default class DepartamentosComponent extends Component {

    // Referencia al select
    selectIdDepartamento = React.createRef();

    // URL de la API
    urlDepartamentos = Global.urlApiDepartamentos;

    // Estado inicial
    state = {
        departamentos: [],
        idDepartamento: 0
    }

    // Cargamos los departamentos desde la API
    loadDepartamentos = () => {

        let request = "webresources/departamentos";

        axios.get(this.urlDepartamentos + request)
            .then((response) => {
                console.log("Leyendo departamentos");

                this.setState({
                    departamentos: response.data
                });
            });
    }

    // Se ejecuta al mostrar el componente
    componentDidMount() {
        this.loadDepartamentos();
    }

    // Obtenemos el departamento seleccionado
    buscarEmpleados = (event) => {

        event.preventDefault();

        let id = this.selectIdDepartamento.current.value;

        // Actualizamos el ID seleccionado
        this.setState({
            idDepartamento: id
        });
    }

    render() {
        return (
            <div>
                <h1>Departamentos Component</h1>

                <form onSubmit={this.buscarEmpleados}>
                    <label>Seleccionar departamento: </label>

                    <select ref={this.selectIdDepartamento}>
                        {
                            this.state.departamentos.map((dept, index) => {
                                return (
                                    <option key={index} value={dept.numero}>
                                        {dept.nombre}
                                    </option>
                                );
                            })
                        }
                    </select>
                    <button onClick = {this.buscarEmpleados}>
                        Buscar empleados
                    </button>
                </form>

                {
                    this.state.idDepartamento != 0 &&
                    <EmpleadosComponent
                        idDepartamento={this.state.idDepartamento}
                    />
                }
            </div>
        );
    }
}