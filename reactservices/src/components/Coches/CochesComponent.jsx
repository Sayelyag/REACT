import React, { Component } from 'react'
import axios from 'axios'
import DetalleCocheComponent from './DetalleCocheComponent'

export default class CochesComponent extends Component {

    // Estado del componente
    state = {
        coches: [],
        idCoche: '',
        error: ''
    }

    // URL base de la API
    url = "https://apicorecrudcoches.azurewebsites.net/"

    // Al cargar el componente, consultamos los coches
    componentDidMount = () => {
        axios.get(this.url + "RUTA_LISTA")
            .then(res => {
                this.setState({
                    coches: res.data
                })
            })
            .catch(error => {
                this.setState({
                    error: "Error al cargar los coches"
                })
                console.log(error)
            })
    }

    // Actualizamos el coche seleccionado
    seleccionarCoche = (event) => {
        this.setState({
            idCoche: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Listado de coches</h1>

                <select
                    value={this.state.idCoche}
                    onChange={this.seleccionarCoche}
                >
                    <option value="">Seleccione un coche</option>

                    {this.state.coches.map(coche => (
                        <option
                            key={coche.id}
                            value={coche.id}
                        >
                            {coche.marca}
                        </option>
                    ))}
                </select>

                <p>{this.state.error}</p>

                {this.state.idCoche !== '' &&
                    <DetalleCocheComponent
                        idCoche={this.state.idCoche}
                    />
                }
            </div>
        )
    }
}