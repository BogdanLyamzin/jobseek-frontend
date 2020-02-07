import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	btn: {
		fontFamily: '"Open Sans", sans-serif',
		fontSize: '16px',
		color: '#3D3B69',
		padding: '13px 45px',
		background: 'linear-gradient(0.03deg, #00F2C9 0%, #FDFDFD 226.41%)',
		boxShadow: '0px 4px 10px rgba(0, 242, 201, 0.5)',
		borderRadius: '28px',
		border: '0',
		cursor: 'pointer',
	},
}));

const Button = ({ text, click }) => {
	const classes = useStyles();
	return (
		<button onClick={click} className={classes.btn}>
			{text}
		</button>
	);
};

export default Button;
