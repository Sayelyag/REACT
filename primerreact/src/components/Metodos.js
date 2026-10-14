// Creamos el componente funcional Metodos.
function Metodos() {

    // Declaramos una función llamada mostrarMensaje.
    const mostrarMensaje = () => {

        // Mostramos un mensaje en la consola del navegador.
        console.log("Mostrando Mensaje");

    }

    // Devolvemos el contenido que se mostrará en pantalla.
    return (
        <div>

            {/* Mostramos el título del ejemplo */}
            <h2>Ejemplo Metodos react</h2>

            {/* Al pulsar el botón, ejecutamos la función mostrarMensaje */}
            <button onClick={() => mostrarMensaje()}>
                Pulsar...
            </button>

        </div>
    );
}

// Exportamos el componente para poder utilizarlo en otros archivos.
export default Metodos;