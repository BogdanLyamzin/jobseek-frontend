import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import withIsLogin from 'hoc/withIsLogin';

const PrivateRoute = ({ component: Component, isLogin, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				isLogin ? <Component {...props} /> : <Redirect to="/login" />
			}
		/>
	);
};

export default withIsLogin(PrivateRoute);
