import axios from 'axios';
import  swal  from 'sweetalert';




export function RecuperarContra(email) {
    const dataSubmit = {
        email: email
    }

    return axios.post("http://127.0.0.1:8000/api/recuperar", dataSubmit);


}

export function CambiarContra(id, password) {
    const data = {
        id: id,
        password: password
    }
    
    
    axios.post("http://127.0.0.1:8000/api/cambiarContra", data).then((response) => {
        swal({ title: 'Contraseña actualizada correctament', icon: 'success', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false }).then(value => { window.location.href = '#/Inicio'; window.location.reload(true); });
        return response.data;
 
    }).catch((error) => {

        swal({ title: 'Hubo un error al cambiar la contraseña', icon: 'error', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false });
        return error.response;   
    });


}