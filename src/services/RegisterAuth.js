import axios from 'axios';
import  swal  from 'sweetalert';
import { loginAuth } from './LoginAuth';



export function RegisterAuth(name, email, password) {
    //const token = document.head.querySelector('meta[name="csrf-token"]');
    const dataSubmit = {
        name: name,
        email: email,
        password: password
    }
    //cookie.save('csrftoken', csfrtoken);

    /*const options = {
        headers: {'X-XSRF-TOKEN': token, 
        'X-Requested-With': 'XMLHttpRequest'}
            };*/
    
     
    axios.post("http://127.0.0.1:8000/api/registrar", dataSubmit).then((response) => {
        
        loginAuth(email,password);
        return response.data;
 
    }).catch((error) => {
        //console.log(error.response.data);
        //console.log(error.response);
        swal({ title: 'Hubo un error al registrarte', icon: 'error', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false });
        return error.response;   
    });


}