import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { getOneCompany } from '../../store/company/actions';
import { connect } from 'react-redux';
import HRByCompany from '../../components/HR/HRByCompany/RegisterHR';
import RegisterCompany from '../../components/RegisterCompany/FormRegisterCompany/FormRegisterCompany';
import CompanyComments from '../../components/Comments/CompanyComments/Comments';
import CandidateComments from '../../components/Comments/CandidateComments/Comments';

const Page = ({ getOneCompany }) => {
	React.useEffect(() => {
		getOneCompany('5e3c343c6f90fc2d0467aef8');
	}, [getOneCompany]);

	return (
		<Switch>
			<Route path="/company/hrs" component={HRByCompany} />
			<Route exact path="/company" component={RegisterCompany} />
			<Route path="/company/review" component={CompanyComments} />
			<Route path="/company/candidate/review" component={CandidateComments} />
		</Switch>
	);
};

export default connect(null, { getOneCompany })(Page);
