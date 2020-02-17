import React from 'react';
import { Translation } from 'react-i18next';
import { Switch, Route } from 'react-router-dom';

import useStyles from './styles';
import HrMenuSm from './HrMenuSm';
import VacancyByHR from './VacancyByHR';
import Title from '../../../shared/Title';
import HRVacancyMenu from './MenuHRVacancy';
import CandidateList from './CandidateList';
import SentOffersList from './SentOffersList';
import ReceivedOffersList from './ReceivedOffersList';

const VacancyHR = () => {
	const classes = useStyles();

	return (
		<Translation>
			{t => (
				<div className={classes.container}>
					<div className={classes.hr}>
						<Title text={t('MY_VACANCIES')} />
						<div className={classes.hrVacancy}>
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
						</div>
					</div>
				</div>
			)}
		</Translation>
	);
};

export default VacancyHR;
