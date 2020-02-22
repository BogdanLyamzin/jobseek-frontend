import React from 'react';
import { Route, Switch } from 'react-router-dom';

import RegisterHR from '../../components/RegisterHR/RegisterHR';
import RegisterCompany from '../../components/RegisterCompany/FormRegisterCompany/RegisterCompany';



export default function Page() {
	return (
		
			<Switch>
				<Route path="/kostya/hrs" component={RegisterHR} />
				<Route path="/kostya/company" component={RegisterCompany} />
			</Switch>
			
	);
}
