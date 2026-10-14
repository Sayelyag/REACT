// Importamos Component para crear un componente basado en clases.
import { Component } from "react";

// Importamos el componente hijo que mostrará cada número.
import HijoNumeros from "./HijoNumeros";

// Creamos el componente padre PadreNumeros.
export default class PadreNumeros extends Component {

    // Declaramos el estado inicial del componente padre.
    state = {

        // Array que contiene los números iniciales.
        numeros: [5, 11],

        // Variable que almacena la suma acumulada.
        suma: 0

    }

    // Creamos un método para generar un número aleatorio.
    generarNumero = () => {

        // Generamos un número entero aleatorio entre 0 y 99.
        let numero = Math.floor(Math.random() * 100);

        // Actualizamos el estado creando un array nuevo.
        // El operador spread (...) copia los números anteriores
        // y añade el nuevo número al final.
        this.setState({
            numeros: [...this.state.numeros, numero]
        })

    }

    // Creamos un método que recibe el número seleccionado por un hijo.
    mostrarSuma = (numeroSeleccionado) => {

        // Sumamos el número seleccionado al total acumulado.
        this.setState({
            suma: this.state.suma + numeroSeleccionado
        })

    }

    // render() devuelve el contenido que se mostrará en pantalla.
    render() {

        return (
            <div>

                {/* Mostramos el título del componente padre */}
                <h1>Padre Números</h1>

                {/* Mostramos la suma acumulada con fondo amarillo */}
                <h3 style={{ backgroundColor: "yellow" }}>
                    La suma es: {this.state.suma}
                </h3>

                {/* Al pulsar el botón, generamos y añadimos un número al array */}
                <button onClick={this.generarNumero}>
                    Crear número aleatorio
                </button>

                {
                    // Recorremos el array numeros con map().
                    // Por cada número, creamos un componente HijoNumeros.
                    this.state.numeros.map((numero, index) => {

                        // Devolvemos un hijo y le pasamos sus propiedades.
                        return (
                            <HijoNumeros

                                // Enviamos el número que debe mostrar el hijo.
                                numero={numero}

                                // Asignamos una key para identificar cada elemento.
                                key={index}

                                // Enviamos la función del padre para que el hijo
                                // pueda comunicar qué número se ha seleccionado.
                                mostrarSuma={this.mostrarSuma}

                            />
                        )
                    })
                }

            </div>
        )
    }
}