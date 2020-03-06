import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	title: {
		fontFamily: theme.palette.font,
		fontSize: '24px',
		color: theme.palette.textColor,
		[theme.breakpoints.up('sm')]: {
			marginTop: '50px',
		},
		marginBottom: '20px',
		textAlign: 'center',
		[theme.breakpoints.down(600)]: {
			fontSize: '20px',
			marginBottom: '15px',
		},
	},
}));

const Title = ({ children }) => {
	const classes = useStyles();
	return <h1 className={classes.title}>{children}</h1>;
};

export default Title;
