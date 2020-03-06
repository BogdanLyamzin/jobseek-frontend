import React from 'react';

const Companies = React.lazy(() => import('./views/Companies/Companies'));
const Login = React.lazy(() => import('./views/Authorization/Login'));
const Register = React.lazy(() => import('./views/Authorization/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));
const Skills = React.lazy(() => import('./views/Skills'));
const Categories = React.lazy(() => import('./views/Categories'));
const VacancyTemplate = React.lazy(() => import('./views/VacancyTemplate'));
const Sphere = React.lazy(() => import('./views/Sphere'));
const Professions = React.lazy(() => import('./views/Professions'));
const Administrators = React.lazy(() => import('./views/Administrators'));
const HR = React.lazy(() => import('./views/HRs'));
const Report = React.lazy(() => import('./views/Report'));
// const Users = React.lazy(() => import('./views/Users/Users'));
// const User = React.lazy(() => import('./views/Users/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

const routes = [
	{ path: '/', exact: true, name: 'Головна' },
	{ path: '/companies', name: 'Компанії', component: Companies },
	{ path: '/authorization/login', name: 'Вхід', component: Login },
	{ path: '/authorization/register', name: 'Реєстрація', component: Register },
	{ path: '/pages/404', name: 'Page404', component: Page404 },
	{ path: '/pages/500', name: 'Page500', component: Page500 },
	{ path: '/skills', name: 'Навички', component: Skills },
	{ path: '/categories', name: 'Категорії', component: Categories },
	{
		path: '/vacancyTemplate',
		name: 'Шаблони вакансій',
		component: VacancyTemplate,
	},
	{ path: '/spheres', name: 'Професійні сфери', component: Sphere },
	{ path: '/professions', name: 'Професії', component: Professions },
	{ path: '/hr', name: 'Професійні сфери', component: HR },
	{ path: '/administrators', name: 'Професії', component: Administrators },
	{ path: '/report', name: 'Скариги', component: Report },
	// { path: '/users', exact: true,  name: 'Users', component: Users },
	// { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
