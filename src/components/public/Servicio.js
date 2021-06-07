import React, { useState } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmbulance, faBong, faChartLine, faCogs, faCreditCard } from '@fortawesome/free-solid-svg-icons';


function Servicio() {
  return (
    <>
      <Jumbotron className="my-5">
        <h1 className="text-right my-5 pr-5">Servicios</h1>
      </Jumbotron>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle text-center mb-100">
              <span>Somos calidad</span>
              <h2>Nuestros servicios</h2>
            </div>
          </div>
        </div>
        </div>
        
        <div id="sec"> 
        <ul>
          <li>
            <FontAwesomeIcon className="iconoS"  icon={faCogs}/>
            <h3 className="py-4">Servicio 1: Seguridad</h3>
            <p className="text-center">Seguridad de datos personales y de informacion en la realizacion de citas, de una manera 
              confidencial.
            </p>
          </li>
          <li>
            <FontAwesomeIcon className="iconoS"  icon={faBong}/>
            <h3 className="py-4">Servicio 2: Medicamentos </h3>
            <p className="text-center">Obten ahora las recetas para tus medicamentos, puedes imprimir y conseguir recetas 
              100% certificadas por nuestros expertos</p>
          </li>
          <li>
            <FontAwesomeIcon className="iconoS"  icon={faChartLine}/>
            <h3 className="py-4">Servicio 3: Citas</h3>
            <p className="text-center">¡Pide tu cita ahora! Con fechas y horas que más te ayuden! Puedes tambien realizar por medio 
                de sus contactos telefonicos para poder firmar con mas tranquilidad tu cita</p>
          </li>
        </ul>
        </div>
        <div id="sec"> 
        <ul>
        <li>
            <FontAwesomeIcon className="iconoS"  icon={faAmbulance}/>
            <h3 className="py-4">Servicio 4: Delivery</h3>
            <p className="text-center">Si tienes problemas para adquirir tu cita, podemos contactar a la clinica y recibiras tu cita
              en tu hogar, todo esto a la alcance de tu mano.
            </p>
          </li>
          <li>
            <FontAwesomeIcon className="iconoS"  icon={faCogs}/>
            <h3 className="py-4">Servicio 5: Servicio al cliente</h3>
            <p className="text-center">Podemos brindar servicio por si hay problemas en tu creacion de clinica, 
              o en algun inconveniente que tengas, no dudes en consultarnos al +503 2257-777</p>
          </li>
        </ul>
        </div>

      

    </>
  );
}

export default Servicio;
