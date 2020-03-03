import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { getOneHR } from '../../store/hr/actions';
import HomeHR from '../../components/HR/HomeHR/HR';
import VacancyHR from '../../components/HR/VacancyHR';
import Candidate from '../../components/HR/Candidate';
import AddVacancy from '../../components/Vacancy/AddVacancy';
import CandidatesList from '../../components/HR/CandidateByVacancy';
import UpdateVacancy from '../../components/Vacancy/UpdateVacancy/UpdateVacancy';

const HrPage = ({ getOneHR }) => {
	useEffect(() => {
		getOneHR('5e5d40da8f80b4430cbc676c');
	}, [getOneHR]);

	return (
		<Switch>
			<Route exact path="/hr/vacancy" component={VacancyHR} />
			<Route path="/hr/vacancy/:id" component={CandidatesList} />
			<Route path="/hr/vacancyAdd" component={AddVacancy} />
			<Route path="/hr/candidate/:id" component={Candidate} />
			<Route path="/hr/updateVacancy/:id" component={UpdateVacancy} />
			<Route path="/hr" component={HomeHR} />
		</Switch>
	);
};

const mapDispatchToProps = {
	getOneHR,
};

export default connect(null, mapDispatchToProps)(HrPage);
