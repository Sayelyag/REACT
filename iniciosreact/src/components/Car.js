// Importamos useState de React para guardar y actualizar el estado del componente.
import { useState } from "react";

// Creamos el componente Car, que recibe información mediante props.
function Car(props) {

    // Guardamos si el coche está encendido o apagado.
    // false significa apagado y true significa encendido.
    // setEstado permite modificar el estado del coche.
    const [estado, setEstado] = useState(false);

    // Guardamos la velocidad actual del coche.
    // Inicialmente, la velocidad es 0 km/h.
    // setVelocidad permite actualizar la velocidad.
    const [velocidad, setVelocidad] = useState(0);

    // Creamos un objeto coche con los datos recibidos mediante props.
    let coche = {

        // Guardamos la marca recibida del componente padre.
        marca: props.marca,

        // Guardamos el modelo recibido del componente padre.
        modelo: props.modelo,

        // Convertimos la velocidad máxima recibida en un número entero.
        // OJO: el nombre "velocidamaxima" debe coincidir con el usado al
        // pasar las props desde el componente padre.
        velocidadmaxima: parseInt(props.velocidamaxima),

        // Convertimos la aceleración recibida en un número entero.
        aceleracion: parseInt(props.aceleracion)

    }

    // Creamos una función que devuelve un mensaje según el estado del coche.
    // React mostrará el resultado cuando llamemos a esta función en el JSX.
    const comprobarEstado = () => {

        // Si estado es true, mostramos el mensaje de coche arrancado.
        if (estado == true) {

            // Mostramos el título en color azul.
            return (<h1 style={{ color: "blue" }}>Arrancado</h1>)

        } else {

            // Si estado es false, mostramos el título en color rojo.
            return (<h1 style={{ color: "red" }}>Apagado</h1>)

        }
    }

    // Creamos una función para acelerar el coche.
    const acelerarCoche = () => {

        // Comprobamos si el coche está apagado.
        if (estado == false) {

            // Mostramos un aviso indicando que no se puede acelerar.
            alert("El coche está apagado, ande vas???")

            // Si está apagado, dejamos la velocidad a 0 km/h.
            setVelocidad(0);

        } else {

            // Si la velocidad actual ya es igual o superior a la máxima,
            // establecemos la velocidad máxima.
            if (velocidad >= coche.velocidadmaxima) {

                setVelocidad(coche.velocidadmaxima);

            } else {

                // Si todavía no hemos alcanzado la velocidad máxima,
                // aumentamos la velocidad según la aceleración del coche.
                setVelocidad(velocidad + coche.aceleracion);

            }
        }
    }

    // Devolvemos el contenido que se mostrará en pantalla.
    return (
        <div>

            {/* Mostramos la marca y el modelo del coche */}
            <h1>{coche.marca} {coche.modelo}</h1>

            {/* Mostramos el estado del coche:
                azul si está arrancado y rojo si está apagado */}
            {comprobarEstado()}

            {/* Mostramos la velocidad actual en color fucsia */}
            <h2 style={{ color: "fuchsia" }}>
                Velocidad actual: {velocidad}
            </h2>

            {/* Al pulsar el botón, cambiamos el estado del coche:
                true pasa a false y false pasa a true */}
            <button onClick={() => {
                setEstado(!estado);
            }}>
                On/Off coche
            </button>

            {/* Al pulsar el botón, ejecutamos la función que acelera */}
            <button onClick={() => acelerarCoche()}>
                Acelerar {coche.aceleracion} km/h
            </button>

        </div>
    );
}

// Exportamos el componente para utilizarlo en otros archivos.
export default Car;