import React from 'react';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import { Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import Title from '../../shared/Title';
import CompanyComments from './CompanyComments/Comments';
import CandidateComments from './CandidateComments/Comments';

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

const Comment = () => {
	const classes = useStyles();
	const { t } = useTranslation();

	return (
		<Container>
			<Title text={t('REVIEW')} />
			<Paper className={classes.root}>
				<Switch>
					<Route path="/company/review" component={CompanyComments} />
					<Route
						path="/company/candidate/review"
						component={CandidateComments}
					/>
				</Switch>
			</Paper>
		</Container>
	);
};

export default Comment;
