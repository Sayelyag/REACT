import { Component } from "react";

// Creamos un componente de clase llamado Contador.
class Contador extends Component {

    // Variable normal de la clase.
    // Empieza valiendo 1, pero no forma parte del estado de React.
    numero = 1;

    // Método que incrementa la variable normal.
    incrementarNumero = () => {

        // Sumamos 1 al valor de la variable numero.
        this.numero++;

        // Mostramos el nuevo valor en la consola del navegador.
        console.log("Número: " + this.numero);
    }

    // El state es el objeto que almacena los datos que React
    // debe controlar para actualizar la interfaz.
    state = {

        // Inicializamos valor con la prop llamada "state".
        // parseInt convierte el valor recibido en un número entero.
        valor: parseInt(this.props.state)
    }

    // Método que incrementa el valor almacenado en state.
    incrementarState = () => {

        // Creamos un array vacío para guardar títulos JSX.
        var titulos = [];

        // Añadimos tres elementos h1 al array.
        titulos.push(<h1>Titulo 1</h1>);
        titulos.push(<h1>Titulo 2</h1>);
        titulos.push(<h1>Titulo 3</h1>);

        // Para actualizar el state utilizamos setState().
        // Aquí incrementamos valor en una unidad.
        this.setState({
            valor: this.state.valor + 1
        });

        // IMPORTANTE:
        // El array titulos se crea, pero no se muestra en el render.
        // Por tanto, estos tres títulos no aparecen en pantalla.
    }

    // render() define los elementos que se muestran en pantalla.
    render() {
        return (
            <div>

                {/* Título principal del componente. */}
                <h1>Contador JSX</h1>

                {/* Muestra el valor actual del state en azul. */}
                <h3 style={{ color: "blue" }}>
                    Valor: {this.state.valor}
                </h3>

                {/* Al pulsar, incrementa el valor del state.
                    React actualiza la interfaz automáticamente. */}
                <button onClick={this.incrementarState}>
                    Incrementar State
                </button>

                {/* Al pulsar, incrementa la variable normal numero.
                    El nuevo valor se muestra en la consola. */}
                <button onClick={this.incrementarNumero}>
                    Incrementar numero
                </button>

                {/* Hace lo mismo que el botón anterior, pero
                    llama al método utilizando una función lambda. */}
                <button onClick={() => {
                    this.incrementarNumero();
                }}>
                    Incrementar numero con lambda
                </button>

            </div>
        );
    }
}

// Exportamos el componente para poder utilizarlo en otros archivos.
export default Contador;