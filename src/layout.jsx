import React from 'react';
import { Route, Switch, Redirect, Link, useHistory } from 'react-router-dom';
import SiteRoutes from './routes/routing.jsx';
import Logo from './img/logo/logo.png';
import Logo2 from './img/logo/logo2_footer.png';
import Loder from './img/logo/loder.png';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './css/style.css';
import './js/main.js';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


export default class Fulllayout extends React.Component {
    constructor(token, nombre, estado){
        super(token,nombre);
        this.token = sessionStorage.getItem('Token');
        this.nombre = sessionStorage.getItem('Nombre');
        this.estado = sessionStorage.getItem('Estado');
        
    }

    CerrarSesion(){
        
        sessionStorage.removeItem('Token');
        sessionStorage.removeItem('Nombre');
        sessionStorage.removeItem('Estado');
        sessionStorage.removeItem('Email');
        sessionStorage.removeItem('Id');
        swal({ title: 'Sesion Cerrada', icon: 'success', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false }).then(value=>{window.location.href = '#/Inicio'; window.location.reload(true);});
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
                            <Link to="/Clinicas" className='text-dark nav-link'>Clinicas</Link>
                        </Nav>
                        <Nav>
                            {
                            this.estado > 1 ? 
                            <>
                            <NavDropdown title={this.nombre} id="collasible-nav-dropdown">
                            <NavDropdown.Item >Perfil</NavDropdown.Item>
                            <Link to="/MisClinicas" className='text-dark dropdown-item'>Mis clinicas</Link>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={()=>{
                                this.CerrarSesion();
                            }}>Cerrar Sesion</NavDropdown.Item>
                            </NavDropdown>  
                            </>
                             : 
                            this.token !== null ? 
                            <>
                            <NavDropdown title={this.nombre} id="collasible-nav-dropdown">
                            <NavDropdown.Item >Perfil</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={()=>{
                                this.CerrarSesion();
                            }}>Cerrar Sesion</NavDropdown.Item>
                            </NavDropdown>
                            </>
                            :
                            <>  
                            <Link to="/Registrar" className='text-secondary nav-link' >Registrar</Link>
                            <Link to="/Login" className='text-secondary nav-link' >Iniciar Sesion</Link>
                            </>
                            }
                            

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


                <footer>
                    <div className="footer-area section-bg">
                        <div className="container">
                            <div className="footer-top footer-padding">
                                <div className="row d-flex justify-content-between">
                                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-8">
                                        <div className="single-footer-caption mb-50">
                                            
                                <div className="footer-logo">
                                    <a href="index.html"><img src={Logo2} alt=""/></a>
                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-5">
                                            <div className="single-footer-caption mb-50">
                                                <div className="footer-tittle">
                                                    <h4>Acerca de nosotros</h4>
                                                    <div className="footer-pera">
                                                        <p className="info1">Lorem igpsum doldfor sit amet, adipiscing elit, sed do eiusmod tempor cergelit rgh. </p>
                                                        <p className="info1">Lorem ipsum dolor sit amet, adipiscing elit.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                                            <div className="single-footer-caption mb-50">
                                                <div className="footer-number mb-50">
                                                    <h4><span>+503 </span>2257 7777</h4>
                                                    <p>Alphamedic@gmail.com</p>
                                                </div>
                                           
                                                    <div className="footer-form">
                                                    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="footer-bottom">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col-xl-9 col-lg-8">
                                                <div className="footer-copy-right">
                                                    
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4">
                                                <div className="footer-social f-right">
                                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                                    <a href="https://www.facebook.com/sai4ull"><i className="fab fa-facebook-f"></i></a>
                                                    <a href="#"><i className="fas fa-globe"></i></a>
                                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
    </footer>
            </>
        )
    }
}