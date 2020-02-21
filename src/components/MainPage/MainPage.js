import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../Nav';
import Footer from '../Footer';
import HomePage from '../Content';
import Login from '../Login';
import Register from '../Register';
import ResetPass from '../Login/ResetPass';
import setNewPass from '../setNewPass';
import LogOut from '../LogOut';
import HrPage from '../../pages/hr/';
import CompanyPage from '../../pages/company';
import Comments from '../../pages/comments';
import Adminka from '../../pages/admin/src';

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
				<Route exact path="/" component={HomePage} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/mailconfirm" component={ResetPass} />
				<Route path="/resetpass/:token" component={setNewPass} />
				<Route path="/logout" component={LogOut} />
				<Route path="/hr" component={HrPage} />
				<Route path="/kostya" component={CompanyPage} />
				<Route path="/comments" component={Comments} />
				<Route path="/admin" component={Adminka} />
			</Switch>
			<Footer />
		</div>
	);
}
