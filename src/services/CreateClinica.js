import { config } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";
import { data } from "jquery";
import swal from "sweetalert";

export function CreateClinica(clinica) {


        //const token = await config();
        const bearer = sessionStorage.getItem("Token");
        //console.log(token.headers["X-CSRF-TOKEN"]);
        axios.defaults.headers.common.Authorization = `Bearer  ${bearer}`;
        

        axios.post('http://127.0.0.1:8000/api/storeClinicas/', clinica).then((response) => {
            swal("Se Clinica ha sido ingresada correctamente");
        }).catch((error) => {
            swal({ title: 'Hubo un error en completar tu solicitud', icon: 'error', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false });
            console.log(error.response);
        });
            

    
    
}