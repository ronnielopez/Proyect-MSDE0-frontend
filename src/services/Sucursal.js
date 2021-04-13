import { config } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";
import { data } from "jquery";
import swal from "sweetalert";

export function storeSucursales(sucursal) {


        //const token = await config();
        const bearer = sessionStorage.getItem("Token");
        //console.log(token.headers["X-CSRF-TOKEN"]);
        axios.defaults.headers.common.Authorization = `Bearer  ${bearer}`;

        
        
        axios.post('http://127.0.0.1:8000/api/storeSucursal/', sucursal).then((response) => {
            swal({ title: 'Sucursal creada correctamente', icon: 'success', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false }).then(()=> window.location.reload(true));
        }).catch((error) => {
            swal({ title: 'Hubo un error en completar tu solicitud', icon: 'error', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false });
            console.log(error.response);
        });
    
}

export function editSucursal(sucursal){

    //const token = await config();
    const bearer = sessionStorage.getItem("Token");
    //console.log(token.headers["X-CSRF-TOKEN"]);
    axios.defaults.headers.common.Authorization = `Bearer  ${bearer}`;
   
    
    axios.put(`http://127.0.0.1:8000/api/editSucursal/${sucursal.id}`, sucursal).then((response) => {
        swal({ title: 'Sucursal editada correctamente', icon: 'success', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false }).then(()=> window.location.reload(true));
    }).catch((error) => {
        swal({ title: 'Hubo un error en completar tu solicitud', icon: 'error', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false });
        console.log(error.response);
    });
}