import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { getOneCandidate } from '../../store/candidate/actions';
import HomeCandidate from '../../components/Candidate/HomeCandidate/Candidate';
import CvCandidate from '../../components/Candidate/CvCandidates';
import OneCandidate from '../../components/OneCandidate';
import AddCv from '../../components/Cv/AddCv';
import CandidatesList from '../../components/HR/CandidateByVacancy';
import UpdateCv from '../../components/Cv/UpdateCv/UpdateCv';

const CandidatePage = ({ getOneCandidate }) => {
	useEffect(() => {
		getOneCandidate('5e5d04ede29d9a26a8a5992e');
	}, [getOneCandidate]);

	return (
		<Switch>
			<Route exact path="/candidate/cv" component={CvCandidate} />
			<Route path="/hr/vacancy/:id" component={CandidatesList} />
			<Route path="/candidate/cvAdd" component={AddCv} />
			<Route path="/hr/candidate/:id" component={OneCandidate} />
			<Route path="/candidate/updateCv/:id" component={UpdateCv} />
			<Route path="/candidate" component={HomeCandidate} />
		</Switch>
	);
};

const mapDispatchToProps = {
	getOneCandidate,
};

export default connect(null, mapDispatchToProps)(CandidatePage);
