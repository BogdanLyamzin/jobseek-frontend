import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';

import { logOut } from '../../store/auth/action/authActions';

const useStyle = makeStyles(theme => ({
	btn: {
		background: 'none',
		outline: 'none',
		border: 'none',
		color: theme.palette.color,
		cursor: 'pointer',
	},
}));

function LogOut(props) {
	const classes = useStyle();
	const { logOut } = props;
	const { t } = useTranslation();
	return (
		<button className={classes.btn} onClick={() => logOut(props.history)}>
			{t('EXIT')}
		</button>
	);
}

export default connect(null, { logOut })(withRouter(LogOut));
