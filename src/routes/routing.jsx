import Inicio from '../components/public/Inicio';
import Nosotros from '../components/public/Nosotros';
import Login from '../components/Auth/Login';
import Registrar from '../components/Auth/Registrar';
import Servicio from '../components/public/Servicio';
import Clinicas from '../components/public/Clinicas';
import Planes from '../components/Auth/Planes';
import CrearClinica from '../components/services/crearClinica';
import MisClinicas from '../components/dashboard/MisClinicas';
import Recuperar from '../components/Auth/RecuperarContrasena';



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
    path: '/Planes',
    name: 'Planes',
    component: Planes
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
  {
    path: '/NuevaClinica',
    name: 'Crear clinica',
    component: CrearClinica
  },
  {
    path: '/MisClinicas',
    name: 'Mis clinicas',
    component: MisClinicas
  },
  {
    path: '/Recuperar',
    name: 'Recuperar Contrasena',
    component: Recuperar
  },
  { path: '/', pathTo: '/Inicio', name: 'Inicio', redirect: true }
];

export default SiteRoutes;
