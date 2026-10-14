// Importamos React para utilizar createRef y Component
// para crear un componente de clase.
import React, { Component } from 'react'

// Creamos y exportamos el componente FormSimple.
export default class FormSimple extends Component {

    // Creamos una referencia para acceder directamente
    // al input donde el usuario escribe su nombre.
    cajaNombre = React.createRef();

    // Método que se ejecuta cuando se envía el formulario.
    enviarInformacion = (event) => {

        // Evita que el formulario recargue la página.
        event.preventDefault();

        // Obtenemos el texto escrito en el input.
        let nombre = this.cajaNombre.current.value;

        // Mostramos el nombre en la consola del navegador.
        console.log("Dato enviados: " + nombre);
    }

    // render() define los elementos que aparecen en pantalla.
    render() {
        return (
            <div>

                {/* Título del formulario. */}
                <h1>Form Simple</h1>

                {/* Al enviar el formulario se ejecuta
                    el método enviarInformacion. */}
                <form onSubmit={this.enviarInformacion}>

                    {/* Etiqueta que indica qué debe escribir el usuario. */}
                    <label>Nombre: </label>

                    {/* Campo de texto para introducir el nombre.
                        ref conecta el input con cajaNombre. */}
                    <input
                        type="text"
                        ref={this.cajaNombre}
                    />

                    {/* Al pulsar este botón se envía el formulario. */}
                    <button>
                        Enviar información
                    </button>

                </form>

            </div>
        )
    }
}