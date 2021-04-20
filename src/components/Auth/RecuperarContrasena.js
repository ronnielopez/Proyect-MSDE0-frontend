import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { CambiarContra, RecuperarContra } from '../../services/RecuperarContra';
import { Form } from 'react-bootstrap';


function Recuperar() {

    const [accion, setAccion] = useState(1);
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState("");

    const [pin, setPin] = useState('');

    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');

    const recuperar = async () => {
        if (email) {
            const data = await RecuperarContra(email);
            if (data.status === 201) {
                swal({ title: 'Siguiente paso', icon: 'success', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false });
                setUsuario(data);
                setAccion(2);
                setEmail('');
            }
        }
    };

    const verificacionPin = () => {
        if (pin === usuario.data.pin) {
            swal({ title: 'Ultimo paso', icon: 'success', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false });
            setAccion(3);
        }
        else {
            swal({ title: 'Pin incorrecto', icon: 'error', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false });
        }
    };

    const cambioContra = () => {

        if (password === repassword) {

            CambiarContra(usuario.data.id , password);
        } else {
            swal({ title: 'No coincide las contraseñas', icon: 'error', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false });
        }
    }

    return (
        <>

            <div className="container-fluid">
                <div className="row no-gutter">

                    <div className="col-md-6 d-none d-md-flex bg-image"></div>



                    <div className="col-md-6 bg-light">
                        <div className="login d-flex align-items-center py-5">


                            <div className="container">
                                {accion === 1 ?
                                    <div className="row">
                                        <div className="col-lg-10 col-xl-7 mx-auto">
                                            <h3 className="display-4">Has olvidado tu contraseña?</h3>
                                            <p className="text-muted mb-4">Ingresa tu correo electronico</p>
                                            <form>
                                                <div className="form-group mb-3">
                                                    <input id="inputEmail" type="email" placeholder="Correo Electronico" className="form-control rounded-pill border-0 shadow-sm px-4" onChange={(event) => setEmail(event.target.value)} />
                                                </div>
                                                <span className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" onClick={() => {
                                                    recuperar();
                                                }}>Recuperar contraseña</span>
                                            </form>
                                        </div>
                                    </div>
                                    :
                                    accion === 2 ?
                                        <div className="row">
                                            <div className="col-lg-10 col-xl-7 mx-auto">
                                                <h3 className="display-4">Ingrese el pin</h3>
                                                <p className="text-muted mb-4">El pin fue enviado a su correo electronico</p>
                                                <Form>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Control type="text" placeholder="Pin" className="rounded-pill border-0 shadow-sm px-4" onChange={(event) => setPin(event.target.value)}/>
                                                    </Form.Group>
                                                    <span className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" onClick={() => {
                                                        verificacionPin();
                                                    }}>Verificar Pin</span>
                                                </Form>
                                            </div>
                                        </div>
                                        :
                                        <div className="row">
                                            <div className="col-lg-10 col-xl-7 mx-auto">
                                                <h3 className="display-4">Cambie su contraseña</h3>
                                                <p className="text-muted mb-4">Cambie su contraseña</p>
                                                <form>
                                                    <div className="form-group mb-3">
                                                        <input id="inputPassword" type="password" placeholder="Contraseña nueva" className="form-control rounded-pill border-0 shadow-sm px-4" onChange={(event) => setPassword(event.target.value)} />
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <input id="inputPassword2" type="password" placeholder="Repita la contraseña" className="form-control rounded-pill border-0 shadow-sm px-4" onChange={(event) => setRepassword(event.target.value)} />
                                                    </div>
                                                    <span className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" onClick={() => {
                                                        cambioContra();
                                                    }}>Cambiar contraseña</span>
                                                </form>
                                            </div>
                                        </div>
                                }
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        </>
    );
}

export default Recuperar;
