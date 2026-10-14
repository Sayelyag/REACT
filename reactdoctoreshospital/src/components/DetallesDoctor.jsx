import React, { Component } from 'react'
import Global from './Global'
import axios from 'axios'

export default class DetallesDoctor extends Component {

    // URL de la API de doctores
    url = Global.urlApiDoctores

    // Estado del componente
    state = {
        doctor: null
    }

    // Carga los datos de un doctor por su ID
    loadDoctor = () => {
        let request = "api/doctores/" + this.props.iddoctor

        axios.get(this.url + request)
            .then((response) => {
                console.log(response.data)

                // Guardamos los datos del doctor
                this.setState({
                    doctor: response.data
                })
            })
            .catch((error) => {
                console.log("Error al cargar el doctor:", error)
            })
    }

    // Se ejecuta cuando se monta el componente
    componentDidMount = () => {
        this.loadDoctor()
    }

    render() {
        return (
            <div className="container mt-3">

                <h2>Detalles del doctor</h2>

                {
                    this.state.doctor != null && (
                        <div>
                            <p>
                                Apellido: {this.state.doctor.apellido}
                            </p>

                            <p>
                                Especialidad: {this.state.doctor.especialidad}
                            </p>

                            <p>
                                Salario: {this.state.doctor.salario}
                            </p>

                            <p>
                                Hospital: {this.state.doctor.idHospital}
                            </p>
                        </div>
                    )
                }

            </div>
        )
    }
}