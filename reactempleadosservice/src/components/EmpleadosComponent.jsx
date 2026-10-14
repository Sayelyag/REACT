import React, { Component } from 'react'
import ServiceEmpleados from '../services/ServiceEmpleados'

export default class EmpleadosComponent extends Component {

    // Creamos el objeto del servicio
    service = new ServiceEmpleados()

    // Estado del componente
    state = {
        empleados: []
    }

    // Carga los empleados del oficio seleccionado
    loadEmpleadosOficio = () => {
        this.service.getEmpleadosOficio(this.props.oficio)
            .then(result => {
                this.setState({
                    empleados: result
                })
            })
            .catch(error => {
                console.log("Error al cargar los empleados:", error)
            })
    }

    // Se ejecuta cuando se carga el componente
    componentDidMount = () => {
        this.loadEmpleadosOficio()
    }

    // Se ejecuta cuando cambia el oficio seleccionado
    componentDidUpdate = (oldProps) => {
        if (oldProps.oficio !== this.props.oficio) {
            this.loadEmpleadosOficio()
        }
    }

    render() {
        return (
            <div className="container mt-4">

                <h1>
                    Empleados del oficio: {this.props.oficio}
                </h1>

                <div className="table-responsive">
                    <table className="table table-primary table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Apellido</th>
                                <th>Oficio</th>
                                <th>Salario</th>
                                <th>Departamento</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.empleados.map((emp, index) => {
                                    return (
                                        <tr key={emp.idEmpleado ?? index}>
                                            <td>{emp.apellido}</td>
                                            <td>{emp.oficio}</td>
                                            <td>{emp.salario}</td>
                                            <td>{emp.departamento}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}