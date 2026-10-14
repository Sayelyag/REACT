// Importamos Component para crear un componente de React basado en clases.
import { Component } from "react";

// Creamos el componente hijo HijoNumeros.
export default class HijoNumeros extends Component {

    // Declaramos el estado inicial del componente hijo.
    // mensaje comienza como una cadena vacía.
    // Actualmente no se utiliza en este componente.
    state = {
        mensaje: ""
    }

    // Creamos un método para seleccionar el número.
    seleccionarNumero = () => {

        // Llamamos al método mostrarSuma del padre.
        // Le enviamos el número que este componente ha recibido mediante props.
        this.props.mostrarSuma(this.props.numero);

    }

    // render() devuelve el contenido que se mostrará en pantalla.
    render() {

        return (
            <div>

                {/* Mostramos el número recibido desde el componente padre en rojo */}
                <h2 style={{ color: "red" }}>
                    Número: {this.props.numero}
                </h2>

                {/* Al pulsar el botón, ejecutamos seleccionarNumero */}
                <button onClick={this.seleccionarNumero}>
                    Sumar numero
                </button>

            </div>
        )
    }
}