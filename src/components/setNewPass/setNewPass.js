/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import axios from 'axios';

import { setPass } from '../../store/auth/action/authActions';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container/Container';
import { Alert } from '@material-ui/lab';
import Paper from '@material-ui/core/Paper/Paper';
import TextField from '@material-ui/core/TextField/TextField';

import Button from '../../shared/Buttonn/Button';
import { makeStyles } from '@material-ui/core';
import {
	NO_PASSWORD,
	NOT_PASSWORD_LENGTH,
	DO_NOT_MATCH,
} from '../../shared/Validator/messageTypes.js';

const useStyle = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.paper,
		padding: '15px',
		margin: '20px auto',
		marginBottom: '40px',
		maxWidth: '980px',
	},
	flex: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
			justifyContent: 'space-around',
		},
	},
	socBtn: {
		margin: '15px 0',
		color: theme.palette.textColor,
	},
	social: {
		[theme.breakpoints.up('sm')]: {
			width: '40%',
		},
	},
	alertt: {
		maxWidth: '980px',
		margin: '0 auto',
	},
	btn: {
		margin: '20px 0',
	},
	error: {
		color: 'red',
	},
	link: {
		color: theme.palette.textColor,
		display: 'block',
		textAlign: ' right',
		textDecoration: 'none',
	},
	linkSign: {
		color: '#1DF2C2',
		textDecoration: 'none',
	},
	title: {
		textAlign: 'center',
		color: theme.palette.textColor,
		[theme.breakpoints.up('sm')]: {
			marginTop: '80px',
		},
	},
	fields: {
		[theme.breakpoints.up('sm')]: {
			width: '40%',
		},
		'& label.Mui-focused': {
			color: theme.palette.color,
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: theme.palette.color,
			},
			'&.Mui-focused fieldset': {
				borderColor: theme.palette.color,
			},
		},
	},
}));

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
		axios
			.get(`/resetpassword/${props.match.params.token}`)
			.then(res => {
				if (res.data.status === 'error') {
					setError(true);
					return;
				}
				setId(res.data);
			})
			.catch(error => console.log(error));
	});
	const { errors } = props.auth;
	const { t } = useTranslation();
	return (
		<Container>
			<h1 className={classes.title}>{t('SET_NEW_PASSWORD')}</h1>
			{error && (
				<Alert severity="error" className={classes.alertt}>
					{t('INVALID_LINK')}
				</Alert>
			)}
			{!error && (
				<Paper className={classes.root}>
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
								<span className={classes.error}>
									{t('PASSWORDS_DO_NOT_MATCH')}
								</span>
							)}
							<input type="hidden" value={id} />

							<Button
								className={classes.btn}
								size="large"
								name={t('CONTINUE')}
								type="submit"
							/>
						</form>
					</div>
				</Paper>
			)}
		</Container>
	);
}

const mapStateToProps = state => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { setPass })(SetNewPass);
