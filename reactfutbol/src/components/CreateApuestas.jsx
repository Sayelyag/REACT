
import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import ServiceClubs from '../services/ServiceClubs'

// Componente para crear una nueva apuesta
export default class CreateApuestas extends Component{
    
    // Referencias para acceder al valor de cada input
    inputUsuario = React.createRef()
    inputResultado = React.createRef()
    inputFecha = React.createRef()

    // Creamos una instancia del servicio que gestiona las apuestas
    service = new ServiceClubs()

    // Estado inicial del componente
    state = {
        status: false, // Indica si la apuesta se ha guardado correctamente
        mensaje: null  // Guarda el mensaje de error, si lo hay
    }

    // Función que se ejecuta al enviar el formulario
    mandarApuesta = (event) => {
        // Evita que la página se recargue al enviar el formulario
        event.preventDefault()

        // Creamos el objeto con los datos introducidos en los inputs
        let apuesta = {
            usuario: this.inputUsuario.current.value,
            resultado: this.inputResultado.current.value,
            fecha: this.inputFecha.current.value
        }

        // Llamamos al servicio para insertar la nueva apuesta
        this.service.insertarApuesta(apuesta)
            .then((result) => {
                // Si la operación tiene éxito, actualizamos el estado
                this.setState({
                    status: true
                })
            })
            .catch((error) => {
                // Si ocurre un error, guardamos su mensaje en el estado
                this.setState({
                    mensaje: error.message
                })
            })
    }

    // Método que genera la interfaz del componente
    render() {
        // Si la apuesta se ha guardado correctamente,
        // redirigimos al usuario a la página de apuestas
        if (this.state.status) {
            return <Navigate to="/Apuestas" />
        }

        // Mostramos el formulario para introducir una apuesta
        return (
            <div style={{ margin: "30px", fontSize: "20px" }}>

                <form
                    // Ejecuta mandarApuesta cuando se envía el formulario
                    onSubmit={this.mandarApuesta}
                    // Estilos del formulario
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "40px",
                        padding: "20px",
                        border: "5px solid #FFC5D3",
                        width: "fit-content",
                        borderRadius: "8px",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "40px auto 0"
                    }}
                >

                    {/* Título del formulario */}
                    <h1 style={{ color: "#D97891" }}>
                        Insertar Apuesta
                    </h1>

                    {/* Campo para introducir el usuario */}
                    <label>Introduzca el usuario:</label>
                    <input
                        ref={this.inputUsuario} // Asociamos el input con su referencia
                        type="text"
                        required // Hace obligatorio rellenar el campo
                        style={{ border: "1px solid #D97891" }}
                    />

                    {/* Campo para introducir el resultado */}
                    <label>Introduzca el resultado:</label>
                    <input
                        ref={this.inputResultado} // Asociamos el input con su referencia
                        type="text"
                        required
                        style={{ border: "1px solid #D97891" }}
                    />

                    {/* Campo para introducir la fecha */}
                    <label>Introduzca la fecha:</label>
                    <input
                        ref={this.inputFecha} // Asociamos el input con su referencia
                        type="date"
                        required
                        style={{ border: "1px solid #D97891" }}
                    />

                    {/* Mostramos el mensaje de error, si existe */}
                    <p style={{ color: "red", fontWeight: "bold" }}>
                        {this.state.mensaje}
                    </p>

                    {/* Botón para enviar el formulario */}
                    <button
                        type="submit"
                        style={{
                            borderRadius: "5px",
                            backgroundColor: "#FFC5D3",
                            border: "1px solid #FFC5D3",
                            padding: "10px 25px"
                        }}
                    >
                        GUARDAR
                    </button>

                </form>
            </div>
        )
    }
}