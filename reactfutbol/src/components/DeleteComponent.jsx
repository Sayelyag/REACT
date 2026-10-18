
import React, { useState } from 'react'
import ServiceClubs from '../services/ServiceClubs'
import { Navigate, NavLink, useLocation } from 'react-router-dom'

export default function DeleteComponent() {

    const service = new ServiceClubs()

    // Recogemos los datos enviados desde ApuestasComponent
    const location = useLocation()
    const apuesta = location.state || {}

    // Guardamos el estado de la eliminación y los posibles errores
    const [status, setStatus] = useState(false)
    const [mensaje, setMensaje] = useState("")

    // Eliminamos la apuesta seleccionada
    const DeleteComponent = () => {
        service.deleteApuestas(apuesta.idApuesta)
            .then(() => {
                setStatus(true)
            })
            .catch((error) => {
                setMensaje(error.message)
            })
    }

    // Si se elimina correctamente, volvemos al listado
    if (status) {
        return <Navigate to="/Apuestas" />
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "70px",
            padding: "20px",
            border: "10px solid #FFC5D3",
            width: "fit-content",
            borderRadius: "8px",
            justifyContent: "center",
            alignItems: "center",
            margin: "40px auto 0"
        }}>

            <h1>¿Estás seguro de que quieres borrar?</h1>

            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px"
            }}>
                <h2>Usuario: {apuesta.usuario}</h2>
                <h2>Resultado: {apuesta.resultado}</h2>
                <h2>Fecha: {apuesta.fecha}</h2>
            </div>

            <p style={{ color: "red" }}>
                {mensaje}
            </p>

            <div style={{
                display: "flex",
                flexDirection: "row",
                gap: "5px"
            }}>
                <button
                    className="btn"
                    style={{ backgroundColor: "#FFC5D3" }}
                    onClick={DeleteComponent}
                >
                    SEGURO
                </button>

                <NavLink
                    className="btn"
                    to="/Apuestas"
                    style={{ backgroundColor: "#FFC5D3" }}
                >
                    CANCELAR
                </NavLink>
            </div>
        </div>
    )
}