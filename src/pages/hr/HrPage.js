import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Translation } from 'react-i18next';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { getOneHR } from '../../store/hr/actions';
import HomeHR from '../../components/HR/HomeHR/HR';
import VacancyHR from '../../components/HR/VacancyHR';
import OneCandidate from '../../components/OneCandidate';
import AddVacancy from '../../components/Vacancy/AddVacancy';
import UpdateVacancy from '../../components/Vacancy/UpdateVacancy/UpdateVacancy';

const useStyles = makeStyles(() => ({
	root: {
		backgroundColor: '#F6F9FF',
		minHeight: '100vh',
		width: '100%',
	},
}));

const HrPage = ({ getOneHR }) => {
	const classes = useStyles();

	useEffect(() => {
		getOneHR('5e3c361c657e122a841e88e4');
	}, [getOneHR]);

	return (
		<Translation>
			{t => (
				<div className={classes.root}>
					<Header
						linkList={[
							{ link: '/hr', text: `${t('MY_PROFILE')}` },
							{ link: '/hr/vacancy', text: `${t('MY_VACANCIES')}` },
							{ link: '/hr/vacancyAdd', text: `${t('ADD_VACANCY')}` },
						]}
					/>
					<Switch>
						<Route path="/hr/vacancy" component={VacancyHR} />
						<Route path="/hr/vacancyAdd" component={AddVacancy} />
						<Route path="/hr/oneCandidate" component={OneCandidate} />
						<Route path="/hr/updateVacancy/:id" component={UpdateVacancy} />
						<Route path="/hr" component={HomeHR} />
					</Switch>
					<Footer />
				</div>
			)}
		</Translation>
	);
};

const mapDispatchToProps = {
	getOneHR,
};

export default connect(null, mapDispatchToProps)(HrPage);
