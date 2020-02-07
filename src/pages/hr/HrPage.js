import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import HomeHR from '../../components/HR/HomeHR/HR';
import VacancyHR from '../../components/HR/VacancyHR';
import OneCandidate from '../../components/OneCandidate';
import AddVacancy from '../../components/Vacancy/AddVacancy';
import UpdateVacancy from '../../components/Vacancy/UpdateVacancy/UpdateVacancy';

const Test = () => {
	return (
		<div>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/hr">HR</Link>
				<Link to="/hr/vacancy">HRvacancy</Link>
				<Link to="/hr/vacancyAdd">Add Vacancy</Link>
			</nav>
			<hr />
		</div>
	);
};

const HrPage = () => {
	return (
		<>
			<Test />
			<Switch>
				<Route path="/hr/vacancy" component={VacancyHR} />
				<Route path="/hr/vacancyAdd" component={AddVacancy} />
				<Route path="/hr/oneCandidate" component={OneCandidate} />
				<Route path="/hr/updateVacancy/:id" component={UpdateVacancy} />
				<Route path="/hr" component={HomeHR} />
			</Switch>
		</>
	);
};
export default HrPage;
