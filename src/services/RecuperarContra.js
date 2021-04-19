import axios from 'axios';
import  swal  from 'sweetalert';




export function RecuperarContra(email) {
    const dataSubmit = {
        email: email
    }

    axios.post("http://127.0.0.1:8000/api/recuperar", dataSubmit).then((response) => {
        swal({ title: 'Pin enviado a su correo electronico', icon: 'success', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false });
        return response.data;
 
    }).catch((error) => {

        swal({ title: 'Hubo un error al enviar la contraseña', icon: 'error', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false });
        return error.response;   
    });


}

export function CambiarContra(password) {
    const dataSubmit = {
        password: password
    }

    axios.post("http://127.0.0.1:8000/api/cambiarContra", dataSubmit).then((response) => {
        swal({ title: 'Contraseña actualizada correctament', icon: 'success', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false }).then(value => { window.location.href = '#/Inicio'; window.location.reload(true); });
        return response.data;
 
    }).catch((error) => {

        swal({ title: 'Hubo un error al cambiar la contraseña', icon: 'error', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false });
        return error.response;   
    });


}