import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import ServiceDepartamentos from '../services/ServicesDepartamentos'

export default class CreateDepartamento extends Component {

    service = new ServiceDepartamentos()

    cajaNumero = React.createRef()
    cajaNombre = React.createRef()
    cajaLocalidad = React.createRef()

    state = {
        mensaje: null,
        status: false
    }

    insertDepartamento = (event) => {
        event.preventDefault()

        let departamento = {
            numero: parseInt(this.cajaNumero.current.value),
            nombre: this.cajaNombre.current.value,
            localidad: this.cajaLocalidad.current.value
        }

        this.service.insertDepartamento(departamento)
            .then((result) => {
                this.setState({
                    mensaje: "Departamento insertado correctamente",
                    status: true
                })
            })
            .catch((error) => {
                this.setState({
                    mensaje: "Error al insertar el departamento"
                })
                console.log("Error insertando departamento:", error)
            })
    }

    render() {
        if (this.state.status === true) {
            return <Navigate to="/" />
        }

        return (
            <div
                style={{
                    minHeight: "100vh",
                    backgroundColor: "#fff5f8",
                    padding: "40px 20px"
                }}
            >
                <div
                    style={{
                        maxWidth: "550px",
                        margin: "0 auto",
                        padding: "30px",
                        backgroundColor: "#ffffff",
                        border: "2px solid #f4a6b8",
                        borderRadius: "20px",
                        boxShadow: "0 4px 12px rgba(244, 166, 184, 0.2)"
                    }}
                >
                    <h1
                        style={{
                            color: "#cd5c85",
                            textAlign: "center",
                            marginBottom: "25px",
                            fontWeight: "bold"
                        }}
                    >
                        Crear Departamento
                    </h1>

                    {this.state.mensaje && (
                        <p
                            style={{
                                color: this.state.status
                                    ? "#38764a"
                                    : "#b54763",
                                backgroundColor: this.state.status
                                    ? "#edf8ef"
                                    : "#fff0f4",
                                padding: "10px",
                                borderRadius: "8px",
                                textAlign: "center"
                            }}
                        >
                            {this.state.mensaje}
                        </p>
                    )}

                    <form onSubmit={this.insertDepartamento}>

                        <div style={{ marginBottom: "18px" }}>
                            <label
                                style={{
                                    color: "#702d43",
                                    fontWeight: "bold",
                                    marginBottom: "6px"
                                }}
                            >
                                Id departamento:
                            </label>

                            <input
                                type="number"
                                className="form-control"
                                ref={this.cajaNumero}
                                required
                                style={{
                                    border: "1px solid #e8a0b4",
                                    borderRadius: "10px"
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: "18px" }}>
                            <label
                                style={{
                                    color: "#702d43",
                                    fontWeight: "bold",
                                    marginBottom: "6px"
                                }}
                            >
                                Nombre:
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                ref={this.cajaNombre}
                                required
                                style={{
                                    border: "1px solid #e8a0b4",
                                    borderRadius: "10px"
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: "25px" }}>
                            <label
                                style={{
                                    color: "#702d43",
                                    fontWeight: "bold",
                                    marginBottom: "6px"
                                }}
                            >
                                Localidad:
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                ref={this.cajaLocalidad}
                                required
                                style={{
                                    border: "1px solid #e8a0b4",
                                    borderRadius: "10px"
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn"
                            style={{
                                width: "100%",
                                backgroundColor: "#e88eaa",
                                color: "#ffffff",
                                fontWeight: "bold",
                                padding: "12px",
                                borderRadius: "10px",
                                border: "none"
                            }}
                        >
                            Insertar departamento
                        </button>

                    </form>
                </div>
            </div>
        )
    }
}