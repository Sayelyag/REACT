// Creamos un componente funcional llamado MatematicasHijo.
// Recibe props, que contienen los datos y funciones que le envía el padre.
function MatematicasHijo(props) {

    // Guardamos en una variable la función dobleNumero que recibimos del padre.
    let ejecutarDoble = props.dobleNumero;

    // Guardamos en una variable la función tripleNumero que recibimos del padre.
    let ejecutarTriple = props.tripleNumero;

    // Devolvemos el contenido HTML que se mostrará en pantalla.
    return (
        <div>

            {/* Título de la sección para calcular el doble */}
            <h2>Doble</h2>

            {/* Al pulsar el botón, ejecutamos la función del padre
                enviándole el número 5 como argumento. */}
            <button onClick={() => ejecutarDoble(5)}>
                Calcular doble (5)
            </button>

            {/* Título de la sección para calcular el triple */}
            <h2>Triple</h2>

            {/* Al pulsar el botón, ejecutamos la función del padre
                enviándole el número 5 como argumento. */}
            <button onClick={() => ejecutarTriple(5)}>
                Calcular triple (5)
            </button>

        </div>
    );
}

// Exportamos el componente para poder utilizarlo en otros archivos.
export default MatematicasHijo;