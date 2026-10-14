import axios from "axios";
import Global from "../components/Global";
 
export default class ServiceHospitales {
    getDoctoresHospital(idHospital) {
        return new Promise(function (resolve, reject) {
            let url = Global.urlApiDoctores;
            let request = "api/doctores/doctoreshospital/" + idHospital;

            console.log("ID del hospital:", idHospital);
            console.log("URL de doctores:", url + request);

            axios.get(url + request)
                .then((response) => {
                    console.log("Leyendo doctores");
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
    getHospitales() {
        return new Promise(function (resolve) {
            let url = Global.urlApiHospitales;
            let request = "api/hospitales";
            axios.get(url + request).then((response ) => {
                console.log("Leyendo hospitales");
                resolve(response.data);
            })
        })
    }
}