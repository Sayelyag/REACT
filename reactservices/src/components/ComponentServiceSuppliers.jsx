// Importamos React y Component para crear un componente de clase.
import React, { Component } from 'react'

// Importamos axios para realizar peticiones HTTP a la API.
import axios from 'axios'

// Importamos Global, aunque en este código no se utiliza.
// Podríamos usar Global.urlNorthwinf para guardar la URL base.
import Global from '../Global';

export default class ComponentServiceSuppliers extends Component {

    // Creamos una referencia para acceder al input del ID.
    cajaID = React.createRef();

    // Estado inicial del componente.
    state = {

        // Array que guardará los proveedores recibidos de la API.
        suppliers: [],

        // Indica qué tipo de búsqueda se está mostrando:
        // false = lista de proveedores.
        // true = información detallada de un proveedor.
        buscando: false
    }

    // URL del servicio OData que devuelve todos los proveedores.
    url = "https://services.odata.org/V4/Northwind/Northwind.svc/Suppliers";

    // Método para cargar todos los proveedores.
    loadSuppliers = () => {

        // Mensaje que aparece antes de iniciar la petición.
        console.log("Antes del servicio");

        // Realizamos una petición GET para obtener los proveedores.
        axios.get(this.url).then((response) => {

            // Este mensaje aparece cuando llega la respuesta.
            console.log("Leyendo servicio");

            // Guardamos la lista de proveedores en el estado.
            // En OData, response.data.value contiene el array.
            // También indicamos que mostramos la lista general.
            this.setState({
                suppliers: response.data.value,
                buscando: false
            })
        })

        // Se ejecuta sin esperar a que termine la petición.
        console.log("Después del servicio");

    }

    // Método para buscar un proveedor por su ID.
    loadID = () => {

        // Mensaje que aparece antes de realizar la búsqueda.
        console.log("Antes de la búsqueda");

        // Recuperamos el ID introducido en el input.
        let id = this.cajaID.current.value;

        // Construimos la URL para consultar un proveedor concreto.
        // Ejemplo: .../Suppliers(3).
        axios.get(this.url + "(" + id + ")").then((response) => {

            // Mensaje que aparece cuando llega la respuesta.
            console.log("Buscando el ID");

            // Guardamos el proveedor en un array de un solo elemento.
            // response.data es un objeto, por eso usamos [response.data].
            // Cambiamos buscando a true para mostrar todos sus datos.
            this.setState({
                suppliers: [response.data],
                buscando: true
            })
        })

        // Se ejecuta sin esperar a que termine la petición.
        console.log("Tras la búsqueda");

    }

    // Se ejecuta cuando el componente se monta por primera vez.
    componentDidMount = () => {

        // Cargamos automáticamente todos los proveedores.
        this.loadSuppliers();
    }

    // Método que genera la interfaz.
    render() {
        return (
            <div>

                {/* Título principal del componente. */}
                <h1 style={{ color: "lightcoral" }}>
                    Service Api Suppliers
                </h1>

                {/* Botón para cargar todos los proveedores. */}
                <button
                    style={{
                        backgroundColor: "white",
                        borderRadius: "8px",
                        padding: "5px"
                    }}
                    onClick={this.loadSuppliers}
                >
                    Load Supplier
                </button>

                <br />

                {/* Etiqueta del campo de búsqueda por ID. */}
                <label>ID: </label>

                {/* Campo numérico conectado a la referencia cajaID. */}
                <input
                    type="number"
                    ref={this.cajaID}
                />

                {/* Botón que busca el proveedor por su ID. */}
                <button
                    style={{
                        backgroundColor: "white",
                        borderRadius: "8px",
                        padding: "5px"
                    }}
                    onClick={this.loadID}
                >
                    Load Suppliers By Id
                </button>

                {/* Recorremos el array de proveedores del estado. */}
                {this.state.suppliers.map((cliente, index) => {

                    // Si buscando es true, mostramos todos los datos.
                    if (this.state.buscando) {
                        return (
                            <div key={index}>

                                {/* Subtítulo de la ficha del proveedor. */}
                                <h2 style={{ color: "grey" }}>
                                    Información del Supplier
                                </h2>

                                {/* Mostramos el identificador del proveedor. */}
                                <h4 style={{ color: "lightpink" }}>
                                    <b>SupplierID:</b> {cliente.SupplierID}
                                </h4>

                                {/* Mostramos el nombre de la empresa. */}
                                <h4 style={{ color: "lightpink" }}>
                                    <b>CompanyName:</b> {cliente.CompanyName}
                                </h4>

                                {/* Mostramos el nombre del contacto. */}
                                <h4 style={{ color: "lightpink" }}>
                                    <b>ContactName:</b> {cliente.ContactName}
                                </h4>

                                {/* Mostramos el cargo del contacto. */}
                                <h4 style={{ color: "lightpink" }}>
                                    <b>ContactTitle:</b> {cliente.ContactTitle}
                                </h4>

                                {/* Mostramos la dirección. */}
                                <h4 style={{ color: "lightpink" }}>
                                    <b>Address:</b> {cliente.Address}
                                </h4>

                                {/* Mostramos la ciudad. */}
                                <h4 style={{ color: "lightpink" }}>
                                    <b>City:</b> {cliente.City}
                                </h4>

                                {/* Mostramos la región, si existe. */}
                                <h4 style={{ color: "lightpink" }}>
                                    <b>Region:</b> {cliente.Region}
                                </h4>

                                {/* Mostramos el código postal. */}
                                <h4 style={{ color: "lightpink" }}>
                                    <b>PostalCode:</b> {cliente.PostalCode}
                                </h4>

                                {/* Mostramos el país. */}
                                <h4 style={{ color: "lightpink" }}>
                                    <b>Country:</b> {cliente.Country}
                                </h4>

                                {/* Mostramos el teléfono. */}
                                <h4 style={{ color: "lightpink" }}>
                                    <b>Phone:</b> {cliente.Phone}
                                </h4>

                                {/* Mostramos el fax. */}
                                <h4 style={{ color: "lightpink" }}>
                                    <b>Fax:</b> {cliente.Fax}
                                </h4>

                                {/* Mostramos la página web del proveedor. */}
                                <h4 style={{ color: "lightpink" }}>
                                    <b>HomePage:</b> {cliente.HomePage}
                                </h4>

                                {/* Línea para separar la ficha. */}
                                <hr />

                            </div>
                        )
                    } else {

                        // Si buscando es false, mostramos solo un resumen.
                        return (
                            <h4
                                key={index}
                                style={{ color: "lightpink" }}
                            >

                                {/* Identificador del proveedor. */}
                                ID: {cliente.SupplierID}

                                <br />

                                {/* Nombre de la persona de contacto. */}
                                Contacto: {cliente.ContactName}

                                {/* Línea para separar proveedores. */}
                                <hr />

                            </h4>
                        )
                    }
                })}

            </div>
        )
    }
}