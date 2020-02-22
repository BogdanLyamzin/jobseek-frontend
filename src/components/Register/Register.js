import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import Button from '../shared/Buttonn';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';

import { registerUser } from '../../store/auth/action/authActions';
import SocLink from '../shared/SocLink/SocLink';
import Validator from '../shared/Validator';

const GreenCheckbox = withStyles(theme => ({
	root: {
		color: theme.palette.color,
		'&$checked': {
			color: theme.palette.color,
		},
	},
	checked: {},
}))(props => <Checkbox color="default" {...props} />);

const useStyle = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.paper,
		padding: '15px',
		marginTop: '20px',
		margin: '0 auto',
		marginBottom: '40px',
		maxWidth: '980px',
		[theme.breakpoints.up('sm')]: {
			display: 'flex',
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
	soclink: {
		marginTop: '10px',
		[theme.breakpoints.up('sm')]: {
			width: '40%',
		},
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

function handleSubmit(email, password, password2, props) {
	const user = {
		email,
		password,
		password2,
	};
	props.registerUser(user, props.history);
}

function Register(props) {
	const classes = useStyle();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');
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
						handleSubmit(email, password, password2, props);
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
					<Validator type={errors} field="password2" />
					<div className={classes.flex}>
						<FormControlLabel
							control={<GreenCheckbox className={classes.checkbox} />}
							label="Я кандидат"
						/>
						<FormControlLabel
							control={<GreenCheckbox />}
							label="Я роботодавець"
						/>
					</div>
					<Button
						className={classes.btn}
						size="large"
						name={t('CONTINUE')}
						type="submit"
					/>
				</form>
				<div className={classes.soclink}>
					<SocLink
						title={`${t('ENTER')} ${t('WITH')} Facebook`}
						type="facebook"
						link="/api/auth/facebook"
					/>
					<SocLink
						title={`${t('ENTER')} ${t('WITH')} Google`}
						type="google"
						link="/api/auth/google"
					/>
					<SocLink
						title={`${t('ENTER')} ${t('WITH')} Linkedin`}
						type="linkedin"
						link="/api/auth/linkedin"
					/>
				</div>
			</Paper>
		</Container>
	);
}

const mapStateToProps = state => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
