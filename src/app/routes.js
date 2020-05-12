import Dashboard from './Containers/Dashboard';
import Notifications from './Containers/Notifications.jsx';
import Icons from './Containers/Icons';
import Typography from './Containers/Typography.jsx';
import TableList from './Containers/Tables';
// import Maps from './views/Map.jsx';
import UserPage from './Containers/User.jsx';
// import UpgradeToPro from './Containers/Upgrade.jsx';
import MyDashboard from './Container/Dashboard/index';
import DoctorContainer from './Container/Doctor/index';
import LabTechnicianContainer from './Container/LabTechnician/index';

var routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'nc-icon nc-bank',
    component: Dashboard,
    layout: '/admin',
  },
  {
    path: '/mydashboard',
    name: 'MyDashboard',
    icon: 'nc-icon nc-bank',
    component: MyDashboard,
    layout: '/admin',
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: 'nc-icon nc-bell-55',
    component: Notifications,
    layout: '/admin',
  },
  {
    path: '/user-page',
    name: 'Profile',
    icon: 'nc-icon nc-single-02',
    component: UserPage,
    layout: '/admin',
  },
  {
    path: '/tables',
    name: 'Table List',
    icon: 'nc-icon nc-tile-56',
    component: TableList,
    layout: '/admin',
  },

  {
    path: '/typography',
    name: 'Typography',
    icon: 'nc-icon nc-caps-small',
    component: Typography,
    layout: '/admin',
  },
  {
    path: '/icons',
    name: 'Icons',
    icon: 'nc-icon nc-diamond',
    component: Icons,
    layout: '/admin',
  },
  // {
  //   path: '/maps',
  //   name: 'Maps',
  //   icon: 'nc-icon nc-pin-3',
  //   component: Maps,
  //   layout: '/admin',
  // },
  {
    path: '/doctor',
    name: 'DOCTOR',
    icon: 'fas fa-user-md',
    component: DoctorContainer,
    layout: '/admin',
  },
  {
    path: '/labtechnician',
    name: 'LAB TECHNICIAN',
    icon: 'fas fa-microscope',
    component: LabTechnicianContainer,
    layout: '/admin',
  },
  {
    name: 'MEDICINES',
    icon: 'fas fa-pills',
  },
  {
    name: 'LAB TESTS',
    icon: 'fas fa-vials',
  },
  {
    name: 'APPOINTMENTS',
    icon: 'fas fa-newspaper',
  },

  // {
  //   pro: true,
  //   path: '/upgrade',
  //   name: 'Upgrade to PRO',
  //   icon: 'nc-icon nc-spaceship',
  //   component: UpgradeToPro,
  //   layout: '/admin',
  // },
];
export default routes;
