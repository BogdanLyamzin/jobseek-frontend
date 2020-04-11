import React from 'react';
import { connect } from 'react-redux';

import getDisplayName from 'utils/getDisplayName';

const withIsLogin = Component => {
	const WithIsLogin = ({ isLogin, ...props }) => (
		<Component isLogin={isLogin} {...props} />
	);

	WithIsLogin.displayName = `WithIsLogin(${getDisplayName(Component)})`;

	const mapStateToProps = state => ({
		isLogin: state.auth.isAuthenticated,
	});

	return connect(mapStateToProps)(WithIsLogin);
};

export default withIsLogin;
