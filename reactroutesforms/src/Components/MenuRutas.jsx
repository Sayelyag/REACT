// Importamos React y Component para crear un componente de clase.
import React, { Component } from 'react'

// Creamos y exportamos el componente MunuRutas.
// Este componente contiene el menú de navegación de la aplicación.
export default class MunuRutas extends Component {

    // render() define los elementos que se mostrarán en pantalla.
    render() {
        return (
            <div>

                {/* Lista que contiene las opciones del menú. */}
                <ul>

                    {/* Enlace a la página principal. */}
                    <li>
                        <a href='/'>HOME</a>
                    </li>

                    {/* Enlace a la página de cine. */}
                    <li>
                        <a href='/cine'>CINE</a>
                    </li>

                    {/* Enlace a la página de música. */}
                    <li>
                        <a href='/musica'>MÚSICA</a>
                    </li>

                    {/* Enlace a la página de selección múltiple. */}
                    <li>
                        <a href='/multiple'>Seleccion Multiple</a>
                    </li>

                </ul>

            </div>
        )
    }
}