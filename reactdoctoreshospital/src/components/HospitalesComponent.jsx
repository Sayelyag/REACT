import React, { Component } from 'react'
import ServiceHospitales from '../services/ServiceHospitales'

export default class HospitalesComponent extends Component {

    // Creamos el objeto del servicio
    servicio = new ServiceHospitales()

    // Estado del componente
    state = {
        hospitales: []
    }

    // Promesa de ejemplo para practicar
    getPromesa = () => {
        return new Promise((resolve, reject) => {

            let num = 0;

            if (num === 0) {
                resolve("Todo ok, Jose Luis");
            } else {
                reject("Error en mi Promesa");
            }
        });
    }

    // Carga los hospitales utilizando el servicio
    loadHospitales = () => {
        this.servicio.getHospitales().then((result) => {
            this.setState({
                hospitales: result
            });
        })
    }

    // Se ejecuta al cargar el componente
    componentDidMount = () => {
        this.loadHospitales();

        // Ejecutamos la promesa de ejemplo
        this.getPromesa()
            .then((mensaje) => {
                console.log(mensaje);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container mt-4">

                <h1>Hospitales Component</h1>

                <table className="table table-warning table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Direccion</th>
                            <th>Telefono</th>
                            <th>Camas</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.hospitales.map((hospital, index) => {
                                return (
                                    <tr key={hospital.idHospital ?? index}>
                                        <td>{hospital.idHospital}</td>
                                        <td>{hospital.nombre}</td>
                                        <td>{hospital.direccion}</td>
                                        <td>{hospital.telefono}</td>
                                        <td>{hospital.camas}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}