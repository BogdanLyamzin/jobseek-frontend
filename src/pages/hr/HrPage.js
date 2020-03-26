import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { getOneHR } from '../../store/hr/actions';
import HomeHR from '../../components/HR/HomeHR/HR';
import Candidate from '../../components/HR/Candidate';
import AddVacancy from '../../components/Vacancy/AddVacancy';
import VacancyByHR from '../../components/Vacancy/VacancyByHR';
import CandidatesList from '../../components/HR/CandidateByVacancy';
import UpdateVacancy from '../../components/Vacancy/UpdateVacancy/UpdateVacancy';

const HrPage = ({ getOneHR, userId }) => {
	useEffect(() => {
		getOneHR(userId, { status: true });
	}, [getOneHR, userId]);

	return (
		<Switch>
			<Route exact path="/hr/vacancy" component={VacancyByHR} />
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

const mapStateToProps = ({ auth }) => ({
	userId: auth.user._id,
});

export default connect(mapStateToProps, mapDispatchToProps)(HrPage);
