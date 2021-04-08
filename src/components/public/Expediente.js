import React, { useState } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Expediente() {

  return (
    <>
      <Jumbotron className="my-5">
        <h1 className="text-right my-5 pr-5">Expediente</h1>
      </Jumbotron>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle text-center mb-100">
              <h2>Expediente</h2>
            </div>
            <div class="row gutters-sm">


            <div class="col-md-12">
              <div class="card mb-3">
                <div class="card-body">

                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Nombre Completo</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {sessionStorage.getItem('Nombre')}
                    </div>
                  </div>

                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Correo</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                     {sessionStorage.getItem('Email')}
                    </div>
                  </div>

                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Suscripción</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {sessionStorage.getItem('plan')}
                    </div>
                  </div>

                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Rol</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {sessionStorage.getItem('status')}
                    </div>
                  </div>

                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Dirección</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        10ª Avenida Sur y Calle Lara No. 934, Barrio San Jacinto
                        <hr></hr>
                        <Link to="/Perfil" className="btn btn-primary">Volver a mi Perfil</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>






              
            </div>
          </div>
        </div>
      </div>
    
      <div className="container">
        
      </div>
          
    </>
  );
}

export default Expediente;
