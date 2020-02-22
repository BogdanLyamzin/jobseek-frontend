import React from 'react';
import { useTranslation } from 'react-i18next';
import { Switch, Route } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import useStyles from './styles';
import HrMenuSm from './HrMenuSm';
import VacancyByHR from '../../Vacancy/VacancyByHR';
import Title from '../../../shared/Title';
import HRVacancyMenu from './MenuHRVacancy';
import CandidateList from './CandidateList';
import SentOffersList from './SentOffersList';
import ReceivedOffersList from './ReceivedOffersList';

const VacancyHR = () => {
	const classes = useStyles();
	const { t } = useTranslation();

	return (
		<Container>
			<Title text={t('MY_VACANCIES')} />
			<Paper className={classes.root}>
				<HRVacancyMenu classes={classes} />
				<div className={classes.hrVacancyFlex}>
					<VacancyByHR />
					<div className={classes.hrVacancyRoutes}>
						<HrMenuSm classes={classes} />
						<Switch>
							<Route exact path="/hr/vacancy" component={CandidateList} />
							<Route path="/hr/vacancy/sent" component={SentOffersList} />
							<Route
								path="/hr/vacancy/received"
								component={ReceivedOffersList}
							/>
						</Switch>
					</div>
				</div>
			</Paper>
		</Container>
	);
};

export default VacancyHR;
