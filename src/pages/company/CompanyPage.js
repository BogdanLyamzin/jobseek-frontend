import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

import { getOneCompany } from '../../store/company/actions';
import { connect } from 'react-redux';
const RegisterHR = React.lazy(() =>
	import('../../components/RegisterHR/RegisterHR'),
);
const RegisterCompany = React.lazy(() =>
	import(
		'../../components/RegisterCompany/FormRegisterCompany/FormRegisterCompany'
	),
);

const Page = ({ getOneCompany }) => {
	React.useEffect(() => {
		getOneCompany('5e4d60f3acbbd141707dfdb3');
	}, [getOneCompany]);

	return (
		<React.Suspense fallback={<CircularProgress />}>
			<Switch>
				<Route path="/company/hrs" component={RegisterHR} />
				<Route path="/company" component={RegisterCompany} />
			</Switch>
		</React.Suspense>
	);
};

export default connect(null, { getOneCompany })(Page);
