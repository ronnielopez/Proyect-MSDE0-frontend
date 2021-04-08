import React, { useState, useEffect } from 'react';
import { Jumbotron, Button, Card, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router';
import axios from 'axios';
import  Modals from '../dashboard/Modal';


function MisClinicas() {
    const history = useHistory();
    const [clinicas, setClinicas] = useState(null);
    const [clinica, setClinica] = useState('');
    const [sucursal, setSucursal] = useState('');
    const [action, setAction] = useState('');
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [cargar, setCargar] = useState(false);
    let Token = sessionStorage.getItem("Token");
    
    useEffect(() => {
        if (Token == null) {
            history.push("/Inicio");
        }
        let id = sessionStorage.getItem("Id");
        axios.defaults.headers.common.Authorization = `Bearer  ${Token}`;
        const data = axios.get("http://127.0.0.1:8000/api/showApiClinicas/" + id).then((response) => {
            let datos = [];
            response.data.map((doc) => {
                datos.push({
                    id: doc.id,
                    nombre: doc.nombre,
                    descripcion: doc.descripcion,
                    subDescripcion: doc.subDescripcion,
                    logo: doc.logo,
                    apr1: doc.apr1,
                    apr2:doc.apr2,
                    categoria:doc.categoriaId
                });
            });

            setClinicas(datos);
            setLoading(true);
        });



        //return () => data();


    }, []);

    const sucursales = (element)=>{
        axios.defaults.headers.common.Authorization = `Bearer  ${Token}`;
        const datos = axios.get("http://127.0.0.1:8000/api/showApiSucursales/" + element.id).then((response) => {
                let datos = [];
                response.data.map((doc) => {
                    datos.push({
                        id: doc.id,
                        nombre:doc.nombre,
                        ubicacion:doc.ubicacion,
                        puntosReferencia:doc.puntosReferencia,
                        horarioI:doc.horarioI,
                        horarioF:doc.horarioF,
                        descripcion:doc.descripcion,
                        telefono:doc.telefono,
                        municipio:doc.municipio,
                        departamento:doc.departamento
                    });
                });

                setSucursal(datos);
                setAction(1);
                setShow(true);
                setCargar(true);
            });
          
    }
    return (
        <>
            <Jumbotron className="my-5">
                <h1 className="text-right my-5 pr-5">Mis Clinicas</h1>
            </Jumbotron>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-right">
                    <Button variant="primary" href="#/NuevaClinica">Crear clinica</Button>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row py-3">
                    {
                        loading ?
                            clinicas.map((element) =>
                                <div className="col" key={element.id}>
                                    <Card border="dark" style={{ width: '18rem' }}>
                                        <Card.Header>{element.nombre}</Card.Header>
                                        <Card.Body>
                                            <Card.Title>{element.nombre}</Card.Title>
                                            <Card.Text>
                                                {element.descripcion}
                                            </Card.Text>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <Button variant="outline-primary" onClick={()=>{
                                                        setAction(0);
                                                        setClinica(element);
                                                        setShow(true);
                                                    }}>Editar</Button>
                                                </div>
                                                <div className="col-sm-6">
                                                    <Button variant="outline-warning" onClick={()=>{
                                                        sucursales(element);
                                                    }}>Sucursales</Button>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                            :
                            <div>Cargando .....</div>
                    }
                </div>
            </div>
               
                <Modals
                show={show}
                onHide={() => setShow(false)}
                animation={false}
                actionstate={action}
                clinica={clinica}
                sucursal={sucursal}
                 />
              
            
        </>
    );
}



export default MisClinicas;
