import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './vacancyHR.css';
import VacancyByHR from './VacancyByHR';
import HRVacancyMenu from './MenuHRVacancy';
import CandidateList from './CandidateList';
import SentOffersList from './SentOffersList';
import ReceivedOffersList from './ReceivedOffersList';

const VacancyHR = () => {
	return (
		<div className="container hr">
			<h2 className="hr-caption">Мoї вакансії (HR)</h2>
			<div className="hr-vacancy">
				<HRVacancyMenu />
				<div className="hr-vacancy-flex">
					<VacancyByHR />
					<div className="hr-vacancy-routes">
						<Switch>
							<Route exact path="/admin/hr/vacancy" component={CandidateList} />
							<Route path="/admin/hr/vacancy/sent" component={SentOffersList} />
							<Route
								path="/admin/hr/vacancy/received"
								component={ReceivedOffersList}
							/>
						</Switch>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VacancyHR;
