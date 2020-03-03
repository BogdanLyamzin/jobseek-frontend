import React, { useState } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';

import Button from '../../../shared/Buttonn';
import Validator from '../../shared/Validator';
import { loginAdmin } from '../../../store/auth/action/authActions';

const useStyle = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.paper,
		padding: '15px',
		margin: '20px auto',
		maxWidth: '980px',
	},
	main: {
		backgroundColor: theme.palette.backgroundColor,
		position: 'relative',
		height: '100vh',
		padding: '60px',
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
	},

	fields: {
		[theme.breakpoints.up('sm')]: {
			width: '40%',
			marginRight: '25px',
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

function handleOnSubmit(email, password, props) {
	const user = {
		email,
		password,
	};
	props.adminLogin(user, props.history);
}

function Login(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const classes = useStyle();
	const { errors, success } = props.auth;
	const { t } = useTranslation();

	return (
		<div className={classes.main}>
			<Container>
				<h1 className={classes.title}>{t('ADMIN')}</h1>
				<Validator type={errors} />
				<Validator type={success} />

				<Paper className={classes.root}>
					<div className={classes.flex}>
						<form
							onSubmit={e => {
								e.preventDefault();
								handleOnSubmit(email, password, props);
							}}
							className={classes.fields}
						>
							<TextField
								label={t('LOGIN')}
								name="email"
								variant="outlined"
								type="email"
								fullWidth
								margin="normal"
								onChange={e => {
									e.preventDefault();
									setEmail(e.target.value.toLowerCase());
								}}
								value={email}
							/>
							<Validator type={errors} field="email" />
							<TextField
								label={t('PASSWORD')}
								name="password"
								variant="outlined"
								fullWidth
								margin="normal"
								type="password"
								value={password}
								onChange={e => {
									e.preventDefault();
									setPassword(e.target.value);
								}}
							/>
							<Validator type={errors} field="password" />

							<Button
								className={classes.btn}
								size="large"
								name={t('CONTINUE')}
								type="submit"
							/>
						</form>
					</div>
				</Paper>
			</Container>
		</div>
	);
}

const mapStateToProps = state => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { loginAdmin })(Login);
