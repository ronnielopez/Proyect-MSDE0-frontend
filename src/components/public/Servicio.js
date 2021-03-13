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
            <FontAwesomeIcon className="iconoS"  icon={faAmbulance}/>
            <h3 className="py-4">Servicio 1</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia doloremque repellendus 
              placeat accusamus accusantium earum quisquam, totam reprehenderit officiis! Ipsam consequatur
                possimus incidunt voluptatem, rem illo esse aliquid cum laborum.</p>
          </li>
          <li>
            <FontAwesomeIcon className="iconoS"  icon={faBong}/>
            <h3 className="py-4">Servicio 2</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia doloremque repellendus 
              placeat accusamus accusantium earum quisquam, totam reprehenderit officiis! Ipsam consequatur
                possimus incidunt voluptatem, rem illo esse aliquid cum laborum.</p>
          </li>
          <li>
            <FontAwesomeIcon className="iconoS"  icon={faChartLine}/>
            <h3 className="py-4">Servicio 3</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia doloremque repellendus 
              placeat accusamus accusantium earum quisquam, totam reprehenderit officiis! Ipsam consequatur
                possimus incidunt voluptatem, rem illo esse aliquid cum laborum.</p>
          </li>
        </ul>
        </div>
        <div id="sec"> 
        <ul>
        <li>
            <FontAwesomeIcon className="iconoS"  icon={faCogs}/>
            <h3 className="py-4">Servicio 4</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia doloremque repellendus 
              placeat accusamus accusantium earum quisquam, totam reprehenderit officiis! Ipsam consequatur
                possimus incidunt voluptatem, rem illo esse aliquid cum laborum.</p>
          </li>
          <li>
            <FontAwesomeIcon className="iconoS"  icon={faCreditCard}/>
            <h3 className="py-4">Servicio 5</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia doloremque repellendus 
              placeat accusamus accusantium earum quisquam, totam reprehenderit officiis! Ipsam consequatur
                possimus incidunt voluptatem, rem illo esse aliquid cum laborum.</p>
          </li>
        </ul>
        </div>

      

    </>
  );
}

export default Servicio;
