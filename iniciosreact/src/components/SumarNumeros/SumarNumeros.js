// Importamos el archivo CSS que contiene los estilos del componente.
import './SumarNumeros.css';

// Creamos el componente funcional SumarNumeros.
// Recibe props por si necesita recibir información de otro componente.
function SumarNumeros(props) {

    // Creamos una función llamada Sumar que recibe dos números.
    const Sumar = (num1, num2) => {

        // Sumamos los valores numero1 y numero2 recibidos mediante props.
        let suma = props.numero1 + props.numero2;

        // Mostramos en la consola los números y el resultado de la suma.
        console.log(
            "La suma de " + props.numero1 + " y " +
            props.numero2 + " es: " + suma
        );

    }

    // Devolvemos el contenido que se mostrará en pantalla.
    return (
        <div>

            {/* Mostramos el título principal */}
            <h1>Sumar Números</h1>

            {/* Imagen comentada: no se mostrará mientras esté comentada */}
            {/* <img src={lol} /> */}

            {/* Al pulsar el botón, llamamos a Sumar pasando los números 5 y 10 */}
            <button
                className="button"
                onClick={() => { Sumar(5, 10); }}
            >
                Sumar 5 y 10
            </button>

            {/* Al pulsar el botón, llamamos a Sumar pasando los números 20 y 30 */}
            <button
                className="button"
                onClick={() => { Sumar(20, 30); }}
            >
                Sumar 20 y 30
            </button>

            {/* Al pulsar el botón, llamamos a Sumar pasando los números 100 y 200 */}
            <button
                className="button"
                onClick={() => { Sumar(100, 200); }}
            >
                Sumar 100 y 200
            </button>

        </div>
    );
}

// Exportamos el componente para poder utilizarlo en otros archivos.
export default SumarNumeros;