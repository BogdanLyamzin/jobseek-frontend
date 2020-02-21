import React from './node_modules/react';

import { useTranslation } from './node_modules/react-i18next';
import { makeStyles } from './node_modules/@material-ui/core/styles';
import {
	NO_EMAIL,
	NOT_EMAIL,
	NO_PASSWORD,
	NOT_PASSWORD_LENGTH,
	DO_NOT_MATCH,
} from './messageTypes';

const useStyle = makeStyles(theme => ({
	error: {
		color: 'red',
	},
}));

export default function InputMessage(props) {
	const classes = useStyle();
	const { field, type } = props;
	const { t } = useTranslation();

	return (
		<>
			{field === 'email' &&
				(type.email === NO_EMAIL ? (
					<span className={classes.error}>{t('ENTER_MAIL')}</span>
				) : type.email === NOT_EMAIL ? (
					<span className={classes.error}>{t('INCORRECT_MAIL')}</span>
				) : null)}
			{field === 'password' &&
				(type.password === NO_PASSWORD ? (
					<span className={classes.error}>{t('ENTER_PASSWORD')}</span>
				) : type.password === NOT_PASSWORD_LENGTH ? (
					<span className={classes.error}>{t('INCORRECT_LENGTH')}</span>
				) : null)}
			{field === 'password2' &&
				(type.password2 === NO_PASSWORD ? (
					<span className={classes.error}>{t('ENTER_PASSWORD')}</span>
				) : type.password2 === DO_NOT_MATCH ? (
					<span className={classes.error}>{t('PASSWORDS_DO_NOT_MATCH')}</span>
				) : null)}
		</>
	);
}
