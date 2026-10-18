import axios from 'axios';
import Global from '../components/Global';

// La carpeta services sirve para guardar las llamadas al API
// no tener que escribirlas directamente dentro de cada componente.

export default class ServiceClubs {

    async obtenerClubs() {
        let url = Global.urlApiEjemplos;
        let request = "api/equipos";

        let response = await axios.get(url + request);
        return response.data;
    }

    async obtenerClub(id) {
        let url = Global.urlApiEjemplos;
        let request = "api/equipos/" + id;

        let response = await axios.get(url + request);
        return response.data;
    }

    async obtenerJugadoresClub(id) {
        let url = Global.urlApiEjemplos;
        let request = "api/jugadores/jugadoresEquipos/" + id;

        let response = await axios.get(url + request);
        return response.data;
    }

    async obtenerJugador(id) {
        let url = Global.urlApiEjemplos;
        let request = "api/jugadores/" + id;

        let response = await axios.get(url + request);
        return response.data;
    }

    async obtenerJugadoresNombre(nombre) {
        let url = Global.urlApiEjemplos;
        let request = "api/jugadores/findjugadores/" + nombre;

        let response = await axios.get(url + request);
        return response.data;
    }

    async obtenerApuestas() {
        let url = Global.urlApiEjemplos;
        let request = "api/apuestas";

        let response = await axios.get(url + request);
        return response.data;
    }

    async insertarApuesta(apuesta) {
        let url = Global.urlApiEjemplos;
        let request = "api/apuestas";

        let response = await axios.post(url + request, apuesta);
        return response.data;
    }

    
    // Elimina una apuesta mediante su identificador
    async deleteApuestas(idApuesta) {
        let url = Global.urlApiEjemplos;
        let request = "api/apuestas/" + idApuesta;

        let response = await axios.delete(url + request);
        console.log("Apuesta eliminada: " + idApuesta);

        return response.data;
    }
}