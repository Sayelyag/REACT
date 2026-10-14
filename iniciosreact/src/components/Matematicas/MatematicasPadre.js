// Importamos el componente hijo para poder utilizarlo en este archivo.
import MatematicasHijo from "./MatematicasHijo";

// Creamos el componente padre.
function MatematicasPadre() {

    // Definimos una función que recibe un número.
    // Calcula su doble y muestra el resultado en la consola.
    const dobleNumero = (numero) => {
        console.log(
            "El doble de " + numero + " es: " + (numero * 2)
        );
    }

    // Definimos una función que recibe un número.
    // Calcula su triple y muestra el resultado en la consola.
    const tripleNumero = (numero) => {
        console.log(
            "El triple de " + numero + " es: " + (numero * 3)
        );
    }

    // Devolvemos el contenido que se mostrará en pantalla.
    return (
        <div>

            {/* Título principal del componente padre */}
            <h1>Matematicas</h1>

            {/* Insertamos el componente hijo.
                Le pasamos las dos funciones mediante props:
                dobleNumero y tripleNumero. */}
            <MatematicasHijo
                dobleNumero={dobleNumero}
                tripleNumero={tripleNumero}
            />

        </div>
    );
}

// Exportamos el componente padre para poder utilizarlo en otro archivo.
export default MatematicasPadre;