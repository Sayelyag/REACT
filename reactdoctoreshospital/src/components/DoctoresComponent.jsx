import React, { Component } from 'react'
import Global from './Global'
import axios from 'axios'
import DetallesDoctor from './DetallesDoctor'
import ServiceHospitales from '../services/ServiceHospitales'

export default class DoctoresComponent extends Component {
    service = new ServiceHospitales
    // URL de la API de doctores
    url = Global.urlApiDoctores

    // Estado del componente
    state = {
        doctores: [],
        iddoctorSeleccionado: -1
    }

    // Carga los doctores del hospital seleccionado
    loadDoctoresHospital = () => {
        this.service.getDoctoresHospital(this.props.idhospital).then(result => {
            this.setState({
                doctores: result
            })
        })
    }

    // Se ejecuta cuando se carga el componente
    componentDidMount = () => {
        this.loadDoctoresHospital()
    }

    // Se ejecuta cuando cambian las propiedades
    componentDidUpdate = (oldProps) => {
        if (oldProps.idhospital !== this.props.idhospital) {
            this.loadDoctoresHospital()
        }
    }

    render() {
        return (
            <div className="container mt-4">

                <h1>
                    Doctores del hospital {this.props.idhospital}
                </h1>

                <table className="table table-primary table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Especialidad</th>
                            <th>Salario</th>
                            <th>Hospital</th>
                            <th>Detalles</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.doctores.map((doc, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{doc.apellido}</td>
                                        <td>{doc.especialidad}</td>
                                        <td>{doc.salario}</td>
                                        <td>{doc.idHospital}</td>
                                        <td>
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => {
                                                    console.log("ID del doctor seleccionado:", doc.idDoctor);

                                                    this.setState({
                                                        iddoctorSeleccionado: doc.idDoctor
                                                    });
                                                }}
                                            >
                                                Ver detalles
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                {
                    this.state.iddoctorSeleccionado !== -1 && (
                        <DetallesDoctor
                            iddoctor={this.state.iddoctorSeleccionado}
                        />
                    )
                }
            </div>
        )
    }
}