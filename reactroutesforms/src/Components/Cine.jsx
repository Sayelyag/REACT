// Importamos React y Component para crear un componente de clase.
import React, { Component } from 'react'

// Creamos y exportamos el componente Cine.
export default class Cine extends Component {

    // render() define el contenido que se mostrará en pantalla.
    render() {

        return (
            <div>

                {/* Título principal de la página. */}
                <h1>Cine</h1>

                {/* Mostramos una imagen mediante su URL.
                    El atributo src indica dónde se encuentra la imagen.
                    El estilo establece su anchura y altura. */}
                <img
                    src="https://static.posters.cz/image/1300/249067.jpg"
                    alt="Póster de cine"
                    style={{ width: "120px", height: "200px" }}
                />

            </div>
        )
    }
}