import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import Title from '../Title';

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.paper,
		padding: '15px',
		margin: '20px auto',
		marginBottom: '40px',
		maxWidth: '980px',
		boxShadow: '0px 10px 15px rgba(230, 235, 255, 0.5)',
	},
}));

const PageWrap = ({ title, children }) => {
	const classes = useStyles();
	return (
		<Container>
			<Title>{title}</Title>
			<Paper className={classes.root}>{children}</Paper>
		</Container>
	);
};

PageWrap.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default PageWrap;
