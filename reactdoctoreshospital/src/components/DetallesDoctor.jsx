import React, { Component } from 'react'
import Global from './Global'

export default class DetallesDoctor extends Component {
    url = Global.urlApiDoctores

    state = {
        doctor: null
    }
    
    loadDoctor = () =>{
        let request = "api/doctores/" + this.props.iddoctor

        axios.get(this.url + request).then((response) => {
            console.log(response.data)
            this.setState({
                docor: response.data
            })
        })
        .catch((error) => {
            console.log("Error al cargar el doctor: " +error)
        })
    }

    componentDidMount = () => {
        this.loadDoctor
    }
    render() {
        return (
        <div className="container mt-3">

                <h2>Detalles del doctor</h2>

                {
                    this.state.doctor != null && (
                        <div>
                            <p>Apellido: {this.state.doctor.apellido}</p>
                            <p>Especialidad: {this.state.doctor.especialidad}</p>
                            <p>Salario: {this.state.doctor.salario}</p>
                            <p>Hospital: {this.state.doctor.idHospital}</p>
                        </div>
                    )
                }

            </div>
        )
    }
}