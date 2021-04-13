import { config } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";
import { data } from "jquery";
import swal from "sweetalert";

export function storeDoctores(doctor) {


        //const token = await config();
        const bearer = sessionStorage.getItem("Token");
        //console.log(token.headers["X-CSRF-TOKEN"]);
        axios.defaults.headers.common.Authorization = `Bearer  ${bearer}`;
        axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
        
    
        axios.post('http://127.0.0.1:8000/api/storeDoctores/', doctor).then((response) => {
            swal({ title: 'Doctor añadido correctamente', icon: 'success', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false });
        }).catch((error) => {
            swal({ title: 'Hubo un error en completar tu solicitud', icon: 'error', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false });
            console.log(error.response);
        });
    
}

export function editDoctores(doctor) {


    //const token = await config();
    const bearer = sessionStorage.getItem("Token");
    //console.log(token.headers["X-CSRF-TOKEN"]);
    axios.defaults.headers.common.Authorization = `Bearer  ${bearer}`;
    axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
    

    axios.put(`http://127.0.0.1:8000/api/editDoctores/${doctor.id}`, doctor).then((response) => {
        swal({ title: 'Doctor modificado correctamente', icon: 'success', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false });
    }).catch((error) => {
        swal({ title: 'Hubo un error en completar tu solicitud', icon: 'error', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false });
        console.log(error.response);
    });

}