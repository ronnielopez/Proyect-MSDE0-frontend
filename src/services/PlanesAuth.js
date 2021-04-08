import { config } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";
import { data } from "jquery";
import swal from "sweetalert";

export function PlanesAuth(estado) {

    let id = sessionStorage.getItem("Id");


    /*
    const config = async () => {
        const { data } = await axios.get("http://127.0.0.1:8000/api/token");
        return {
            headers: {
                'X-CSRF-TOKEN': data
            }
        };
    }*/

        //const token = await config();
        const bearer = sessionStorage.getItem("Token");
        //console.log(token.headers["X-CSRF-TOKEN"]);
        axios.defaults.headers.common.Authorization = `Bearer  ${bearer}`;
        const dataSubmit = {
            estado: estado
        }
;

        axios.put(`http://127.0.0.1:8000/api/planes/${id}`, dataSubmit.estado).then((response) => {
            
            if (dataSubmit.estado.estado === 3) {
                swal({ title: 'Disfruta de tus beneficios estandar', icon: 'success', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false }).then(value => { window.location.href = '#/NuevaClinica'; window.location.reload(true); });
            }
            else if (dataSubmit.estado.estado === 4) {
                swal({ title: 'Disfruta de tus beneficios Gold', icon: 'success', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false }).then(value => { window.location.href = '#/NuevaClinica'; window.location.reload(true); });
            }
            else {
                swal({ title: 'Disfruta de tus beneficios Premium', icon: 'success', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false }).then(value => { window.location.href = '#/NuevaClinica'; window.location.reload(true); });
            }
        }).catch((error) => {
            swal({ title: 'Hubo un error en completar tu solicitud', icon: 'error', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false });
            console.log(error.response);
        });
            

    
    
}