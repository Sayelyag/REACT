import React, { Component } from 'react'
import ServiceHospitales from '../services/ServicesHospitales'


export default class TrabajadoresComponent extends Component {
    service = new ServiceHospitales
    state = {
        trabajadores: []
    }   

    loadTrabajadores = async () => {
        let idhospitales = this.props.idhospitales;
        let data = "";
        for(let id of idhospitales) {
            // CORRECCIÓN 1: Sin espacios alrededor del signo igual
            data += "idhospital=" + id + "&";
        }
        data = data.substring(0, data.length -1);
        let datos = await this.service.getTrabajadoresHospitales(data);
        this.setState({
            trabajadores: datos
        })
    }
 
    componentDidMount = async () => {
        // CORRECCIÓN 2: Paréntesis añadidos para ejecutar la función
        await this.loadTrabajadores();
    }
 
    componentDidUpdate = async (oldProps) => {
        if (oldProps.idhospitales != this.props.idhospitales){
            // CORRECCIÓN 3: Paréntesis añadidos para ejecutar la función
            await this.loadTrabajadores();
        }
    }

    render() {
        return (
        <div>
            <h1
            style={{
                color: "#cd5c85",
                textAlign: "center",
                marginBottom: "25px",
                fontWeight: "bold"
            }}>
                Trabajadores Component
            </h1>
            <table className='table table-bordered'>
                <thead
                    style={{
                        border: "2px solid #9b0024",
                        textAlign: "center",
                        width: "80%",
                        margin: "0 auto"
                    }}
                >
                    <tr>
                        <th style={{backgroundColor: "#f4a6b8",color: "#702d43"}}>Apellido</th>
                        <th style={{backgroundColor: "#f4a6b8",color: "#702d43"}}>Oficio</th>
                        <th style={{backgroundColor: "#f4a6b8",color: "#702d43"}}>Salario</th>
                        <th style={{backgroundColor: "#f4a6b8",color: "#702d43"}}>Hospital</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.trabajadores.map((t, index) => {
                            return(<tr key = {index}>
                                <td style={{backgroundColor: "#f4a6b8",color: "#702d43"}}>{t.apellido}</td>
                                <td style={{backgroundColor: "#f4a6b8",color: "#702d43"}}>{t.oficio}</td>
                                <td style={{backgroundColor: "#f4a6b8",color: "#702d43"}}>{t.salario}</td>
                                <td style={{backgroundColor: "#f4a6b8",color: "#702d43"}}>{t.idHospital}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
        )
    }
}
