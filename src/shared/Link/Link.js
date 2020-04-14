import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StyledLink = ({ to, className, children }) => (
	<Link to={to} className={className}>
		{children}
	</Link>
);

StyledLink.propTypes = {
	to: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	className: PropTypes.string.isRequired,
};

export default StyledLink;
