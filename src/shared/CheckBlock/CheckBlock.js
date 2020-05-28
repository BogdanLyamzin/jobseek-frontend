import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const CheckBlock = ({ user, children }) => {
	return !user || (user && user.active) ? (
		children
	) : (
		<Redirect to="/blockeduser" />
	);
};

CheckBlock.propTypes = {
	user: PropTypes.oneOfType([
		PropTypes.shape({
			active: PropTypes.bool.isRequired,
		}),
		PropTypes.oneOf([null]).isRequired,
	]),
	children: PropTypes.node.isRequired,
};

export default CheckBlock;
