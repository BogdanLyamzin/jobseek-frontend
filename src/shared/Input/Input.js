import React from 'react';
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

export default React.memo(Input);
