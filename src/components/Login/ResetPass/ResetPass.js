import React, { useState } from 'react';
import { connect } from 'react-redux';

import { emailConfirm } from '../../../store/auth/action/authActions';
import Button from '../../../shared/Buttonn';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import Validator from '../../../shared/Validator';

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

function handleOnSubmit(email, props) {
	const user = {
		email,
	};
	props.emailConfirm(user, props.history);
}

function ResetPass(props) {
	const classes = useStyle();
	const [email, setEmail] = useState('');
	const { t } = useTranslation();
	const { errors, success } = props.auth;
	return (
		<Container>
			<h1 className={classes.title}>{t('RESTORE_BY_EMAIL')}</h1>
			<Validator type={errors} />
			<Validator type={success} />
			<Paper className={classes.root}>
				<div className={classes.flex}>
					<form
						onSubmit={e => {
							e.preventDefault();
							handleOnSubmit(email, props);
						}}
						className={classes.fields}
					>
						<TextField
							label={t('MAIL')}
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
	);
}

const mapStateToProps = state => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { emailConfirm })(ResetPass);
