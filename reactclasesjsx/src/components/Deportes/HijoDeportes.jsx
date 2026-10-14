// Importamos Component para crear un componente de React basado en clases.
import { Component } from "react";

// Creamos el componente hijo HijoDeportes.
export default class HijoDeportes extends Component {

    // Declaramos el estado inicial del componente.
    // mensaje comienza siendo una cadena vacía.
    state = {
        mensaje: ""
    }

    // Creamos un método para seleccionar este deporte como favorito.
    seleccionarFavorito = () => {

        // Actualizamos el estado del componente hijo.
        // Construimos un mensaje utilizando el deporte recibido mediante props.
        this.setState({
            mensaje: "Su deporte favorito es: " + this.props.nombre
        })

    }

    // El método render devuelve el contenido que se mostrará en pantalla.
    render() {

        return (
            <div>

                {/* Mostramos el mensaje guardado en el estado del hijo en color rojo */}
                <h2 style={{ color: "red" }}>
                    {this.state.mensaje}
                </h2>

                {/* Mostramos el nombre del deporte recibido mediante props en azul */}
                <h3 style={{ color: "blue" }}>
                    Deportes {this.props.nombre}
                </h3>

                {/* Al pulsar el botón, ejecutamos seleccionarFavorito */}
                <button onClick={this.seleccionarFavorito}>
                    Favorito
                </button>

            </div>
        )
    }
}