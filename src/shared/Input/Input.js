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

const Input = ({ onChange, type, name, value, step, min, className }) => {
	const classes = useStyles();
	return (
		<input
			step={step}
			min={min}
			type={type}
			name={name}
			defaultValue={value}
			onChange={onChange}
			className={`${className} ${classes.input}`}
		/>
	);
};

export default React.memo(Input);
