// Creamos el componente hijo, que recibe información mediante props.
function SaludoHijo(props) {

    // Guardamos en una variable el método que recibimos del padre.
    // props.metodoPadre contiene la función definida en SaludoPadre.
    let ejecutarPadre = props.metodoPadre;

    // Devolvemos el contenido que se mostrará en pantalla.
    return (
        <div>

            {/* Mostramos el título del componente hijo */}
            <h2>Saludo hijo</h2>

            {/* Cuando se pulsa el botón, llamamos al método del padre.
                Le enviamos el texto "Luke Skywalker" como argumento. */}
            <button onClick={() => ejecutarPadre("Luke Skywalker")}>
                Llamar al parent
            </button>

        </div>
    );
}

// Exportamos el componente hijo para poder utilizarlo en otros archivos.
export default SaludoHijo;