import React from 'react';
import { Route } from 'react-router-dom';

import HrLinks from './HrLinks';
import useStyles from './styles';
import withHidden from 'hoc/withHidden';
import withIsLogin from 'hoc/withIsLogin';
import CompanyLinks from './CompanyLinks';
import CandidateLinks from './CandidateLinks';

const Menu = ({ isLogin, hidden, setHidden }) => {
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

export default withHidden(withIsLogin(Menu));
