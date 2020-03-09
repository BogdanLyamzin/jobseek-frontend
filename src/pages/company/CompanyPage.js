import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { getOneCompany } from '../../store/company/actions';
import { connect } from 'react-redux';
import HRByCompany from '../../components/HR/HRByCompany/RegisterHR';
import RegisterCompany from '../../components/RegisterCompany/FormRegisterCompany/FormRegisterCompany';
import CompanyComments from '../../components/Comments/CompanyComments/Comments';
import CandidateComments from '../../components/Comments/CandidateComments/Comments';

const Page = ({ getOneCompany, userId }) => {
	React.useEffect(() => {
		getOneCompany(userId);
	}, [getOneCompany, userId]);

	return (
		<Switch>
			<Route path="/company/hrs" component={HRByCompany} />
			<Route
				exact
				path="/company"
				render={() => <RegisterCompany userId={userId} />}
			/>
			<Route path="/company/review" component={CompanyComments} />
			<Route path="/company/candidate/review" component={CandidateComments} />
		</Switch>
	);
};
const mapStateToProps = state => ({
	userId: state.auth.user._id,
});
export default connect(mapStateToProps, { getOneCompany })(Page);
