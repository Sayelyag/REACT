// Importamos el componente hijo para poder utilizarlo en este archivo.
import SaludoHijo from "./SaludoHijo";

// Creamos el componente padre.
function SaludoPadre() {

    // Creamos un método que recibe un nombre como parámetro.
    // Este método se ejecutará cuando el hijo lo llame.
    const metodoPadre = (nombre) => {

        // Mostramos un mensaje en la consola del navegador.
        console.log("Yo soy tu padre, " + nombre);

    }

    // Devolvemos el contenido que se mostrará en pantalla.
    return (
        <div>

            {/* Mostramos el título del componente padre */}
            <h1>Saludo padre</h1>

            {/* Enviamos el método metodoPadre al primer componente hijo
                mediante una prop llamada metodoPadre. */}
            <SaludoHijo metodoPadre={metodoPadre} />

            {/* Creamos otro componente hijo y le enviamos el mismo método.
                Ambos hijos pueden utilizar la función del padre. */}
            <SaludoHijo metodoPadre={metodoPadre} />

        </div>
    );
}

// Exportamos el componente padre para poder utilizarlo en otros archivos.
export default SaludoPadre;