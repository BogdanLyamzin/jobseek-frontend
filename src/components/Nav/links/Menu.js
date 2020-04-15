import React from 'react';
import { Route } from 'react-router-dom';

import Links from './Links';
import useStyles from './styles';
import withHidden from 'hoc/withHidden';
import withIsLogin from 'hoc/withIsLogin';
import CompanyLinks from './CompanyLinks';
import CandidateLinks from './CandidateLinks';
import { PROFILE_HR } from 'utils/variables/hrLinks';

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
						render={() => <Links className={classes.flex} links={PROFILE_HR} />}
					/>
					<Route
						path="/company"
						render={() => <CompanyLinks className={classes.flex} />}
					/>
					<Route
						path="/candidate"
						render={() => <CandidateLinks className={classes.flex} />}
					/>
				</div>
			)}
		</div>
	) : null;
};

export default withHidden(withIsLogin(Menu));
