import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	input: {
		outline: 'none',
		boxShadow: 'inset 0 0 0 50px #fff',
		fontFamily: theme.palette.font,
		textFillColor: '#000',
		'&:hover': {
			border: `1px solid #acadb1`,
		},
		'&:focus': {
			border: `1px solid ${theme.palette.color}`,
		},
	},
}));

const Input = ({
	min,
	step,
	type,
	name,
	value,
	onChange,
	className,
	placeholder,
}) => {
	const classes = useStyles();
	return (
		<input
			min={min}
			step={step}
			type={type}
			name={name}
			onChange={onChange}
			defaultValue={value}
			placeholder={placeholder}
			className={`${className} ${classes.input}`}
		/>
	);
};

Input.propTypes = {
	min: PropTypes.number,
	step: PropTypes.number,
	placeholder: PropTypes.string,
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	className: PropTypes.string.isRequired,
};

export default React.memo(Input);
