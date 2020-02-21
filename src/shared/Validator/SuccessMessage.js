import React from './node_modules/react';
import { MAIL_SENT, REGISTERED, PASS_CHANGED } from './messageTypes';

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
		case REGISTERED:
			return (
				<Alert severity="success" className={classes.alertt}>
					{t('SUCCESS_REGISTER')}
				</Alert>
			);

		case MAIL_SENT:
			return (
				<Alert severity="success" className={classes.alertt}>
					{t('SUCCESS_MAIL_SENT')}
				</Alert>
			);

		case PASS_CHANGED:
			return (
				<Alert severity="success" className={classes.alertt}>
					{t('PASSWORD_CHANGED')}
				</Alert>
			);

		default:
			return null;
	}
}
