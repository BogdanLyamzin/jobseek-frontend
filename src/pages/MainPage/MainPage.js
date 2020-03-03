import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Preloader from '../../shared/Preloader';
import PrivateRoute from '../../components/PrivateRouter';
import Navbar from '../../components/Nav';
import Footer from '../../components/Footer';
import HomePage from '../../components/Content';
import Login from '../../components/Login';
import Register from '../../components/Register';
import ResetPass from '../../components/Login/ResetPass';
import SetNewPass from '../../components/setNewPass';
import LogOut from '../../components/LogOut';

const HrPage = lazy(() => import('../hr'));
const CandidatePage = lazy(() => import('../candidate'));
const CompanyPage = lazy(() => import('../company'));
const Comments = lazy(() => import('../comments'));

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
					<Route path="/resetpass/:token" component={SetNewPass} />
					<Route path="/logout" component={LogOut} />
					<PrivateRoute path="/hr" component={HrPage} />
					<PrivateRoute path="/company" component={CompanyPage} />
					<PrivateRoute path="/candidate" component={CandidatePage} />
					<PrivateRoute path="/company" component={CompanyPage} />
					<PrivateRoute path="/comments" component={Comments} />
				</Suspense>
			</Switch>
			<Footer />
		</div>
	);
}
