import React, { useEffect, useState } from 'react';
import { Jumbotron, Button, Card, Modal } from 'react-bootstrap';
import axios from 'axios';

function Modals(props) {
    const [nombre, setNombre] = useState("");
    const [logo, setLogo] = useState(null);
    const [subDescripcion, setSubDescripcion] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [apr1, setApr1] = useState("");
    const [apr2, setApr2] = useState("");
    const [categoria, setCategoria] = useState([]);
    const [categorias, setCategorias] = useState(null);
    const [loading, setLoading] = useState(false);
    const [accion, setAccion] = useState(0);
    const [accion2, setAccion2] = useState(true);
    const [sucursalEditar, setSucursalEditar] = useState('');
    const clinica = props.clinica;
    const sucursal = props.sucursal;
    const actionstate = props.actionstate;
    const handleClose = props.onHide;

    useEffect(() => {
            const data = axios.get("http://127.0.0.1:8000/api/categorias").then((response) => {
                let datos = [];
                response.data.map((doc) => {
                    datos.push({
                        id: doc.id,
                        nombre: doc.nombre
                    });
                });

                setCategorias(datos);
                setLoading(true);
            });
            return () => data();


    }, []);
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {actionstate == 0 ? 'Editar Clinica' : 'Sucursales'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {actionstate == 0 ? <h1>{clinica.nombre}</h1> : ''}
                    {actionstate == 0 ?
                        <>
                            <form className="contact-form row">
                                <div className="form-field col-lg-12">
                                    <input id="name" className="input-text js-input" value={clinica.nombre} type="text" onChange={(event) => setNombre(event.target.value)} />
                                    <label className="label">Nombre</label>
                                </div>
                                <div className="form-field col-lg-12 ">
                                    <input id="logo" className="input-text js-input" type="file" onChange={(event) => setLogo(event.target.files[0])} />
                                    <label className="label my-5">Logo</label>
                                </div>
                                <div className="form-field col-lg-6 ">
                                    <input id="subDescripcion" className="input-text js-input" value={clinica.subDescripcion} type="text" onChange={(event) => setSubDescripcion(event.target.value)} />
                                    <label className="label">Sub descripcion</label>
                                </div>
                                <div className="form-field col-lg-6 ">
                                    <input id="descripcion" className="input-text js-input" value={clinica.descripcion} type="text" onChange={(event) => setDescripcion(event.target.value)} />
                                    <label className="label">Descripcion</label>
                                </div>
                                <div className="form-field col-lg-6">
                                    <input id="apr1" className="input-text js-input" type="number" value={clinica.apr1} onChange={(event) => setApr1(event.target.value)} />
                                    <label className="label">Precio minimo de sus servicios</label>
                                </div>
                                <div className="form-field col-lg-6">
                                    <input id="apr2" className="input-text js-input" type="number" value={clinica.apr2} onChange={(event) => setApr2(event.target.value)} />
                                    <label className="label">Precio maximo de sus servicios</label>
                                </div>
                                {
                                    loading ?
                                        categorias.map((element) =>
                                            <div className="form-field col-lg-6" key={element.id}>
                                                <label className="label">{element.nombre}</label>
                                                <input id={element.id} value={element.id}
                                                    className="input-text js-input"
                                                    type="checkbox"
                                                    onChange={(event) => setCategoria(prev => ([...prev, event.target.value]))} />
                                            </div>)
                                        :
                                        <div>Cargando categorias ....</div>

                                }
                            </form>
                        </>
                        :  
                        <>
                        {accion2 ? 
                        <>
                        <Button variant='success' className="my-2" onClick={()=>{
                            setAccion(1);
                            setAccion2(false);
                        }}>Crear Sucursal</Button>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col" className="text-right">
                                            Accion
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        sucursal.map((element)=>
                                        <tr key={element.id}>
                                            <td>{element.id}</td>
                                            <td>{element.nombre}</td>
                                            <td><Button variant='warning' onClick={()=>{
                                                setAccion(2);
                                                setAccion2(false);
                                                setSucursalEditar(sucursalEditar);
                                            }}>Editar</Button></td>
                                            <td><Button variant='primary'>Doctores</Button></td>
                                        </tr>
                                    )}
                                </tbody>
                            </table> 
                            </> : <SucursalManage
                                    accion = {accion}
                                    clinica = {clinica}
                                    sucursal = {sucursalEditar}
                                    handleClose = {handleClose}
                                    /> }
                        </>
                }
                </Modal.Body >
    <Modal.Footer>
        <Button variant='secondary' onClick={props.onHide}>Cerrar</Button>
        {actionstate == 0 ? <Button variant='primary'>Editar</Button> : ''}
    </Modal.Footer>
            </Modal >
        </>
    );
}

function SucursalManage(props){
    const [nombre, setNombre] = useState("");
    const [ubicacion, setUbicacion] = useState("");
    const [puntosReferencias, setPuntosReferencias] = useState("");
    const [horarioI, setHorarioI] = useState("");
    const [horarioF, setHorarioF] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [telefono, setTelefono] = useState("");
    const [municipio, setMunicipio] = useState("");
    const [departamento, setDepartamento] = useState("");
    let accion = props.accion;

    switch (accion){
        case 1:
            return( 
            <>
        <form className="contact-form row">
            <div className="form-field col-lg-12">
                <input id="name" className="input-text js-input" type="text" onChange={(event) => setNombre(event.target.value)} />
                <label className="label">Nombre</label>
            </div>
            <div className="form-field col-lg-12">
                <input id="ubicacion" className="input-text js-input" type="text" onChange={(event) => setUbicacion(event.target.value)} />
                <label className="label">Ubicacion</label>
            </div>
            <div className="form-field col-lg-12">
                <input id="puntos" className="input-text js-input" type="text" onChange={(event) => setPuntosReferencias(event.target.value)} />
                <label className="label">Puntos de Referencia</label>
            </div>
            <div className="form-field col-lg-12">
                <input id="horarioI" className="input-text js-input" type="text" onChange={(event) => setHorarioI(event.target.value)} />
                <label className="label">Horario de inicio</label>
            </div>
            <div className="form-field col-lg-12">
                <input id="horarioF" className="input-text js-input" type="text" onChange={(event) => setHorarioF(event.target.value)} />
                <label className="label">Horario de fin</label>
            </div>
            <div className="form-field col-lg-12">
                <input id="telefono" className="input-text js-input" type="text" onChange={(event) => setTelefono(event.target.value)} />
                <label className="label">Telefono</label>
            </div>
            <div className="form-field col-lg-12">
                <input id="municipio" className="input-text js-input" type="text" onChange={(event) => setMunicipio(event.target.value)} />
                <label className="label">Municipio</label>
            </div>
            <div className="form-field col-lg-12">
                <input id="departamento" className="input-text js-input" type="text" onChange={(event) => setDepartamento(event.target.value)} />
                <label className="label">Departamento</label>
            </div>
            <div className="form-field col-lg-12 ">
                <input id="descripcion" className="input-text js-input" type="text" onChange={(event) => setDescripcion(event.target.value)} />
                <label className="label">Descripcion</label>
            </div>
        </form>
        <Button variant="success"> Crear Sucursal</Button>                         
            </>);
        break;
        
        case 2: 
           <>
           
           </>
        break;
        

        default: 
        <>
        <div className="my-5"> Cargandoo .... </div>
        </>
    }

}

export default Modals;