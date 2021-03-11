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

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home"><img src={Logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#features"><Link>Inicio</Link></Nav.Link>
                            <Nav.Link href="#pricing"><Link>Nosotros</Link></Nav.Link>
                            <Nav.Link href="#pricing"><Link>Servicios</Link></Nav.Link>
                            <Nav.Link href="#pricing"><Link>Contactenos</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Registrar</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Iniciar Sesion
                        </Nav.Link>
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