import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	title: {
		fontFamily: '"Open Sans", sans-serif',
		fontSize: '24px',
		color: '#3D3B69',
		marginBottom: '15px',
		textAlign: 'center',
	},
}));

const Title = ({ text }) => {
	const classes = useStyles();
	return <h1 className={classes.title}>{text}</h1>;
};

export default Title;
