// Creamos el componente funcional DobleNumero.
function DobleNumero() {

    // Creamos una función que recibe un número como parámetro.
    const ejecutarDoble = (numero) => {

        // Calculamos el doble del número recibido multiplicándolo por 2.
        let doble = numero * 2;

        // Mostramos el número original y su doble en la consola del navegador.
        console.log("El doble de " + numero + " es: " + doble);

    }

    // Creamos una variable con un mensaje inicial.
    let mensaje = "Es Viernes";

    // Creamos una función para modificar el valor de mensaje.
    const cambiarMensaje = () => {

        // Mostramos el mensaje antes de modificarlo.
        console.log("Antes del cambio: " + mensaje);

        // Cambiamos el valor de la variable mensaje.
        mensaje = "Es Sabado";

        // Mostramos el mensaje después de modificarlo.
        console.log("Después del cambio: " + mensaje);

    }

    // Creamos un objeto con los estilos CSS que aplicaremos al título.
    var estilo = {
        // Establecemos el color del texto en azul.
        color: "blue",

        // Establecemos el color de fondo en amarillo.
        backgroundColor: "yellow",
    }

    // Devolvemos el contenido que se mostrará en pantalla.
    return (
        <div>

            {/* Mostramos el título aplicando los estilos del objeto estilo */}
            <h1 style={estilo}>Metodos Doble Número</h1>

            {/* Mostramos el contenido actual de la variable mensaje en azul */}
            <h2 style={{ color: "blue" }}>{mensaje}</h2>

            {/* Al pulsar el botón, ejecutamos la función que cambia el mensaje */}
            <button onClick={() => cambiarMensaje()}>
                Modificar Mensaje
            </button>

            {/* Al pulsar el botón, calculamos el doble de 10 y lo mostramos en consola */}
            <button onClick={() => ejecutarDoble(10)}>
                Doble 10
            </button>

            {/* Al pulsar el botón, calculamos el doble de 15 y lo mostramos en consola */}
            <button onClick={() => ejecutarDoble(15)}>
                Doble 15
            </button>

            {/* Al pulsar el botón, calculamos el doble de 20 y lo mostramos en consola */}
            <button onClick={() => ejecutarDoble(20)}>
                Doble 20
            </button>

        </div>
    );
}

// Exportamos el componente para poder utilizarlo en otros archivos.
export default DobleNumero;