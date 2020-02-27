import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Preloader from '../../shared/Preloader';

const Navbar = lazy(() => import('../Nav'));
const Footer = lazy(() => import('../Footer'));
const HomePage = lazy(() => import('../Content'));
const Login = lazy(() => import('../Login'));
const Register = lazy(() => import('../Register'));
const ResetPass = lazy(() => import('../Login/ResetPass'));
const setNewPass = lazy(() => import('../setNewPass'));
const LogOut = lazy(() => import('../LogOut'));
const HrPage = lazy(() => import('../../pages/hr/'));
const CompanyPage = lazy(() => import('../../pages/company'));
const Comments = lazy(() => import('../../pages/comments'));

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.backgroundColor,
		position: 'relative',
		minHeight: '100vh',
	},
}));

export default function MainPage() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Navbar />
			<Switch>
				<Suspense fallback={<Preloader />}>
					<Route exact path="/" component={HomePage} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
					<Route path="/mailconfirm" component={ResetPass} />
					<Route path="/resetpass/:token" component={setNewPass} />
					<Route path="/logout" component={LogOut} />
					<Route path="/hr" component={HrPage} />
					<Route path="/company" component={CompanyPage} />
					<Route path="/comments" component={Comments} />
				</Suspense>
			</Switch>
			<Footer />
		</div>
	);
}
