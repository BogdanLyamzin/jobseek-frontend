import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { getOneHR } from 'store/hr/actions';
import Candidate from 'components/HR/Candidate';
import ProfileHR from 'components/HR/ProfileHR/HR';
import AddVacancy from 'components/Vacancy/AddVacancy';
import VacancyByHR from 'components/Vacancy/VacancyByHR';
import CandidatesList from 'components/HR/CandidateByVacancy';
import UpdateVacancy from 'components/Vacancy/UpdateVacancy/UpdateVacancy';

const HrPage = ({ getOneHR, userId }) => {
	useEffect(() => {
		getOneHR(userId, { status: true });
	}, [getOneHR, userId]);

	return (
		<Switch>
			<Route exact path="/hr/vacancy" component={VacancyByHR} />
			<Route path="/hr/vacancy/:id" component={CandidatesList} />
			<Route path="/hr/addVacancy" component={AddVacancy} />
			<Route path="/hr/candidate/:id" component={Candidate} />
			<Route path="/hr/updateVacancy/:id" component={UpdateVacancy} />
			<Route path="/hr" component={ProfileHR} />
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
