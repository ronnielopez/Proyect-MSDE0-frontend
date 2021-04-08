import React, {useState} from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import swal from 'sweetalert';


function Tarjeta() {
  const nombreString = new String(sessionStorage.getItem('Nombre'));
  const [data, setData] = useState({
    cvc: "",
    expiry: "08/23",
    focus: "",
    name: nombreString,
    number: ""
  });
  
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const procesarTarjeta = () => {
    if(useState.cvc===undefined&&useState.expiry===undefined&&useState.name===undefined&&useState.number===undefined){
      console.log("B");
    }else{
      console.log("A");
      swal({ title: 'Tarjeta aceptada!', icon: 'success', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false }).then(value => { window.location.href = '#/Perfil'; });
    }
    
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
            required
          />
          <input
            type="text"
            name="name"
            placeholder={sessionStorage.getItem('Nombre')}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="expiry"
            placeholder="08/23"
            onChange={handleInputChange}
            maxlength= "9"
            required
          />
          <input
            type="number"
            name="cvc"
            placeholder="CVC"
            onChange={handleInputChange}
            maxlength= "4"
            required
          />
        <div class="vertical-center">
        <button  class="btn btn-primary" type="submit" onClick={procesarTarjeta} >Guardar tarjeta</button> 
        </div> 
        </form>
      </div>
      
      <div className="container">
        
      </div>
          
    </>
  );
}

export default Tarjeta;
