import { Component } from "react";
import Comic from "./Comic";

// Componente padre que almacena y administra todos los cómics.
export default class Comics extends Component {

    // Estado inicial del componente.
    state = {

        // Array con los objetos de los cómics.
        comics: [
            {
                titulo: "Spiderman",
                imagen: "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
                descripcion: "Hombre araña"
            },
            {
                titulo: "Wolverine",
                imagen: "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
                descripcion: "Lobezno"
            },
            {
                titulo: "Guardianes de la Galaxia",
                imagen: "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
                descripcion: "Yo soy Groot"
            },
            {
                titulo: "Avengers",
                imagen: "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
                descripcion: "Los Vengadores"
            },
            {
                titulo: "Spawn",
                imagen: "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
                descripcion: "Al Simmons"
            },
            {
                titulo: "Batman",
                imagen: "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
                descripcion: "Murcielago"
            }
        ],

        // Guarda el cómic que el usuario ha seleccionado.
        // null significa que todavía no hay ningún favorito.
        favorito: null
    }

    // Recibe un cómic seleccionado desde el componente hijo.
    seleccionarComic = (comicFavorito) => {

        // Guarda el cómic seleccionado en el estado del padre.
        this.setState({
            favorito: comicFavorito
        });
    }

    // Elimina un cómic según la posición que ocupa en el array.
    deleteComic = (index) => {

        // splice elimina un elemento del array original.
        this.state.comics.splice(index, 1);

        // Actualiza el estado con el array modificado.
        this.setState({
            comics: this.state.comics
        });
    }

    render() {
        return (
            <div>

                {/* Título principal de la página. */}
                <h1>Comics</h1>

                {/* Solo muestra este bloque si existe un cómic favorito. */}
                {this.state.favorito &&
                    <div style={{ backgroundColor: "lightcoral" }}>

                        {/* Muestra el título del cómic seleccionado. */}
                        <h2>{this.state.favorito.titulo}</h2>

                        {/* Muestra la imagen del cómic seleccionado. */}
                        <img
                            src={this.state.favorito.imagen}
                            alt={this.state.favorito.titulo}
                            style={{ width: "60px", height: "80px" }}
                        />

                    </div>
                }

                {/* Recorre el array y crea un componente Comic por cada elemento. */}
                {this.state.comics.map((c, index) => {
                    return (
                        <Comic
                            // Identificador que React utiliza para distinguir
                            // cada elemento de la lista.
                            key={index}

                            // Envía el objeto del cómic al componente hijo.
                            comic={c}

                            // Envía la función para seleccionar un cómic.
                            seleccionarComic={this.seleccionarComic}

                            // Envía la posición del cómic en el array.
                            indice={index}

                            // Envía la función para eliminar un cómic.
                            deleteComic={this.deleteComic}
                        />
                    );
                })}

            </div>
        );
    }
}