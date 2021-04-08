import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { PlanesAuth } from '../../services/PlanesAuth';
import axios from 'axios';
import { CreateClinica } from '../../services/CreateClinica';


function CrearClinica() {
    const history = useHistory();

    //variables de clinica
    const [nombre, setNombre] = useState("");
    const [logo, setLogo] = useState(null);
    const [subDescripcion, setSubDescripcion] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [apr1, setApr1] = useState("");
    const [apr2, setApr2] = useState("");
    const [categoria, setCategoria] = useState([]);
    const [categorias, setCategorias] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //let Token = sessionStorage.getItem("Token");
        //if (Token == null) {
          //  history.push("/Inicio");
        //}
        
        const data = axios.get("http://127.0.0.1:8000/api/categorias").then((response) => {
                let datos = [];
                response.data.map((doc)=>{
                    datos.push({
                        id: doc.id,
                        nombre: doc.nombre
                    });
                });

                setCategorias(datos);
                setLoading(true); 
            });


                       
        //return () => data();

    }, []);

    const clinica = () => {
        let cate = JSON.stringify(categoria);
        let UsuarioId = sessionStorage.getItem("Id");
        let data = {
            nombre: nombre,
            logo: logo,
            subDescripcion: subDescripcion,
            descripcion: descripcion,
            apr1: apr1,
            apr2: apr2,
            userId: UsuarioId,
            categoriaId: cate
        }   
        CreateClinica(formData(data));
    }

    const formData = (obj) => {
        var form_data = new FormData();
        for (var key in obj) {
            form_data.append(key, obj[key]);
        }
        return form_data;
    }
        
    
        /*
    const checkboxController = event =>{
        setCategoria(prev =>([
            ...prev,
            [event.target.value]
        ]));
        console.log("checkedItems: ", categoria);
    }
    */
    return (
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle text-center mb-100">
                            <span>Crear clinica</span>
                            <h2>Coloca tus datos para tu clinica</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <form className="contact-form row">
                        <div className="form-field col-lg-6">
                            <input id="name" className="input-text js-input" type="text" onChange={(event) => setNombre(event.target.value)} />
                                <label className="label">Nombre</label>
                            </div>
                            <div className="form-field col-lg-6 ">
                                <input id="logo" className="input-text js-input" type="file" onChange={(event) => setLogo(event.target.files[0])}/>
                                    <label className="label my-5">Logo</label>
                                </div>
                                <div className="form-field col-lg-6 ">
                                    <input id="subDescripcion" className="input-text js-input" type="text" onChange={(event) => setSubDescripcion(event.target.value)}/>
                                        <label className="label">Sub descripcion</label>
                                </div>
                                    <div className="form-field col-lg-6 ">
                                        <input id="descripcion" className="input-text js-input" type="text" onChange={(event) => setDescripcion(event.target.value)}/>
                                            <label className="label">Descripcion</label>
                                </div>
                                        <div className="form-field col-lg-6">
                                            <input id="apr1" className="input-text js-input" type="number" onChange={(event) => setApr1(event.target.value)}/>
                                                <label className="label">Precio minimo de sus servicios</label>
                                </div>
                                <div className="form-field col-lg-6">
                                            <input id="apr2" className="input-text js-input" type="number" onChange={(event) => setApr2(event.target.value)}/>
                                                <label className="label">Precio maximo de sus servicios</label>
                                </div>
                                {
                                    loading ? 
                                    categorias.map((element)=>
                                    <div className="form-field col-lg-4" key={element.id}>
                                    <label className="label">{element.nombre}</label>
                                    <input id={element.id} value={element.id} 
                                    className="input-text js-input" 
                                    type="checkbox" 
                                    onChange={(event) => setCategoria(prev =>([ ...prev, event.target.value ])) }/>
                                    </div>)
                                    :
                                    <div>Cargando categorias ....</div> 
                                
                                }

                                <div className="form-field col-lg-12 text-center">
                                    <span className="btn btn-outline-info btn-lg" onClick={()=>{
                                        clinica();
                                    }}>Crear clinica</span>
                                </div>

                                
                                
                                </form>
                                        </div>
                                    </div>


        </>

    );

}


export default CrearClinica;