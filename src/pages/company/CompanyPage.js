import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

const RegisterHR = React.lazy(() =>
	import('../../components/RegisterHR/RegisterHR'),
);
const RegisterCompany = React.lazy(() =>
	import(
		'../../components/RegisterCompany/FormRegisterCompany/RegisterCompany'
	),
);

export default function Page() {
	return (
		<React.Suspense fallback={<CircularProgress />}>
			<Switch>
				<Route path="/company/hrs" component={RegisterHR} />
				<Route path="/company" component={RegisterCompany} />
			</Switch>
		</React.Suspense>
	);
}
