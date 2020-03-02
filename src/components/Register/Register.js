import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import Button from '../../shared/Buttonn';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { registerUser } from '../../store/auth/action/authActions';
import Validator from '../../shared/Validator';
import Radio from '../../shared/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import SocLinks from '../../shared/SocLinks';

const useStyle = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.paper,
		padding: '15px',
		marginTop: '20px',
		margin: '0 auto',
		marginBottom: '40px',
		maxWidth: '980px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
			justifyContent: 'space-around',
		},
	},

	btn: {
		margin: '20px 0',
	},
	alertt: {
		maxWidth: '980px',
		margin: '0 auto',
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
	flex: {
		display: 'flex',
		justifyContent: 'space-between',
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

function handleSubmit(email, password, password2, type, props) {
	const user = {
		email,
		password,
		password2,
		type,
	};
	props.registerUser(user, props.history);
}

function Register(props) {
	const classes = useStyle();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');
	const [type, setType] = useState('user');
	const { errors, isAuthenticated } = props.auth;
	const { t } = useTranslation();

	if (isAuthenticated) {
		return <Redirect to="/" />;
	}
	return (
		<Container>
			<h1 className={classes.title}>{t('MAKE_PROFILE')}</h1>
			<Validator type={errors} />
			<Paper className={classes.root}>
				<form
					className={classes.fields}
					onSubmit={e => {
						e.preventDefault();
						handleSubmit(email, password, password2, type, props);
					}}
				>
					<TextField
						label={t('MAIL')}
						name="email"
						variant="outlined"
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
						onChange={e => {
							e.preventDefault();
							setPassword(e.target.value);
						}}
						value={password}
					/>
					<Validator type={errors} field="password" />
					<TextField
						label={t('CONFIRM_PASSWORD')}
						name="password2"
						variant="outlined"
						fullWidth
						margin="normal"
						type="password"
						onChange={e => {
							e.preventDefault();
							setPassword2(e.target.value);
						}}
						value={password2}
					/>
					<Validator type={errors} field="password2" />
					<RadioGroup
						value={type}
						name="type"
						onChange={e => {
							e.preventDefault();
							setType(e.target.value);
						}}
					>
						<div className={classes.flex}>
							<FormControlLabel
								value="user"
								control={<Radio />}
								label={t('LOOKING_JOB')}
							/>
							<FormControlLabel
								value="company"
								control={<Radio />}
								label={t('LOOKING_EMPLOYMENT')}
							/>
						</div>
					</RadioGroup>
					<Button
						className={classes.btn}
						size="large"
						name={t('CONTINUE')}
						type="submit"
					/>
				</form>
				{type === 'user' && <SocLinks />}
			</Paper>
		</Container>
	);
}

const mapStateToProps = state => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
