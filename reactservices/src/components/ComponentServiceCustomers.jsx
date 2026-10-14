// Importamos React y Component para crear un componente de clase.
import React, { Component } from 'react'

// Importamos axios para realizar peticiones HTTP a una API.
import axios from 'axios'

export default class ComponentServiceCustomers extends Component {

    // Estado inicial del componente.
    state = {

        // Array vacío donde guardaremos los clientes de la API.
        customers: []

    }

    // URL del servicio OData que devuelve los clientes.
    // La URL debe escribirse como una cadena de texto normal.
    url = "https://services.odata.org/V4/Northwind/Northwind.svc/Customers";

    // Método que solicita los clientes al servicio.
    loadCustomers = () => {

        // Este mensaje aparece antes de realizar la petición.
        console.log("Antes del servicio");

        // Hacemos una petición GET a la URL guardada en this.url.
        axios.get(this.url).then((response) => {

            // Este mensaje aparece cuando la petición ha respondido.
            console.log("Leyendo servicio");

            // Guardamos los clientes recibidos en el estado.
            // En OData, response.data.value contiene la lista de clientes.
            this.setState({
                customers: response.data.value
            })

        })

        // Este mensaje se ejecuta sin esperar a que termine Axios.
        console.log("Después del servicio");

    }

    // Este método se ejecutaría al montar el componente,
    // pero está comentado y, por tanto, no se ejecuta.
    // Si lo activamos, los clientes se cargarían automáticamente.
    //
    // componentDidMount = () => {
    //     this.loadCustomers();
    // }

    // Método que genera la interfaz.
    render() {
        return (
            <div>

                {/* Título principal con color coral claro. */}
                <h1 style={{ color: "lightcoral" }}>
                    Service Api Customers
                </h1>

                {/* Al pulsar el botón, solicitamos los clientes a la API. */}
                <button
                    style={{
                        backgroundColor: "white",
                        borderRadius: "8px",
                        padding: "5px"
                    }}
                    onClick={this.loadCustomers}
                >
                    Load Customers
                </button>

                {/* Recorremos el array customers y mostramos cada cliente. */}
                {this.state.customers.map((cliente, index) => {
                    return (

                        // Creamos un bloque por cliente.
                        // key permite a React identificar cada elemento.
                        <h4
                            key={index}
                            style={{ color: "lightpink" }}
                        >

                            {/* Mostramos el nombre de la persona de contacto. */}
                            Contacto: {cliente.ContactName}

                            <br />

                            {/* Mostramos el cargo de la persona de contacto. */}
                            Título: {cliente.ContactTitle}

                            {/* Línea horizontal para separar los clientes. */}
                            <hr />

                        </h4>
                    )
                })}

            </div>
        )
    }
}