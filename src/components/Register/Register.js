import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import useStyle from './styles';
import Radio from 'shared/Radio';
import Button from 'shared/Buttonn';
import PageWrap from 'shared/PageWrap';
import SocLinks from 'shared/SocLinks';
import Validator from 'shared/Validator';
import { registerUser } from 'store/auth/action/authActions';

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
		<PageWrap title={t('MAKE_PROFILE')}>
			<Validator type={errors} />
			<div className={classes.root}>
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
							<FormControlLabel value="user" control={<Radio />} label={t('LOOKING_JOB')} />
							<FormControlLabel
								value="company"
								control={<Radio />}
								label={t('LOOKING_EMPLOYMENT')}
							/>
						</div>
					</RadioGroup>
					<Button className={classes.btn} size="large" name={t('CONTINUE')} type="submit" />
				</form>
				{type === 'user' && <SocLinks />}
			</div>
		</PageWrap>
	);
}

const mapStateToProps = state => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
