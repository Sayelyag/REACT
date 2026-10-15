import React, { Component } from 'react'
import loading from './loading.gif'
import ServiceDepartamentos from '../services/ServicesDepartamentos'
import { NavLink } from 'react-router-dom'

export default class HomeComponents extends Component {
    service = new ServiceDepartamentos()
    state = {
        departamentos: [],
        status: false
    }

    deleteDepartamento = (idDepartamento) => {
        this.service.deleteDepartamentos(idDepartamento).then((result) => {
            this.loadDepartamentos();
        })
    }

    loadDepartamentos = () => {
        this.service.getDepartamentos().then((result) =>{
            this.setState({
                departamentos:result,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.loadDepartamentos();
    }
    render() {
        if (this.state.status === true) {
            return (
                <div>
                    <h1 style={{ color: "lightpink", textAlign: "center"}}>
                        Home Components
                    </h1>
                    <table className = "table table-info"
                        style={{
                            border: "2px solid #9b0024",
                            textAlign: "center",
                            width: "80%",
                            margin: "0 auto"
                        }}>
                        <thead>
                            <tr>
                                <th style={{backgroundColor: "#f4a6b8",color: "#702d43"}}>Nombre</th>
                                <th style={{backgroundColor: "#f4a6b8",color: "#702d43"}}>Localidad</th>
                                <th style={{backgroundColor: "#f4a6b8",color: "#702d43"}}>Editar</th>
                                <th style={{backgroundColor: "#f4a6b8",color: "#702d43"}}>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.departamentos.map((dept, index) => {
                                    return (<tr key={index}>
                                        <td style={{backgroundColor: "#f4a6b8",color: "#702d43"}}>{dept.nombre}</td>
                                        <td style={{backgroundColor: "#f4a6b8",color: "#702d43"}}>{dept.localidad}</td>
                                        <td style={{backgroundColor: "#f4a6b8",color: "#702d43"}}>
                                            <NavLink className="btn btn-info" to={"/update/" + dept.numero + "/" + dept.nombre + "/" + dept.localidad} 
                                                style={{
                                                    width: "100%",
                                                    backgroundColor: "#e88eaa",
                                                    color: "#ffffff",
                                                    fontWeight: "bold",
                                                    padding: "12px",
                                                    borderRadius: "10px",
                                                    border: "none"
                                                }}>
                                                Edit
                                            </NavLink>
                                        </td>
                                        
                                        <td style={{backgroundColor: "#f4a6b8",color: "#702d43"}}>
                                            <button
                                                className="btn"
                                                onClick={() => this.deleteDepartamento(dept.numero)}
                                                style={{
                                                    backgroundColor: "#e88eaa",
                                                    color: "#ffffff",
                                                    fontWeight: "bold",
                                                    padding: "12px",
                                                    borderRadius: "10px",
                                                    border: "none"
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh"
                    }}
                >
                    <img
                        src={loading}
                        alt="loading..."
                        width="300"
                        height="300"
                        className="rounded-circle me-2"
                    />
                </div>
            )
        }
    }
}
                                                                                        