import React, {useEffect, useState} from 'react';
import { RegisterAuth } from '../../services/RegisterAuth';
import { loginAuth } from '../../services/LoginAuth';

function Registrar() {
    //variables
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [rpass, setRpass] = useState("");

    useEffect(()=>{
    }, []);

    const verificacion= (pass, rpass)=>{
        if(pass === rpass){
            return true
        }else{
            return false
        }
    }
    const register = async({name, email, password})=>{
        let register = await RegisterAuth(name , email, password);

    }

    return (
    <>
            <div className="container-fluid">
                <div className="row no-gutter">
                    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
                    <div className="col-md-8 col-lg-6">
                        <div className="login d-flex align-items-center py-5">
                            <div className="container">
                                <div className="row">
                                <div className="col-lg-10 col-xl-7 mx-auto">
                                        <h3 className="display-4">Registrate</h3>
                                        <p className="text-muted mb-4">Empieza ya con nosotros!!</p>
                                        <form>
                                        <div className="form-group mb-3">
                                                <input id="inputNombre" type="text" placeholder="Nombre Completo" className="form-control rounded-pill border-0 shadow-sm px-4"  onChange={(event) => setNombre(event.target.value)}/>
                                            </div>
                                        <div className="form-group mb-3">
                                                <input id="inputEmail" type="email" placeholder="Correo Electronico" className="form-control rounded-pill border-0 shadow-sm px-4"  onChange={(event) => setEmail(event.target.value)}/>
                                            </div>
                                            <div className="form-group mb-3">
                                                <input id="inputPassword" type="password" placeholder="Contraseña" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" onChange={(event) => setPass(event.target.value)}/>
                                            </div>
                                            <div className="form-group mb-3">
                                                <input id="inputPassword2" type="password" placeholder="Repetir contraseña" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" onChange={(event) => setRpass(event.target.value)}/>
                                            </div>

                                                <span className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" onClick={()=>{
                                                    if(verificacion(pass, rpass)){
                                                        register({name:nombre, email:email, password:pass});
                                                    }
                                                }}>Registrarse</span>
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

export default Registrar;
