import React, { Component } from 'react'
import ServiceEjemplo from '../services/ServiceEjemplo';

export default class EjemploServiceComponent extends Component {
    service = new ServiceEjemplo();
    state = {
        mensaje1: "",
        mensaje2: "",
        comics: []
    }
    loadData = () => {
        this.setState({
            mensaje1: this.service.getSaludo(),
            mensaje2: this.service.getDia("Alumno"),
            comics: this.service.getComics()
        })
    }
    componentDidMount = () => {
        this.loadData();
    }

    render() {
        return (
        <div>
            <h1>Ejemplo Service Component</h1>
            <h2 style={{color: "lightpinck"}}>{this.state.mensaje1}</h2>
            <h2 style={{color: "lightcoral"}}>{this.state.mensaje2}</h2>
            <h2 style={{color: "lightgreen"}}>{this.state.comics.length}</h2>
            {
                this.state.comics.map((comics, index) => {
                    return(<div key = {index}>
                        <h2>{comics.titulo}</h2>
                        <img src = {comics.imagen} style = {{widtg: "120px", height: "300px"}} />
                    </div>)
                })
            }
        </div>
        )
    }
}
