import React, {useState} from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import swal from 'sweetalert';


const Tarjeta = () => {
  const nombreString = new String(sessionStorage.getItem('Nombre'));
  const [data, setData] = useState({
    cvc: "",
    expiry: "",
    name: "",
    number: ""
  });
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  console.log(useState.cvc)

  const procesarTarjeta = () => {
    if(useState.cvc===undefined){
      swal({ title: 'Datos incompletos', icon: 'warning', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false });
    }else{
      swal({ title: 'Tarjeta aceptada!', icon: 'success', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false }).then(value => { window.location.href = '/#/Perfil'; });
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
            type="string"
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
            required
          />
          <input
            type="number"
            name="cvc"
            placeholder="CVC"
            onChange={handleInputChange}
            required
          />
        <div class="vertical-center">
        <button  id="guardarTarjeta" class="btn btn-primary" type="submit" onClick={procesarTarjeta} >Guardar tarjeta</button> 
        </div> 
        </form>
      </div>
      
      <div className="container">
        
      </div>
          
    </>
  );
}

export default Tarjeta;
