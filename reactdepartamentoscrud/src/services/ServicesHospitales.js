import axios from "axios";
import Global from "../Global";

export default class ServiceHospitales {
    async getHospitales(){
        let url = Global.urlApiEjemplos;
        let request = "api/hospitales"
        let response = await axios.get(url + request);
        return response.data;
    }

    async getTrabajadoresHospitales(data) {
        let url = Global.urlApiEjemplos;
        let request = 'api/trabajadores/trabajadoreshospitales?' + data;
        console.log("URL: " + url + request)
        let response = await axios.get(url + request);
        return response.data;
    }
}