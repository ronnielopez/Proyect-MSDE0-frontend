import React, {useState} from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'


function Tarjeta() {
  const [data, setData] = useState({
    cvc: "",
    expiry: "08/23",
    focus: "",
    name:"Tu nombre",
    number: ""
  });
  
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };
  

  return (
    <>

    
      <Jumbotron className="my-5">
        <h1 className="text-right my-5 pr-5">Agregando Tarjeta de Credito</h1>
      </Jumbotron>

      <div id="PaymentForm">
      <Cards
				cvc={data.cvc}
				expiry={data.expiry}
				focus={data.focus}
				name={data.name}
				number={data.number}
			/>
        <form action="">
          <input
            type="number"
            name="number"
            placeholder="Numeros Tarjeta"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            onChange={handleInputChange}
          />
          <input
            type="tel"
            name="expiry"
            placeholder="08/23"
            onChange={handleInputChange}
            maxlength= "9"
          />
          <input
            type="number"
            name="cvc"
            placeholder="CVC"
            onChange={handleInputChange}
            maxlength= "4"
          />

        <button class="btn btn-primary" type="submit">Guardar tarjeta</button>  
        </form>
      </div>
    
      <div className="container">
        
      </div>
          
    </>
  );
}

export default Tarjeta;
