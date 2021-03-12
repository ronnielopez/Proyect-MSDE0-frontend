import Inicio from '../components/public/Inicio';
import Nosotros from '../components/public/Nosotros';
import Login from '../components/Auth/Login';


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
    path: '/Login',
    name: 'Login',
    component: Login
  },
  { path: '/', pathTo: '/Inicio', name: 'Inicio', redirect: true }
];

export default SiteRoutes;
