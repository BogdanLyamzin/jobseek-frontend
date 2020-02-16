import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	title: {
		fontFamily: '"Open Sans", sans-serif',
		fontSize: '24px',
		color: '#3D3B69',
		marginBottom: '20px',
		textAlign: 'center',
		[theme.breakpoints.down(600)]: {
			fontSize: '20px',
			marginBottom: '15px',
		},
	},
}));

const Title = ({ text }) => {
	const classes = useStyles();
	return <h1 className={classes.title}>{text}</h1>;
};

export default Title;
