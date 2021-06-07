import React, { useState, useEffect } from 'react';
import { Jumbotron, Button, Card, Modal } from 'react-bootstrap';
import axios from "axios";
import swal from "sweetalert";



function ModalClinica(props) {

    const [logo, setLogo] = useState("");
    let token = sessionStorage.getItem("Token");

   const getLogo = (log)=>{

        axios.get("http://127.0.0.1:8000/api/image/" + log).then((response) => {
          setLogo(response.data);
        });
   }

    return (
        <>
             <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                <div className="text-center">
                    {getLogo(props.datos.logo)}
                    <img src={logo} width="200px"/>
                    <h2>{props.datos.nombre}</h2>
                    <p>{props.datos.subDescripcion}</p>
                    <h4>Precios</h4>
                </div>
                <div className="row text-center">

                    <div className="col">
                        <h5>$ {props.datos.apr1}</h5>
                    </div>
                    <div className="col">
                    <h5>$ {props.datos.apr2}</h5>
                    </div>

                </div>

                <div className="text-center">
                    <h5>{props.datos.descripcion}</h5>
                </div>
                </Modal.Body >
                <Modal.Footer>
                    <Button variant='success' onClick={()=>{
                        if(token !== null){
                            props.onHide();
                            swal({ title: 'Cita realizada', icon: 'success', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false });
                            
                        }
                    }}>Has tú Cita</Button> 
                    <Button variant='secondary' onClick={props.onHide}>Cerrar</Button> 
                </Modal.Footer>
            </Modal >
        </>
    );
}

export default ModalClinica;
