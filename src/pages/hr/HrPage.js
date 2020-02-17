import React from 'react';
import { Translation } from 'react-i18next';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
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

const HrPage = () => {
	const classes = useStyles();

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

export default HrPage;
