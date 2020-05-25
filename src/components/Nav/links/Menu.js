import React from 'react';
import { Route } from 'react-router-dom';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import Links from './Links';
import useStyles from './styles';
import withHidden from 'hoc/withHidden';
import withIsLogin from 'hoc/withIsLogin';
import CompanyLinks from './CompanyLinks';
import CandidateLinks from './CandidateLinks';
import { PROFILE_HR } from 'utils/variables/hrLinks';

const Menu = ({ isLogin, hidden, setHidden }) => {
	const classes = useStyles();
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

	return isLogin ? (
		<div className={classes.relative}>
			<div className={classes.menu} onClick={setHidden}>
				Menu
			</div>
			<SwipeableDrawer
				open={!hidden}
				anchor="right"
				onOpen={setHidden}
				onClose={setHidden}
				disableDiscovery={iOS}
				disableBackdropTransition={!iOS}
			>
				<Route
					path="/hr"
					render={() => <Links className={classes.flex} links={PROFILE_HR} setHidden={setHidden} />}
				/>
				<Route path="/company" render={() => <CompanyLinks className={classes.flex} />} />
				<Route path="/candidate" render={() => <CandidateLinks className={classes.flex} />} />
			</SwipeableDrawer>
		</div>
	) : null;
};

export default withHidden(withIsLogin(Menu));
