import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import TabPanel from '../../components/TabPanel';
import RegisterHR from '../../components/RegisterHR/RegisterHR';
import RegisterCompany from '../../components/RegisterCompany/RegisterCompany';

const useStyles = makeStyles(() => ({
	root: {
		backgroundColor: '#F6F9FF',
		minHeight: '100vh',
		width: '100%',
	},
}));

export default function Page() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Header
				linkList={[
					{ link: '/kostya/company', text: 'Мій профіль' },
					{ link: '/kostya/hrs', text: 'HRs' },
					{ link: '/kostya/hr', text: 'Додати HR' },
				]}
			/>
			<Switch>
				<Route path="/kostya/company" component={RegisterCompany} />
				<Route path="/kostya/hr" component={RegisterHR} />
				<Route path="/kostya/hrs" component={TabPanel} />
			</Switch>
			<Footer />
		</div>
	);
}