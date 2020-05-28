import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ className, children }) => (
	<div className={className}>{children}</div>
);

Text.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default Text;
