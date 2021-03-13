import React from 'react';

function Registrar() {
    return (
    <>
            <div className="container-fluid">
                <div className="row no-gutter">
                    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
                    <div className="col-md-8 col-lg-6">
                        <div className="login d-flex align-items-center py-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-9 col-lg-8 mx-auto">
                                        <h3 className="login-heading mb-4">Registrar</h3>
                                        <p className="text-muted">Unirte a nosotros es tan facil.....</p>
                                        <form>
                                        <div className="form-label-group">
                                                <input type="text" id="inputEmail" className="form-control" placeholder="Nombre completo" required />
                                                    <label>Nombre completo</label>
                                                </div>
                                            <div className="form-label-group">
                                                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
                                                    <label>Correo electronico</label>
                                                </div>

                                                <div className="form-label-group">
                                                    <input type="password" id="inputPassword" className="form-control" placeholder="Contraseña" required />
                                                        <label>Contraseña</label>
                                                </div>
                                                <div className="form-label-group">
                                                    <input type="password" id="inputPassword2" className="form-control" placeholder="Repita su contraseña" required />
                                                        <label>Repita su contraseña</label>
                                                </div>
                                                <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Registrarse</button>
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
