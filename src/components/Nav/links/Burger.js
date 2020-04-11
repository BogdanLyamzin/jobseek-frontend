import React from 'react';
import { Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import HrLinks from './HrLinks';
import withHidden from 'hoc/withHidden';
import withIsLogin from 'hoc/withIsLogin';
import CompanyLinks from './CompanyLinks';
import CandidateLinks from './CandidateLinks';

const useStyles = makeStyles(theme => ({
	relative: {
		position: 'relative',
		display: 'inline-block',
		[theme.breakpoints.up(670)]: {
			display: 'none',
		},
	},
	absolute: {
		position: 'absolute',
		top: 33,
		right: 0,
	},
	flex: {
		display: 'flex',
		flexDirection: 'column',
		width: 250,
	},
	menu: {
		padding: '5px',
		border: `1px solid ${theme.palette.color}`,
	},
}));

const Burger = ({ isLogin, hidden, setHidden }) => {
	const classes = useStyles();

	return isLogin ? (
		<div className={classes.relative}>
			<div className={classes.menu} onClick={setHidden}>
				Menu
			</div>
			{!hidden && (
				<div className={classes.absolute} onClick={setHidden}>
					<Route
						path="/hr"
						render={() => <HrLinks className={classes.flex} />}
					/>
					<Route
						path="/company"
						render={() => <CompanyLinks className={classes.flex} />}
					/>
					<Route
						path="/candidate"
						component={CandidateLinks}
						render={() => <CandidateLinks className={classes.flex} />}
					/>
				</div>
			)}
		</div>
	) : null;
};

export default withHidden(withIsLogin(Burger));
