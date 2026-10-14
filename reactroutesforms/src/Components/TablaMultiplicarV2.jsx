// Importamos React para utilizar createRef y Component
// para crear un componente de clase.
import React, { Component } from 'react'

export default class TablaMultiplicarV2 extends Component {

    // Creamos una referencia para acceder al input
    // donde el usuario introduce el número.
    cajaNumero = React.createRef();

    // Método que genera la tabla de multiplicar.
    // Recibe el evento del formulario.
    generarTabla = (event) => {

        // Evita que el formulario recargue la página.
        event.preventDefault();

        // Recuperamos el número introducido y lo convertimos
        // en un número entero.
        let numero = parseInt(this.cajaNumero.current.value);

        // Creamos un array vacío donde guardaremos las filas.
        let aux = [];

        // Recorremos los números del 1 al 10.
        for (var i = 1; i <= 10; i++) {

            // Creamos un texto con la operación.
            // Ejemplo: "5 * 1".
            let operacion = numero + " * " + i;

            // Calculamos el resultado de la multiplicación.
            // Ejemplo: 5 * 1 = 5.
            let resultado = numero * i;

            // Creamos un objeto con la operación y su resultado.
            let dato = {
                operacion: operacion,
                resultado: resultado
            };

            // Añadimos el objeto al array.
            aux.push(dato);
        }

        // Guardamos todas las filas en el estado.
        // React actualizará la interfaz.
        this.setState({
            tabla: aux
        });
    }

    // Estado inicial: todavía no hay filas que mostrar.
    state = {
        tabla: []
    }

    // render() define el contenido que se mostrará en pantalla.
    render() {
        return (
            <div>

                {/* Título principal del ejercicio. */}
                <h1>Tabla Multiplicar</h1>

                {/* Al enviar el formulario se genera la tabla. */}
                <form onSubmit={this.generarTabla}>

                    {/* Etiqueta del campo numérico. */}
                    <label>Número: </label>

                    {/* Input donde el usuario introduce el número. */}
                    <input
                        type="number"
                        ref={this.cajaNumero}
                    />

                    {/* Envía el formulario para calcular la tabla. */}
                    <button>Mostrar tabla</button>

                </form>

                {/* Tabla HTML donde mostraremos las operaciones. */}
                <table>

                    {/* Cabecera de la tabla. */}
                    <thead>
                        <tr>
                            <th>Operación</th>
                            <th>Resultado</th>
                        </tr>
                    </thead>

                    {/* Cuerpo de la tabla con los datos calculados. */}
                    <tbody>

                        {/* Recorremos el array tabla del estado.
                            Cada objeto representa una fila. */}
                        {this.state.tabla.map((fila, index) => {
                            return (
                                // Creamos una fila por cada objeto.
                                <tr key={index}>

                                    {/* Mostramos la operación. */}
                                    <td>{fila.operacion}</td>

                                    {/* Mostramos el resultado. */}
                                    <td>{fila.resultado}</td>

                                </tr>
                            )
                        })}

                    </tbody>

                </table>

            </div>
        )
    }
}