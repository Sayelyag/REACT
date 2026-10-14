// Importamos React para utilizar createRef y Component
// para crear un componente de clase.
import React, { Component } from 'react'

// Creamos y exportamos el componente Collatz.
export default class Collatz extends Component {

    // Creamos una referencia para acceder al input
    // y obtener el número que introduce el usuario.
    cajaNumero = React.createRef();

    // Estado inicial del componente.
    // El array numeros guardará la secuencia de Collatz.
    state = {
        numeros: []
    }

    // Método que genera la secuencia de Collatz.
    // Recibe el evento del formulario.
    generarCollatz = (event) => {

        // Evita que el formulario recargue la página
        // al pulsar el botón de enviar.
        event.preventDefault();

        // Obtenemos el valor del input y lo convertimos
        // en un número entero.
        let numero = parseInt(this.cajaNumero.current.value);

        // Creamos un array vacío para guardar la secuencia.
        let lista = [];

        // Repetimos las operaciones hasta llegar al número 1.
        while (numero != 1) {

            // Guardamos el número actual en la secuencia.
            lista.push(numero);

            // Si el número es par, lo dividimos entre 2.
            if (numero % 2 == 0) {
                numero = numero / 2;

            } else {
                // Si es impar, lo multiplicamos por 3 y sumamos 1.
                numero = numero * 3 + 1;
            }
        }

        // Añadimos el 1 final a la secuencia.
        lista.push(1);

        // Actualizamos el estado con la secuencia generada.
        // React volverá a renderizar el componente.
        this.setState({
            numeros: lista
        });
    }

    // render() define lo que se muestra en pantalla.
    render() {
        return (
            <div>

                {/* Título de la aplicación. */}
                <h1>Conjunto Collatz</h1>

                {/* Al enviar el formulario se ejecuta generarCollatz. */}
                <form onSubmit={this.generarCollatz}>

                    {/* Texto que indica qué debe introducir el usuario. */}
                    <label>Introduzca número</label>

                    {/* Campo numérico.
                        La referencia permite leer el número introducido. */}
                    <input
                        type="number"
                        ref={this.cajaNumero}
                    />

                    {/* Envía el formulario y genera la secuencia. */}
                    <button type="submit">
                        Mostrar collatz
                    </button>

                </form>

                {/* Lista donde se mostrarán los números calculados. */}
                <ul>

                    {/* Recorremos el array numeros del estado.
                        Por cada número creamos un elemento li. */}
                    {this.state.numeros.map((num, index) => {
                        return (
                            // key ayuda a React a identificar cada elemento.
                            <li key={index}>
                                {num}
                            </li>
                        );
                    })}

                </ul>

            </div>
        )
    }
}