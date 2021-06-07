import React, { useEffect, useState } from 'react';
import { loginAuth } from '../../services/LoginAuth';
import  swal  from 'sweetalert';
import { useHistory , Link} from 'react-router-dom';

function Login() {
    const history = useHistory();
    useEffect(()=>{
        let token = sessionStorage.getItem("Token");
        let email = sessionStorage.getItem("Email");
        let nombre = sessionStorage.getItem("Nombre");
        if(token != null && email != null && nombre != null){
            history.push("/Inicio");   
            
        }
    },[]);
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const login = async({ email, password }) => {
        let user = loginAuth(email, password);
        //console.log(user);
        await user;
        
    }
    return (
        <>

            <div className="container-fluid">
                <div className="row no-gutter">

                    <div className="col-md-6 d-none d-md-flex bg-image"></div>



                    <div className="col-md-6 bg-light">
                        <div className="login d-flex align-items-center py-5">


                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-10 col-xl-7 mx-auto">
                                        <h3 className="display-4">Alpha-Medic</h3>
                                        <p className="text-muted mb-4">Bienvenido!!</p>
                                        <form>
                                            <div className="form-group mb-3">
                                                <input id="inputEmail" type="email" placeholder="Correo Electronico" className="form-control rounded-pill border-0 shadow-sm px-4" onChange={(event) => setEmail(event.target.value)} />
                                            </div>
                                            <div className="form-group mb-3">
                                                <input id="inputPassword" type="password" placeholder="Contraseña" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" onChange={(event) => setPass(event.target.value)} />
                                            </div>
                                            <Link className="form-group mb-2" to="/Recuperar">Olvidó su contraseña?</Link>
                                            <span className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" onClick={() => {
                                                login({ email: email, password: pass });
                                            }}>Ingresar</span>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        </>
    );
}

export default Login;
