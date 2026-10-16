import React, { Component } from 'react'
import TrabajadoresComponent from './TrabajadoresComponent'
import ServicesHospitales from '../services/ServicesHospitales'

export default class HospitalesMultiples extends Component {

    service = new ServicesHospitales()
    selectHospitales = React.createRef()

    state = {
        hospitales: [],
        hospitalesSeleccionados: []
    }

    loadHospitales = async () => {
        let datos = await this.service.getHospitales()

        this.setState({
            hospitales: datos
        })
    }

    componentDidMount = async () => {
        await this.loadHospitales()
    }

    getHospitalesSeleccionados = (event) => {
        event.preventDefault()
        let aux = []
        let opciones = this.selectHospitales.current.options
        for (let option of opciones) {
            if (option.selected) {
                aux.push(option.value)
            }
        }
        console.log(aux)
        this.setState({
            hospitalesSeleccionados: aux
        })
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
                    Hospitales Multiples
                </h1>

                <form>
                    <label>Seleccione Hospital</label>

                    <select
                        ref={this.selectHospitales}
                        className='form-control'
                        size='6'
                        multiple
                    >
                        {
                            this.state.hospitales.map((hospital, index) => {
                                return (
                                    <option
                                        key={index}
                                        value={hospital.idHospital}
                                    >
                                        {hospital.nombre}
                                    </option>
                                )
                            })
                        }
                    </select>

                    <button
                        onClick={this.getHospitalesSeleccionados}
                        className='btn btn-info'
                        style={{
                            backgroundColor: "#e88eaa",
                            color: "#ffffff",
                            fontWeight: "bold",
                            padding: "12px",
                            borderRadius: "10px",
                            border: "none"
                        }}
                    >
                        Mostrar Trabajadores
                    </button>
                </form>

                {
                    this.state.hospitalesSeleccionados.length != 0 &&
                    (<TrabajadoresComponent idhospitales={this.state.hospitalesSeleccionados}/>)
                }
            </div>
        )
    }
}