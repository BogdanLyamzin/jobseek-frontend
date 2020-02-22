import React from './node_modules/react';
import { INVALID_LOG_PASS, MAIL_NOT_EXIST, MAIL_EXIST } from './messageTypes';

import { useTranslation } from './node_modules/react-i18next';
import { Alert } from './node_modules/@material-ui/lab';
import { makeStyles } from './node_modules/@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
	alertt: {
		maxWidth: '980px',
		margin: '0 auto',
	},
}));

export default function SuccessMessage(props) {
	const classes = useStyle();
	const { type } = props;
	const { t } = useTranslation();

	switch (type.message) {
		case INVALID_LOG_PASS:
			return (
				<Alert severity="error" className={classes.alertt}>
					{t('LOGIN_PASS_INCORRECT')}
				</Alert>
			);
			

		case MAIL_NOT_EXIST:
			return (
				<Alert severity="error" className={classes.alertt}>
					{t('MAIL_NOT_EXIST')}
				</Alert>
			);
		

		case MAIL_EXIST:
			return (
				<Alert severity="error" className={classes.alertt}>
					{t('USER_EXIST')}
				</Alert>
			);
			

		default:
			return null;
	}
}
