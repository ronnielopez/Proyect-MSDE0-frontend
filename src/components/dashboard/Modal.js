import React, { useEffect, useState, useRef } from 'react';
import { Jumbotron, Button, Card, Modal } from 'react-bootstrap';
import axios from 'axios';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import { storeDoctores , editDoctores} from '../../services/Doctores';
import { storeSucursales, editSucursal } from '../../services/Sucursal';

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
    const [mapa, setMapa] = useState(false);
    const [accion, setAccion] = useState(0);
    const [accion2, setAccion2] = useState(true);
    const [sucursalEditar, setSucursalEditar] = useState('');
    const [doctores, setDoctores] = useState('');
    const [clinicas, setClinicas] = useState('');
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
        // return () => data();
    }, []);

    const getDoctores = ((id) => {
        const data = axios.get("http://127.0.0.1:8000/api/showApiDoctores/" + id).then((response) => {
            let datos = [];
            response.data.map((doc) => {
                datos.push({
                    id: doc.id,
                    nombre: doc.nombre,
                    descripcion:doc.descripcion,
                    categoriaId: doc.categoriaId,
                });
            });

            setDoctores(datos);
        });
    });

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
                                    <Button variant='success' className="my-2" onClick={() => {
                                        setAccion(1);
                                        setAccion2(false);
                                        setSucursalEditar(null);
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
                                                sucursal.map((element) =>
                                                    <tr key={element.id}>
                                                        <td>{element.id}</td>
                                                        <td>{element.nombre}</td>
                                                        <td><Button variant='warning' onClick={() => {
                                                            setSucursalEditar(element);
                                                            setAccion(1);
                                                            setAccion2(false);
                                                        }}>Editar</Button></td>
                                                        <td><Button variant='primary' onClick={() => {
                                                            getDoctores(element.id);
                                                            setAccion(3);
                                                            setAccion2(false);
                                                        }}>Doctores</Button></td>
                                                    </tr>
                                                )}
                                        </tbody>
                                    </table>
                                </> : <>
                                    <Button variant='secondary' className="my-2" onClick={() => {
                                        setAccion2(true);
                                    }}>Regresar a todas las sucursales</Button>
                                    <SucursalManage
                                        accion={accion}
                                        clinica={clinica}
                                        sucursal={sucursalEditar}
                                        doctores={doctores}
                                        categorias={categorias}
                                        handleClose={handleClose}
                                    />
                                    {console.log(clinica)}
                                </>}
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

