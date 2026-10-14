// Importamos React para utilizar createRef y Component
// para crear un componente de clase.
import React, { Component } from 'react'

// Creamos y exportamos el componente SeleccionMultiple.
export default class SeleccionMultiple extends Component {

    // Creamos una referencia para acceder al select
    // y consultar las opciones que contiene.
    selectMultiple = React.createRef()

    // Método que recupera los elementos seleccionados.
    mostrarSeleccionados = (event) => {

        // Evitamos que el formulario recargue la página.
        event.preventDefault();

        // Recuperamos todas las opciones del select.
        // Usamos options porque el select permite seleccionar
        // varios elementos y necesitamos revisar cada uno.
        let options = this.selectMultiple.current.options;

        // Variable donde iremos guardando los valores seleccionados.
        let data = "";

        // Recorremos todas las opciones del select.
        for (var opt of options) {

            // Comprobamos si la opción actual está seleccionada.
            if (opt.selected == true) {

                // Añadimos el valor de la opción a la cadena.
                data += opt.value + ", ";
            }
        }

        // Guardamos el resultado en el estado.
        // React actualizará el texto que aparece en pantalla.
        this.setState({
            seleccionados: data
        });
    }

    // Estado inicial del componente.
    // Al principio no hay elementos seleccionados para mostrar.
    state = {
        seleccionados: ""
    }

    // render() define el contenido que se mostrará en pantalla.
    render() {
        return (
            <div>

                {/* Título del ejercicio. */}
                <h1>Selección Múltiple</h1>

                {/* Muestra en rojo los elementos seleccionados. */}
                <h3 style={{ color: "red" }}>
                    {this.state.seleccionados}
                </h3>

                {/* Al enviar el formulario se ejecuta mostrarSeleccionados. */}
                <form onSubmit={this.mostrarSeleccionados}>

                    {/* Etiqueta que indica qué debe hacer el usuario. */}
                    <label>Seleccione elementos: </label>

                    {/* size indica cuántas opciones se muestran a la vez.
                        multiple permite seleccionar varias opciones.
                        ref permite acceder al select desde el componente. */}
                    <select
                        size="6"
                        multiple
                        ref={this.selectMultiple}
                    >

                        {/* Opciones que puede seleccionar el usuario. */}
                        <option>Elemento 1</option>
                        <option>Elemento 2</option>
                        <option>Elemento 3</option>
                        <option>Elemento 4</option>
                        <option>Elemento 5</option>
                        <option>Elemento 6</option>
                        <option>Elemento 7</option>
                        <option>Elemento 8</option>

                    </select>

                    {/* Envía el formulario para mostrar la selección. */}
                    <button>Show selected</button>

                </form>

            </div>
        )
    }
}