import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {

    state = {
        tabla: []
    }

    generarTablaMultiplicar = () => {
        let aux = []
        let numero = parseInt(this.props.numero)

        for (let i = 1; i <= 10; i++) {
            let resultado = numero * i
            aux.push(resultado)
        }

        this.setState({
            tabla: aux
        })
    }

    componentDidMount = () => {
        this.generarTablaMultiplicar()
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.numero !== this.props.numero) {
            this.generarTablaMultiplicar()
        }
    }

    render() {
        return (
            <div>
                <h1>Tabla Multiplicar Routing</h1>

                <h3 style={{ color: "blue" }}>
                    Numero: {this.props.numero}
                </h3>

                <ul>
                    {
                        this.state.tabla.map((num, index) => {
                            return (
                                <li key={index}>
                                    {this.props.numero} x {index + 1} = {num}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}