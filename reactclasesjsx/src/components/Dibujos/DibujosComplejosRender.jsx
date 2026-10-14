// Importamos Component para crear un componente basado en clases.
import { Component } from "react";

// Creamos la clase DibujosComplejosRender.
class DibujosComplejosRender extends Component {

    // Declaramos el estado inicial del componente.
    // nombres es un array que contiene los nombres que mostraremos.
    state = {
        nombres: [
            "Juan", "Pedro", "Maria", "Ana", "Luis",
            "Marta", "Jorge", "Lucia", "Carlos", "Sofia"
        ]
    }

    // Creamos un método para añadir un nombre al array.
    generarNombre = () => {

        // Añadimos "Nuevo Nombre" al final del array nombres.
        // OJO: push() modifica directamente el array del estado.
        this.state.nombres.push("Nuevo Nombre");

        // Actualizamos el estado para que React vuelva a renderizar
        // el componente y muestre el nuevo nombre.
        // Aquí se reutiliza el mismo array que se ha modificado.
        this.setState({
            nombres: this.state.nombres
        })
    }

    // render() define el contenido que se mostrará en pantalla.
    render() {

        return (
            <div>

                {/* Mostramos el título del componente */}
                <h1>Dibujos Complejos Render</h1>

                {/* Al pulsar el botón, ejecutamos generarNombre */}
                <button onClick={this.generarNombre}>
                    Generar Nombre
                </button>

                {
                    // Recorremos el array nombres con map().
                    // map() permite generar un elemento JSX por cada nombre.
                    this.state.nombres.map((nombres, index) => {

                        // Devolvemos un título h4 por cada elemento del array.
                        // key={index} identifica cada elemento de la lista.
                        return (
                            <h4
                                style={{ color: 'blue' }}
                                key={index}
                            >
                                {nombres}
                            </h4>
                        )
                    })
                }

            </div>
        )
    }
}

// Exportamos el componente para utilizarlo en otros archivos.
export default DibujosComplejosRender;