function SucursalManage(props) {
    //publico-----------------------------------------
    let sucursal = props.sucursal;
    let categorias = props.categorias;
    let clinica = props.clinica;
    const [accion, setAccion] = useState(props.accion);

    //sucursal---------------------------------------------------
    const [nombre, setNombre] = useState("");
    const [ubicacion, setUbicacion] = useState('');
    const [puntosReferencias, setPuntosReferencias] = useState("");
    const [horarioI, setHorarioI] = useState("");
    const [horarioF, setHorarioF] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [telefono, setTelefono] = useState("");
    const [municipio, setMunicipio] = useState("");
    const [departamento, setDepartamento] = useState("");
    const [address, setAddress] = useState('');
    const [lng, setLng] = useState(-88.7547);
    const [lat, setLat] = useState(13.7706);
    const [zoom, setZoom] = useState(7.65);
    const Mapasubi = (lat , lng , zoom)=>{
        setZoom(zoom); 
        setLat(lat); 
        setLng(lng); 
        setUbicacion([lat, lng]); 
        setAccion(1);
    }
    const crearSuc = (() => {
        let data = {
            nombre:nombre,
            ubicacion:"" + ubicacion,
            puntosReferencia:puntosReferencias,
            horarioI:horarioI,
            horarioF:horarioF,
            descripcion:descripcion,
            telefono:telefono,
            municipio:municipio,
            departamento:departamento,
            clinicaId:clinica.id 
        }

       storeSucursales(data);
    });

    const editSuc = (() => {
        let data = {
            id: sucursal.id,
            nombre:nombre ? nombre : sucursal.nombre,
            ubicacion:ubicacion ? ubicacion : sucursal.ubicacion,
            puntosReferencia:puntosReferencias ? puntosReferencias : sucursal.puntosReferencia,
            horarioI:horarioI ? horarioI : sucursal.horarioI,
            horarioF:horarioF ? horarioF : sucursal.horarioF,
            descripcion:descripcion ? descripcion : sucursal.descripcion,
            telefono:telefono ? telefono : sucursal.telefono,
            municipio:municipio ? municipio : sucursal.municipio,
            departamento:departamento ? departamento : sucursal.departamento
        }

       editSucursal(data);
    });


    //doctores----------------------------------------------
    const [doctores, setDoctores] = useState(props.doctores);
    const [doctor, setDoctor] = useState('');
    const [nombreDoc, setNombreDoc] = useState('');
    const [foto, setFoto] = useState('');
    const [descripcionDoc, setDescripcionDoc] = useState('');
    const [categoria, setCategoria] = useState([]);
    const crearDoc = (() => {
        let data = {
            nombre: nombreDoc,
            foto: foto,
            descripcion: descripcionDoc,
            sucursalId: sucursal.id,
            categoriaId: categoria
        }

        storeDoctores(formData(data));
    });
    const editarDoc = (() => {
        let data = {
            id: doctor.id,
            nombre: nombreDoc ? nombreDoc : doctor.nombre,
            foto: foto ? foto : doctor.foto,
            descripcion: descripcionDoc ? descripcionDoc : doctor.descripcion,
            sucursalId: sucursal.id,
            categoriaId: categoria ? categoria : doctor.categoria
        }

        editDoctores(formData(data));
    });
    const formData = (obj) => {
        var form_data = new FormData();
        for (var key in obj) {
            form_data.append(key, obj[key]);
        }
        return form_data;
    }

    switch (accion) {
        case 1:
            return (
                <>
                    <form className="contact-form row">
                        <div className="form-field col-lg-12">
                            <input id="name" className="input-text js-input" type="text" defaultValue={sucursal ? sucursal.nombre : ''} onChange={(event) => setNombre(event.target.value)} />
                            <label className="label">Nombre</label>
                        </div>
                        <div className="form-field col-lg-11">
                            <input id="ubicacion" className="input-text js-input" type="text" defaultValue={sucursal ? sucursal.ubicacion : ubicacion} disabled={true} onChange={(event) => setUbicacion(event.target.value)} />
                            <label className="label">Ubicacion</label>
                        </div>
                        <div className="form-field col-lg-1">
                            <Button variant="primary" onClick={() => {
                                setAccion(2);
                            }}>+</Button>
                        </div>
                        <div className="form-field col-lg-12">
                            <input id="puntos" className="input-text js-input" type="text" defaultValue={sucursal ? sucursal.puntosReferencia : ''} onChange={(event) => setPuntosReferencias(event.target.value)} />
                            <label className="label">Puntos de Referencia</label>
                        </div>
                        <div className="form-field col-lg-12">
                            <input id="horarioI" className="input-text js-input" type="text" defaultValue={sucursal ? sucursal.horarioI : ''} onChange={(event) => setHorarioI(event.target.value)} />
                            <label className="label">Horario de inicio</label>
                        </div>
                        <div className="form-field col-lg-12">
                            <input id="horarioF" className="input-text js-input" type="text" defaultValue={sucursal ? sucursal.horarioF : ''} onChange={(event) => setHorarioF(event.target.value)} />
                            <label className="label">Horario de fin</label>
                        </div>
                        <div className="form-field col-lg-12">
                            <input id="telefono" className="input-text js-input" type="text" defaultValue={sucursal ? sucursal.telefono : ''} onChange={(event) => setTelefono(event.target.value)} />
                            <label className="label">Telefono</label>
                        </div>
                        <div className="form-field col-lg-12">
                            <input id="municipio" className="input-text js-input" type="text" defaultValue={sucursal ? sucursal.municipio : ''} onChange={(event) => setMunicipio(event.target.value)} />
                            <label className="label">Municipio</label>
                        </div>
                        <div className="form-field col-lg-12">
                            <input id="departamento" className="input-text js-input" type="text" defaultValue={sucursal ? sucursal.departamento : ''} onChange={(event) => setDepartamento(event.target.value)} />
                            <label className="label">Departamento</label>
                        </div>
                        <div className="form-field col-lg-12 ">
                            <input id="descripcion" className="input-text js-input" type="text" defaultValue={sucursal ? sucursal.descripcion : ''} onChange={(event) => setDescripcion(event.target.value)} />
                            <label className="label">Descripcion</label>
                        </div>
                    </form>
                    {sucursal ?  <Button variant="primary" onClick={()=>{
                        editSuc();
                    }}> Editar Sucursal</Button>
                    :  
                    <Button variant="success" onClick={()=>{
                        crearSuc();
                    }}> Crear Sucursal</Button>}
                   
                </>);
            break;

        case 2:
            return (
                <>
                    <Mapa
                        lng={lng}
                        lat={lat}
                        zoom={zoom}
                        onChange={(lat, lng, zoom) => { lat ? Mapasubi(lat, lng, zoom) : setAccion(1) }}
                    />
                </>
            );
            break;


        case 3:
            return (
                <>
                    <Button variant='primary' className="my-2 ml-2" onClick={() => {
                        setAccion(4);
                    }}>Crear Doctor</Button>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">
                                    Accion
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                doctores ?
                                    doctores.map((element) =>
                                        <tr key={element.id}>
                                            <td>{element.id}</td>
                                            <td>{element.nombre}</td>
                                            <td>
                                                <Button variant='warning' onClick={() => {
                                                    setDoctor(element);
                                                    setAccion(4);
                                                }}>Editar</Button>
                                            </td>
                                        </tr>
                                    ) :
                                    <tr>
                                        <td>Error al cargar el doctor vuelva a intentarlo</td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </>

            );
            break;

        case 4:
            return (<>
                <form className="contact-form row">
                    <div className="form-field col-lg-12">
                        <input id="name" className="input-text js-input" type="text" defaultValue={doctor ? doctor.nombre : ''} onChange={(event) => setNombreDoc(event.target.value)} />
                        <label className="label">Nombre</label>
                    </div>
                    <div className="form-field col-lg-12">
                        <input id="foto" className="input-text js-input" type="file" defaultValue={doctor ? doctor.foto : ''} onChange={(event) => setFoto(event.target.files[0])} />
                        <label className="label my-5">Foto</label>
                    </div>
                    <div className="form-field col-lg-12">
                        <input id="descripcion" className="input-text js-input" type="text" defaultValue={doctor ? doctor.descripcion : ''} onChange={(event) => setDescripcionDoc(event.target.value)} />
                        <label className="label">Descripcion</label>
                    </div>
                    {

                        categorias.map((element) =>
                            <div className="form-field col-lg-6" key={element.id}>
                                <label className="label">{element.nombre}</label>
                                <input id={element.id} value={element.id}
                                    className="input-text js-input"
                                    type="checkbox"
                                    onChange={(event) => setCategoria(prev => ([...prev, event.target.value]))} />
                            </div>
                        )

                    }
                    {doctor ?
                    <div className="form-field col-lg-12 text-center">
                        <span className="btn btn-outline-info btn-lg" onClick={() => {
                            editarDoc();
                        }}>Editar Doctor</span>
                    </div>
                   
                    :
                    <div className="form-field col-lg-12 text-center">
                        <span className="btn btn-outline-info btn-lg" onClick={() => {
                            crearDoc();
                        }}>Crear Doctor</span>
                    </div>
                    }
                </form>
            </>);
            break;

        default:
            <>
                <div className="my-5"> Cargandoo .... </div>
            </>
    }

}

