import React, { Component } from 'react'
import axios from 'axios'

export default class DetalleCocheComponent extends Component {
    state = {
        coche: null,
        error: ''
    }

    url = "https://apicorecrudcoches.azurewebsites.net/"

    // Consultamos el detalle al recibir el identificador
    componentDidMount = () => {
        this.cargarDetalle()
    }

    // Carga los datos del coche
    cargarDetalle = () => {
        axios.get(this.url + "RUTA_DETALLE/" + this.props.idCoche)
            .then(res => {
                this.setState({
                    coche: res.data,
                    error: ''
                })
            })
            .catch(error => {
                this.setState({
                    coche: null,
                    error: "Error al cargar el detalle"
                })
                console.log(error)
            })
    }

    // Si se selecciona otro coche, volvemos a consultar
    componentDidUpdate = (prevProps) => {
        if (prevProps.idCoche !== this.props.idCoche) {
            this.cargarDetalle()
        }
    }

    render() {
        if (this.state.error) {
            return <p>{this.state.error}</p>
        }

        if (!this.state.coche) {
            return <p>Cargando detalle del coche...</p>
        }

        const coche = this.state.coche

        return (
            <div>
                <h2>Detalle del coche</h2>

                {Object.entries(coche).map(([campo, valor]) => (
                    <p key={campo}>
                        <strong>{campo}:</strong> {String(valor ?? '')}
                    </p>
                ))}
            </div>
        )
    }
}