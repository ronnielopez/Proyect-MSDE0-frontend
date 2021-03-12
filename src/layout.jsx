import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import SiteRoutes from './routes/routing.jsx';
import Logo from './img/logo/logo.png';
import Loder from './img/logo/loder.png';
import {Navbar, Nav} from 'react-bootstrap'
import './css/style.css';
import './js/main.js';


export default class Fulllayout extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <>

                <div id="preloader-active">
                    <div className="preloader d-flex align-items-center justify-content-center">
                        <div className="preloader-inner position-relative">
                            <div className="preloader-circle"></div>
                            <div className="preloader-img pere-text">
                                <img src={Loder} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <Navbar collapseOnSelect expand="lg" bg="light" fixed="top">
                    <Navbar.Brand href="#home"><img src={Logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/Inicio" className='text-dark nav-link'>Inicio</Link>
                            <Link to="/Nosotros" className='text-dark nav-link'>Nosotros</Link>
                            <Link to="/Servicios" className='text-dark nav-link'>Servicios</Link>
                            <Link to="/Contactos" className='text-dark nav-link'>Contactenos</Link>
                        </Nav>
                        <Nav>
                        <Link to="/Login" className='text-secondary nav-link' >Registrar</Link>
                        <Link to="/Login" className='text-secondary nav-link' >Iniciar Sesion</Link>
                      
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

               
                <Switch>
                    {SiteRoutes.map((prop, key) => {
                        if (prop.redirect) {
                            return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
                        } else {
                            return (
                                <Route path={prop.path} component={prop.component} key={key} />
                            );
                        }
                    })}
                </Switch>
                
            </>
        )
    }
}