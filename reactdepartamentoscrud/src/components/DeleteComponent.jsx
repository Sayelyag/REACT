import React, { Component } from 'react'
import ServicesDepartamentos from '../services/ServicesDepartamentos'
import { Navigate, NavLink } from 'react-router-dom';

export default class DeleteComponent extends Component {
        service = new ServicesDepartamentos();

        state={
            departamento:[],
            status : false,
            mensaje: ""
        }

        idDepartamento = this.props.idDepartamento.id;

        obtenerDepartamento =(idDepartamento) =>{
            this.service.obtenerDepartamento(idDepartamento).then((response)=>{
                this.setState({
                    departamento: response
                })
            })
        }

        DeleteComponent = () => {
            this.service.deleteDepartamento(this.idDepartamento).then((response)=>{
                this.setState({
                    status: true
                })
            })
        }

        componentDidMount = () => {
            this.obtenerDepartamento(this.idDepartamento)
        }
    render() {
        return (
        <div style={{display:"flex", flexDirection: "column", marginTop:"70px", padding : "20px",border : "10px solid #FFC5D3" , width: "fit-content", borderRadius: "8px", justifyContent:"center", alignItems:"center", margin: "40px auto 0"}}>
                {
                    this.state.status &&
                    (<Navigate to="/home" state={{mensaje : "Actualizar"}}/>)
                }
                <h1>Estas seguro de que quieres borrar??</h1>
                <div style={{display: "flex", flexDirection:"row", gap:"25px"}}>
                    <h2>Nombre: {this.state.departamento.nombre}</h2>
                    <h2>Localidad: {this.state.departamento.localidad}</h2>
                </div>
                <div style={{display: "flex", flexDirection:"row", gap:"5px"}}>
                    <button className="btn" style={{backgroundColor: "#FFC5D3", }} onClick={this.DeleteComponent}>SEGURO</button> 
                    <NavLink className="btn" to="/" style={{backgroundColor: "#FFC5D3", }}>CANCELAR</NavLink>
                </div>
        </div>
        
        )
    }
}