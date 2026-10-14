// Creamos un componente funcional llamado Saludo.
// Recibe props, que contienen los datos enviados por el componente padre.
function Saludo(props) {

    // Declaramos una variable con un mensaje de texto.
    // Este mensaje se mostrará dentro del componente.
    var mensaje = "Hoy es un gran día para aprender React";

    // Guardamos en la variable nombre el valor recibido mediante props.nombre.
    let nombre = props.nombre;

    // Devolvemos el contenido JSX que se mostrará en pantalla.
    return (
        <div>

            {/* Mostramos un título de bienvenida */}
            <h1>BUENASSS</h1>

            {/* Mostramos un mensaje junto al texto guardado en la variable mensaje */}
            <h2>Mi primer React!! {mensaje}</h2>

            {/* Mostramos el nombre y la edad recibidos mediante props */}
            <h2>
                Bienvenido, {nombre} y su edad es {props.edad}
            </h2>

        </div>
    );
}

// Exportamos el componente para poder utilizarlo en otros archivos.
export default Saludo;