function Mapa(props) {
    mapboxgl.workerClass = MapboxWorker;
    mapboxgl.accessToken = 'pk.eyJ1Ijoicm9ubmllbG9wZXpkZXYiLCJhIjoiY2tuNjE4djY0MDJtdTJvb3o5eGNrbWl0MyJ9.IQV2quI_DBlbSJP17rpVlg';
    const mapContainer = useRef();
    const [lng, setLng] = useState(props.lng);
    const [lat, setLat] = useState(props.lat);
    const [zoom, setZoom] = useState(props.zoom);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [lng, lat],
            zoom: zoom
        });

        let marker = new mapboxgl.Marker({
            color: "#000",
            draggable: true
            }).setLngLat([lng, lat])
            .addTo(map);
        
       
        map.on('move', () => {
            setLng(map.getCenter().lng.toFixed(4));
            setLat(map.getCenter().lat.toFixed(4));
            setZoom(map.getZoom().toFixed(2));
            console.log(marker.getLngLat().lat);
        });

        return () => map.remove();
    }, []);

    return (
        <>
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div className="container">
                <div className="map-container" ref={mapContainer}/>

            <Button variant="secondary" className="my-2" onClick={() => {
                props.onChange();
            }}>Volver</Button>
            <Button variant="primary" className="my-2 ml-2" onClick={() => {
                props.onChange(lat, lng, zoom);
            }}>Guardar direccion</Button>
            </div>
        </>
    );

}

export default Modals;