import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StyledLink = ({ to, onClick, className, children }) => (
	<Link to={to} onClick={onClick} className={className}>
		{children}
	</Link>
);

StyledLink.propTypes = {
	onClick: PropTypes.func,
	to: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	className: PropTypes.string.isRequired,
};

export default StyledLink;
