// Importamos useState de React para gestionar el estado del componente.
import { useState } from "react";

// Creamos el componente funcional Contador.
function Contador() {

    // Creamos una variable de estado llamada numero, inicializada en 0.
    // setNumero es la función que utilizaremos para modificar su valor.
    const [numero, setNumero] = useState(0);

    // Devolvemos el contenido que se mostrará en pantalla.
    return (
        <div>

            {/* Mostramos el título del contador */}
            <h1>Contador</h1>

            {/* Mostramos el valor actual de numero en color rojo */}
            <h3 style={{ color: 'red' }}>
                Contador: {numero}
            </h3>

            {/* Al pulsar el botón, aumentamos el contador en 1 */}
            <button onClick={() => setNumero(numero + 1)}>
                Incrementar
            </button>

            {/* Al pulsar el botón, disminuimos el contador en 1 */}
            <button onClick={() => setNumero(numero - 1)}>
                Decrementar
            </button>

            {/* Al pulsar el botón, reiniciamos el contador a 0 */}
            <button onClick={() => setNumero(0)}>
                Reiniciar
            </button>

        </div>
    );
}

// Exportamos el componente para poder utilizarlo en otros archivos.
export default Contador;