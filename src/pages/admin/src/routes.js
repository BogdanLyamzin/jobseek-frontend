import React from 'react';

// const Breadcrumbs = React.lazy(() => import('./views/Breadcrumbs')); видалити з компонентів
const Collapses = React.lazy(() => import('./views/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Dropdowns'));
const Forms = React.lazy(() => import('./views/Forms'));
const ListGroups = React.lazy(() => import('./views/ListGroups'));
const Navs = React.lazy(() => import('./views/Navs'));
const Paginations = React.lazy(() => import('./views/Paginations'));
const Popovers = React.lazy(() => import('./views/Popovers'));
const Switches = React.lazy(() => import('./views/Switches'));
const Tabs = React.lazy(() => import('./views/Tabs'));
const Tooltips = React.lazy(() => import('./views/Tooltips'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Companies = React.lazy(() => import('./views/Companies/Companies'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const Login = React.lazy(() => import('./views/Authorization/Login'));
const Register = React.lazy(() => import('./views/Authorization/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));
const Skills = React.lazy(() => import('./views/Skills'));
const Languages = React.lazy(() => import('./views/Languages'));
const Vacancies = React.lazy(() => import('./views/Vacancies'));
const Sphere = React.lazy(() => import('./views/Sphere'));
// const Users = React.lazy(() => import('./views/Users/Users'));
// const User = React.lazy(() => import('./views/Users/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Головна' },
  { path: '/companies', name: 'Компанії', component: Companies },
  { path: '/forms', name: 'Forms', component: Forms },
  { path: '/switches', name: 'Switches', component: Switches },
  { path: '/tabs', name: 'Tabs', component: Tabs },
  // { path: '/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs }, видалити з компонентів
  { path: '/collapses', name: 'Collapse', component: Collapses },
  { path: '/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/navs', name: 'Navs', component: Navs },
  { path: '/paginations', name: 'Paginations', component: Paginations },
  { path: '/popovers', name: 'Popovers', component: Popovers },
  { path: '/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/authorization/login', name: 'Вхід', component: Login },
  { path: '/authorization/register', name: 'Реєстрація', component: Register },
  { path: '/pages/404', name: 'Page404', component: Page404 },
  { path: '/pages/500', name: 'Page500', component: Page500 },
  { path: '/skills', name: 'Навички', component: Skills },
  { path: '/languages', name: 'Мови програмування', component: Languages },
  { path: '/vacancies', name: 'Шаблони вакансій', component: Vacancies },
  { path: '/spheres', name: 'Професійні сфери', component: Sphere },
  // { path: '/users', exact: true,  name: 'Users', component: Users },
  // { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
