import React, { Component } from 'react'
import axios from 'axios'
import Global from '../components/Global'

export default class ServiceEmpleados extends Component {
    getEmpleados() {
        return new Promise(function (resolve) {
            let url = Global.urlApiEmpleados;
            let request = "api/Empleados";
            axios.get(url + request).then((response ) => {
                console.log("Leyendo empleados");
                resolve(response.data);
            })
        })
    }
    
    getOficios() {
        return this.getEmpleados()
            .then((empleados) => {
                let oficios = empleados.map(
                    (empleado) => empleado.oficio
                );

                return [...new Set(oficios)]
                    .filter((oficio) => oficio);
            });
    }

    getEmpleadosOficio(oficio) {
        return this.getEmpleados()
            .then((empleados) => {
                return empleados.filter(
                    (empleado) =>
                        empleado.oficio === oficio
            );
        });
    }
    render() {
        return (
        <div>
            <h1>Service Empleados</h1>
        </div>
        )
    }
}

