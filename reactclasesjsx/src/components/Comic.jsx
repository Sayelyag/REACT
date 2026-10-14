import { Component } from "react";

// Componente hijo que representa UN cómic.
// Recibe los datos del cómic y las funciones del padre mediante props.
export default class Comic extends Component {

    render() {

        // Muestra en la consola los datos del cómic recibido.
        console.log("COMIC:", this.props.comic);

        // Muestra todas las propiedades que recibe este componente.
        console.log("TODAS LAS PROPS:", this.props);

        return (
            <div>

                {/* Muestra el título del cómic en azul. */}
                <h1 style={{ color: "blue" }}>
                    {this.props.comic.titulo}
                </h1>

                {/* Muestra la descripción del cómic. */}
                <p>{this.props.comic.descripcion}</p>

                {/* Al pulsar el botón, llama a la función del padre
                    y le envía el objeto completo del cómic. */}
                <button onClick={() => {
                    this.props.seleccionarComic(this.props.comic);
                }}>
                    Pulsar Boton
                </button>

                {/* Muestra la imagen del cómic.
                    La dirección de la imagen está en comic.imagen. */}
                <img
                    src={this.props.comic.imagen}
                    alt={this.props.comic.titulo}
                    style={{ width: "70px", height: "90px" }}
                />

            </div>
        );
    }
}