import Inicio from '../components/Inicio';
import Nosotros from '../components/Nosotros';


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
  { path: '/', pathTo: '/Inicio', name: 'Inicio', redirect: true }
];

export default SiteRoutes;
