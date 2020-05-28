import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Alert } from '@material-ui/lab';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField/TextField';

import API from 'services/api';
import useStyle from './styles';
import PageWrap from 'shared/PageWrap';
import Button from 'shared/Buttonn/Button';
import { setPass } from 'store/auth/action/authActions';
import { NO_PASSWORD, NOT_PASSWORD_LENGTH, DO_NOT_MATCH } from 'shared/Validator/messageTypes.js';

function handleOnSubmit(password, password2, id, props) {
	const data = {
		password,
		password2,
		id,
	};
	props.setPass(data, props.history);
}

function SetNewPass(props) {
	const classes = useStyle();
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');
	const [id, setId] = useState('');
	const [error, setError] = useState(false);

	useEffect(() => {
		API.get(`resetpassword/${props.match.params.token}`)
			.then(data => {
				if (data.status === 'error') {
					setError(true);
					return;
				}
				setId(data);
			})
			// eslint-disable-next-line no-console
			.catch(error => console.log(error));
	});
	const { errors } = props.auth;
	const { t } = useTranslation();
	return (
		<PageWrap title={t('SET_NEW_PASSWORD')}>
			{error && (
				<Alert severity="error" className={classes.alertt}>
					{t('INVALID_LINK')}
				</Alert>
			)}
			{!error && (
				<div className={classes.flex}>
					<form
						className={classes.fields}
						onSubmit={e => {
							e.preventDefault();
							handleOnSubmit(password, password2, id, props);
						}}
					>
						<TextField
							label={t('PASSWORD')}
							name="password"
							variant="outlined"
							fullWidth
							margin="normal"
							type="password"
							onChange={e => {
								e.preventDefault();
								setPassword(e.target.value);
							}}
							value={password}
						/>
						{errors.password === NO_PASSWORD && (
							<span className={classes.error}>{t('ENTER_PASSWORD')}</span>
						)}
						{errors.password === NOT_PASSWORD_LENGTH && (
							<span className={classes.error}>{t('INCORRECT_LENGTH')}</span>
						)}
						<TextField
							label={t('CONFIRM_PASSWORD')}
							name="password2"
							variant="outlined"
							size="large"
							fullWidth
							margin="normal"
							type="password"
							onChange={e => {
								e.preventDefault();
								setPassword2(e.target.value);
							}}
							value={password2}
						/>
						{errors.password2 === NO_PASSWORD && (
							<span className={classes.error}>{t('ENTER_PASSWORD')}</span>
						)}
						{errors.password2 === NOT_PASSWORD_LENGTH && (
							<span className={classes.error}>{t('INCORRECT_LENGTH')}</span>
						)}
						{errors.password2 === DO_NOT_MATCH && (
							<span className={classes.error}>{t('PASSWORDS_DO_NOT_MATCH')}</span>
						)}
						<input type="hidden" value={id} />

						<Button className={classes.btn} size="large" name={t('CONTINUE')} type="submit" />
					</form>
				</div>
			)}
		</PageWrap>
	);
}

const mapStateToProps = state => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { setPass })(SetNewPass);
