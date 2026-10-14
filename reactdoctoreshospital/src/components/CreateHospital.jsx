import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { Navigate } from 'react-router-dom'

export default class CreateHospital extends Component {

    // Referencias a las cajas del formulario
    cajaId = React.createRef()
    cajaNombre = React.createRef()
    cajaDireccion = React.createRef()
    cajaTelefono = React.createRef()
    cajaCamas = React.createRef()

    // URL de la API
    url = Global.urlApiHospitales

    // Estado del componente
    state = {
        mensaje: "",
        status: false
    }

    // Inserta un hospital
    insertHospital = (event) => {
        event.preventDefault()

        let request = "api/ "

        let hospital = {
            idHospital: this.cajaId.current.value,
            nombre: this.cajaNombre.current.value,
            direccion: this.cajaDireccion.current.value,
            telefono: this.cajaTelefono.current.value,
            camas: this.cajaCamas.current.value
        }
        {
            this.service.insertarHospital(hospital).then((result) => {
                this.setState({
                    status: true
                })
            })
        }

        axios.post(this.url + request, hospital)
            .then((response) => {
                console.log("Insertado!!!")
                console.log(response.data)

                this.setState({
                    mensaje: "Hospital insertado: " + hospital.nombre,
                    status: true
                })
            })
            .catch((error) => {
                console.log("Error al insertar el hospital:", error)

                this.setState({
                    mensaje: "Error al insertar el hospital"
                })
            })
    }

    render() {
        return (
            <div className="container mt-4">
                {
                    this.state.status == true &&
                    (<Navigate to ="/hospitales"/>)
                }
                <h1>Crear Hospital</h1>

                <h3 style={{ color: "red" }}>
                    {this.state.mensaje}
                </h3>

                <form onSubmit={this.insertHospital}>

                    <label>ID Hospital</label>
                    <input
                        type="number"
                        ref={this.cajaId}
                        className="form-control"
                        required
                    />

                    <label>Nombre Hospital</label>
                    <input
                        type="text"
                        ref={this.cajaNombre}
                        className="form-control"
                        required
                    />

                    <label>Direccion Hospital</label>
                    <input
                        type="text"
                        ref={this.cajaDireccion}
                        className="form-control"
                        required
                    />

                    <label>Telefono Hospital</label>
                    <input
                        type="text"
                        ref={this.cajaTelefono}
                        className="form-control"
                        required
                    />

                    <label>Camas Hospital</label>
                    <input
                        type="number"
                        ref={this.cajaCamas}
                        className="form-control"
                        required
                    />

                    <button type="submit" className="btn btn-warning mt-3">
                        Insertar Hospital
                    </button>

                </form>
            </div>
        )
    }
}