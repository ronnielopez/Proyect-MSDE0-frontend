import React, { useState } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

function Clinicas() {

  return (
    <>
      <Jumbotron className="my-5">
        <h1 className="text-right my-5 pr-5">Clinicas</h1>
      </Jumbotron>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle text-center mb-100">
              <span>¿Estas buscando una clinica?</span>
              <h2>Las mejores clinicas</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
<ul id="cardClinica">
  <li class="booking-card" >
    <div class="book-container">
      <div class="content">
        <button class="btn">Has tu cita</button>
      </div>
    </div>
    <div class="informations-container">
      <h2 class="title">Clinica de las mejores dental</h2>
      <p class="sub-title">Trabajos en odontologia</p>
      <p class="price"><svg class="icon iconClinica" viewBox="0 0 24 24">
    <path fill="currentColor" d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
    </svg>De 0 a 15 $</p>
      <div class="more-information">
        <div class="info-and-date-container">
          <div class="box info">
            <svg class="icon iconClinica" viewBox="0 0 24 24">
      <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
        </svg>
            <p>Horararios flexibles</p>
          </div>
          <div class="box date">
            <svg class="icon iconClinica" viewBox="0 0 24 24">
      <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
      </svg>
            <p>Abierto de Lunes a Viernes</p>
          </div>
        </div>
        <p class="disclaimer">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio</p>
        </div>
    </div>
  </li>
  </ul>  
      </div>
          
    </>
  );
}

export default Clinicas;
