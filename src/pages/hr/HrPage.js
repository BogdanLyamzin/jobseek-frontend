import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

import { getOneHR } from '../../store/hr/actions';
const HomeHR = React.lazy(() => import('../../components/HR/HomeHR/HR'));
const VacancyHR = React.lazy(() => import('../../components/HR/VacancyHR'));
const OneCandidate = React.lazy(() => import('../../components/OneCandidate'));
const AddVacancy = React.lazy(() =>
	import('../../components/Vacancy/AddVacancy'),
);
const CandidatesList = React.lazy(() =>
	import('../../components/HR/CandidateByVacancy'),
);
const UpdateVacancy = React.lazy(() =>
	import('../../components/Vacancy/UpdateVacancy/UpdateVacancy'),
);

const HrPage = ({ getOneHR }) => {
	useEffect(() => {
		getOneHR('5e3c361c657e122a841e88e4');
	}, [getOneHR]);

	return (
		<React.Suspense fallback={<CircularProgress />}>
			<Switch>
				<Route exact path="/hr/vacancy" component={VacancyHR} />
				<Route path="/hr/vacancy/:id" component={CandidatesList} />
				<Route path="/hr/vacancyAdd" component={AddVacancy} />
				<Route path="/hr/candidate" component={OneCandidate} />
				<Route path="/hr/updateVacancy/:id" component={UpdateVacancy} />
				<Route path="/hr" component={HomeHR} />
			</Switch>
		</React.Suspense>
	);
};

const mapDispatchToProps = {
	getOneHR,
};

export default connect(null, mapDispatchToProps)(HrPage);
