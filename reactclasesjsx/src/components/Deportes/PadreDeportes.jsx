// Importamos Component para crear un componente basado en clases.
import { Component } from "react";

// Importamos el componente hijo que representa cada deporte.
import HijoDeportes from "./HijoDeportes";

// Creamos el componente padre PadreDeportes.
export default class PadreDeportes extends Component {

    // Creamos un array con los deportes que queremos mostrar.
    deportes = ["Futbol", "Basket", "Tenis", "Natacion", "Ciclismo"];

    // Declaramos el estado inicial del componente padre.
    // favorito empieza vacío porque todavía no se ha seleccionado ningún deporte.
    state = {
        favorito: ""
    }

    // Creamos un método que recibe el deporte seleccionado.
    mostrarFavorito = (deporteSeleccionado) => {

        // Actualizamos el estado del padre con el deporte recibido.
        this.setState({
            favorito: deporteSeleccionado
        })

    }

    // El método render devuelve el contenido que se mostrará en pantalla.
    render() {

        return (
            <div>

                {/* Mostramos el título principal del componente padre */}
                <h1>Padre Deportes</h1>

                {/* Mostramos el deporte favorito guardado en el estado del padre */}
                <h3 style={{ backgroundColor: "lightgreen" }}>
                    Su deporte favorito es: {this.state.favorito}
                </h3>

                {/* Recorremos el array deportes para crear un componente hijo por cada deporte */}
                {
                    this.deportes.map((sport, index) => {

                        // Devolvemos un componente hijo por cada elemento del array.
                        return (
                            <HijoDeportes

                                // Enviamos el nombre del deporte al hijo.
                                nombre={sport}

                                // Asignamos una key para que React identifique cada elemento.
                                key={index}

                                // Enviamos el método del padre al hijo mediante props.
                                // El hijo podría utilizarlo para comunicar la selección al padre.
                                mostrarFavorito={this.mostrarFavorito}

                            />
                        )
                    })
                }

            </div>
        )
    }
}