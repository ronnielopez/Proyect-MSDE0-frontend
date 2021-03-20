import axios from 'axios';
import { cookie } from 'react-axios';
import swal from 'sweetalert';


export function loginAuth(email, password) {
    //const token = document.head.querySelector('meta[name="csrf-token"]');
    const dataSubmit = {
        email: email,
        password: password
    }
    //cookie.save('csrftoken', csfrtoken);

    /*const options = {
        headers: {'X-XSRF-TOKEN': token, 
        'X-Requested-With': 'XMLHttpRequest'}
            };*/

    

    axios.post("http://127.0.0.1:8000/api/login", dataSubmit).then((response) => {
        //console.log('Funciona xd.');
        //console.log(response.data.token);
        sessionStorage.setItem('Id', response.data.user.id);
        sessionStorage.setItem('Token', response.data.token);
        sessionStorage.setItem('Email', response.data.user.email);
        sessionStorage.setItem('Nombre', response.data.user.name);
        sessionStorage.setItem('Estado', response.data.user.estado);
        if (response.data.user.estado != 1) {
            swal({ title: 'Bienvenido', icon: 'success', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false }).then(value => { window.location.href = '#/Inicio'; window.location.reload(true); });
        }
        else {
            swal({ title: 'Te falta un paso para completar tu cuenta', icon: 'warning', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false }).then(value => { window.location.href = '#/Planes'; window.location.reload(true); });
        }

        return response.data;
    }).catch((error) => {
        //console.log(error.response.data);
        //console.log(error.response);
        swal({ title: 'Contraseña o Correo incorrecto', icon: 'error', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false });
        return error.response;
    })


}