// Importamos React para utilizar createRef y Component
// para crear un componente de clase.
import React, { Component } from 'react'

export default class TablasMultiplicar extends Component {

    // Creamos una referencia para acceder al input
    // donde el usuario introduce el número.
    cajaNumero = React.createRef();

    // Estado inicial del componente.
    // El array numeros guardará las operaciones de multiplicar.
    state = {
        numeros: []
    }

    // Método que genera la tabla de multiplicar.
    // Recibe el evento del formulario.
    generarTabla = (event) => {

        // Evita que el formulario recargue la página.
        event.preventDefault();

        // Recuperamos el número introducido y lo convertimos
        // en un número entero.
        let numero = parseInt(this.cajaNumero.current.value);

        // Creamos un array vacío para guardar las operaciones.
        let lista = [];

        // Recorremos los números del 0 al 10, ambos incluidos.
        for (let i = 0; i <= 10; i++) {

            // Calculamos el resultado de multiplicar
            // el número introducido por el contador i.
            let multiplicacion = numero * i;

            // Creamos el texto completo de la operación
            // y lo añadimos al array.
            // Ejemplo: "5 x 2 = 10".
            lista.push(numero + " x " + i + " = " + multiplicacion);
        }

        // Guardamos la lista de operaciones en el estado.
        // React actualizará la interfaz automáticamente.
        this.setState({
            numeros: lista
        });
    }

    // render() define el contenido que se mostrará en pantalla.
    render() {
        return (
            <div>

                {/* Título principal del ejercicio. */}
                <h1>Tablas de multiplicar</h1>

                {/* Al enviar el formulario se ejecuta generarTabla. */}
                <form onSubmit={this.generarTabla}>

                    {/* Etiqueta que indica qué número introducir. */}
                    <label>Introduzca número</label>

                    {/* Campo numérico conectado a cajaNumero mediante ref. */}
                    <input
                        type="number"
                        ref={this.cajaNumero}
                    />

                    {/* Envía el formulario para generar las operaciones. */}
                    <button type="submit">
                        Mostrar tabla
                    </button>

                </form>

                {/* Lista donde aparecerán las operaciones calculadas. */}
                <ul>

                    {/* Recorremos el array numeros del estado.
                        opercaion contiene el texto de cada operación
                        e index indica la posición dentro del array. */}
                    {this.state.numeros.map((opercaion, index) => {
                        return (
                            // Creamos un elemento de lista por operación.
                            <li key={index}>
                                {opercaion}
                            </li>
                        );
                    })}

                </ul>

            </div>
        )
    }
}