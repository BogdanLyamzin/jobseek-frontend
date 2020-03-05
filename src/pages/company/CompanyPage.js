import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { getOneCompany } from '../../store/company/actions';
import { connect } from 'react-redux';
import HRByCompany from '../../components/HR/HRByCompany/RegisterHR';
import RegisterCompany from '../../components/RegisterCompany/FormRegisterCompany/FormRegisterCompany';

const Page = ({ getOneCompany }) => {
	React.useEffect(() => {
		getOneCompany('5e3c343c6f90fc2d0467aef8');
	}, [getOneCompany]);

	return (
		<Switch>
			<Route path="/company/hrs" component={HRByCompany} />
			<Route path="/company" component={RegisterCompany} />
		</Switch>
	);
};
// const mapStateToProps = state => ({
// 	userID : state.auth.user._id
// });
export default connect(null, { getOneCompany })(Page);
