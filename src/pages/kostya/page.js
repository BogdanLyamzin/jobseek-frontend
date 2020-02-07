import React from 'react';
import {Link, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../../components/nav/Navbar';
import Footer from '../../components/Footer';
import RegisterCompany from '../../components/RegisterCompany/RegisterCompany';
import RegisterHR from '../../components/RegisterHR/RegisterHR';
import TabPanel from '../../components/TabPanel';
import CardHR from '../../components/CardHR';
import Vacancy from '../../components/Vacancy2';

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.backgroundColor,
		position: 'relative',
		minHeight: '100vh',
	},
}));

export default function Page() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Navbar />
			<nav>
				<Link to="/">home</Link>
				<Link to="/kostya/hr">Hr</Link>
				<Link to="/kostya/hrs">Hrs</Link>
				<Link to="/kostya/card">Card</Link>
				<Link to="/kostya/vacancy">vacancy</Link>
			</nav>
			<Switch>
				<Route path="/kostya/company" component={RegisterCompany} />
				<Route path="/kostya/hr" component={RegisterHR} />
				<Route path="/kostya/hrs" component={TabPanel} />
				<Route path="/kostya/card" component={CardHR} />
				<Route path="/kostya/vacancy" component={Vacancy} />
			</Switch>
			<Footer />
		</div>
	);
}
