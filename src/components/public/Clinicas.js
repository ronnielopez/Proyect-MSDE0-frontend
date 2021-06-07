import React, { useState, useEffect } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import axios from "axios";
import ModalClinica from "./ViewClinicas";



function Clinicas() {

  const [clinica, setClinica] = useState([]);
  const [show, setShow] = useState(false);
  const [datosM, setDatosM] = useState("");

  useEffect(() => {

    axios.get("http://127.0.0.1:8000/api/clinicas").then((response) => {
      setClinica(response.data);
    });



  }, []);


  return (
    <>
      <Jumbotron className="my-5">
        <h1 className="text-right my-5 pr-5">Clinicas</h1>
      </Jumbotron>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle text-center mb-100">
              <span>¿Estás buscando una clinica?</span>
              <h2>Las mejores clinicas</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {
            clinica.map((element) =>
              <ul id="cardClinica" className="col-sm-4">
                <li className="booking-card" >
                  <div className="book-container">
                    <div className="content">
                      <button className="btn" onClick={()=>{
                        setDatosM(element);
                        setShow(true);
                      }}>Has tu cita</button>
                    </div>
                  </div>
                  <div className="informations-container">
                    <h2 className="title">{element.nombre}</h2>
                    <p className="sub-title">{element.subtitulo}</p>
                    <p className="price"><svg className="icon iconClinica" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
                    </svg>De {element.apr1} a {element.apr2} $</p>
                    <div className="more-information">
                      <div className="info-and-date-container">
                        <div className="box info">
                          <svg className="icon iconClinica" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
                          </svg>
                          <p>Horararios flexibles</p>
                        </div>
                        <div className="box date">
                          <svg className="icon iconClinica" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
                          </svg>
                          <p>Abierto de Lunes a Viernes</p>
                        </div>
                      </div>
                      <p className="disclaimer">{element.descripcion}</p>
                    </div>
                  </div>
                </li>
              </ul>
            )
          }
        </div>
      </div>

      <ModalClinica
        show={show}
        onHide={() => setShow(false)}
        animation={false}
        datos = {datosM}
      />
    </>

  );
}

export default Clinicas;
