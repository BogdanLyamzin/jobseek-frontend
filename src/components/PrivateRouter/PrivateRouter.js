import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, isLogin, ...rest }) => {
	isLogin = true;
	return (
		<Route
			{...rest}
			render={props =>
				isLogin ? <Component {...props} /> : <Redirect to="/login" />
			}
		/>
	);
};

const mapStateToProps = state => ({
	isLogin: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(PrivateRoute);
