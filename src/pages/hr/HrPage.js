import React from 'react';
import AllHR from '../../testRequest/AllHR/AllHR';
import VacancyHR from '../../components/HR/VacancyHR';
import AddVacancy from '../../components/Vacancy/AddVacancy';
import OneCandidate from '../../components/OneCandidate';
import UpdateVacancy from '../../components/Vacancy/UpdateVacancy/UpdateVacancy';
import HomeHR from '../../components/HR/HomeHR/HR';
import { Switch, Route, Link } from 'react-router-dom';

const Test = () => {
	return (
		<div>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/admin/hr">HR</Link>
				<Link to="/admin/hr/vacancy">HRvacancy</Link>
				<Link to="/admin/vacancyAdd">Add Vacancy</Link>
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
				<Route path="/admin/allHR" component={AllHR} />
				<Route path="/admin/hr/vacancy" component={VacancyHR} />
				<Route path="/admin/vacancyAdd" component={AddVacancy} />
				<Route path="/admin/oneCandidate" component={OneCandidate} />
				<Route path="/admin/updateVacancy/:id" component={UpdateVacancy} />
				<Route path="/admin/hr" component={HomeHR} />
			</Switch>
		</>
		// </Route>
	);
};
export default HrPage;
