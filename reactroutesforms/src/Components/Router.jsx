// Importamos Component para crear un componente de clase.
import { Component } from "react";

// Importamos los componentes necesarios para configurar las rutas:
// BrowserRouter: activa la navegación de React Router.
// Routes: agrupa las rutas disponibles.
// Route: define cada ruta y el componente que se muestra.
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importamos los componentes que queremos mostrar en cada ruta.
import Home from "./Home";
import Cine from "./Cine";
import Musica from "./Musica";
import FormSimple from "./FormSimple";
import Collatz from "./Collatz";

// Creamos y exportamos el componente Router.
export default class Router extends Component {

    // render() define la estructura de navegación de la aplicación.
    render() {
        return (
            // Envuelve la aplicación para habilitar la navegación
            // mediante las rutas de React Router.
            <BrowserRouter>

                {/* Contiene todas las rutas de la aplicación. */}
                <Routes>

                    {/* Si la URL es "/", mostramos el componente Home. */}
                    <Route path="/" element={<Home />} />

                    {/* Si la URL es "/cine", mostramos Cine. */}
                    <Route path="/cine" element={<Cine />} />

                    {/* Si la URL es "/musica", mostramos Musica. */}
                    <Route path="/musica" element={<Musica />} />

                    {/* Si la URL es "/FormSimple", mostramos FormSimple. */}
                    <Route path="/FormSimple" element={<FormSimple />} />

                    {/* Si la URL es "/Collatz", mostramos Collatz. */}
                    <Route path="/Collatz" element={<Collatz />} />

                </Routes>

            </BrowserRouter>
        );
    }
}