import React from 'react';
import { Link } from 'react-router-dom';

const StyledLink = ({ to, className, children }) => (
	<Link to={to} className={className}>
		{children}
	</Link>
);

export default StyledLink;
