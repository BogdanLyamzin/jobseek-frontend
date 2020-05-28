import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './styles';

const Button = ({ children, click }) => {
	const classes = useStyles();
	return (
		<button onClick={click} className={classes.btn}>
			{children}
		</button>
	);
};

Button.propTypes = {
	click: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
};

export default Button;
