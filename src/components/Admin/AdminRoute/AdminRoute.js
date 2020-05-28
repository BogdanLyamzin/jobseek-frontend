import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import AdminLogin from '../AdminLogin';

const PrivateRoute = ({ component: Component, isAdmin, ...rest }) => (
	<Route {...rest} render={props => (isAdmin ? <Component {...props} /> : <AdminLogin />)} />
);

const mapStateToProps = state => ({
	isAdmin: state.auth.isAdmin,
});
export default connect(mapStateToProps)(PrivateRoute);
