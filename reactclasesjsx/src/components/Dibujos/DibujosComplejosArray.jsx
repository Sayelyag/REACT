// Importamos Component para crear un componente basado en clases.
import { Component } from "react";

// Creamos la clase DibujosComplejosArray.
class DibujosComplejosArray extends Component {

    // Creamos un método que genera una lista de números aleatorios.
    dibujarNumeros = () => {

        // Creamos un array vacío donde guardaremos los elementos JSX.
        let lista = [];

        // Repetimos el bucle 10 veces, desde i = 1 hasta i = 10.
        for (let i = 1; i <= 10; i++) {

            // Generamos un número entero aleatorio entre 1 y 120.
            // Math.random() genera un decimal desde 0 hasta menos de 1.
            // Al multiplicarlo por 120 y sumar 1 tras parseInt(),
            // obtenemos un número entre 1 y 120.
            var num = parseInt(Math.random() * 120) + 1;

            // Añadimos al array un elemento <li> con el número generado.
            // key={i} permite a React identificar cada elemento de la lista.
            lista.push(<li key={i}>{num}</li>);

        }

        // Devolvemos el array de elementos JSX para mostrarlos en pantalla.
        return lista;
    }

    // render() define el contenido que se mostrará en pantalla.
    render() {

        return (
            <div>

                {/* Mostramos el título del componente */}
                <h1>Dibujos Complejos Array</h1>

                {/* Creamos una lista HTML sin ordenar */}
                <ul>

                    {/* Ejecutamos el método que genera y devuelve los números */}
                    {this.dibujarNumeros()}

                </ul>

            </div>
        );
    }
}

// Exportamos el componente para utilizarlo en otros archivos.
export default DibujosComplejosArray;