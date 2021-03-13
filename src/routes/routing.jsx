import Inicio from '../components/public/Inicio';
import Nosotros from '../components/public/Nosotros';
import Login from '../components/Auth/Login';
import Registrar from '../components/Auth/Registrar';
import Servicio from '../components/public/Servicio';
import Clinicas from '../components/public/Clinicas';



var SiteRoutes = [
  {
    path: '/Inicio',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/Nosotros',
    name: 'Nosotros',
    component: Nosotros
  },
  {
    path: '/Servicios',
    name: 'Servicios',
    component: Servicio
  },
  {
    path: '/Clinicas',
    name: 'Clinica',
    component: Clinicas
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Registrar',
    name: 'Registrar',
    component: Registrar
  },
  { path: '/', pathTo: '/Inicio', name: 'Inicio', redirect: true }
];

export default SiteRoutes;
