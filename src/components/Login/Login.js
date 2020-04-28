import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';

import useStyle from './styles';
import Button from 'shared/Buttonn';
import PageWrap from 'shared/PageWrap';
import SocLinks from 'shared/SocLinks';
import Validator from 'shared/Validator';
import { loginUser } from 'store/auth/action/authActions';

function handleOnSubmit(email, password, props) {
	const user = {
		email,
		password,
	};
	props.loginUser(user, props.history);
}

function Login(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const classes = useStyle();
	const { errors, success, isAuthenticated } = props.auth;
	const { t } = useTranslation();
	if (isAuthenticated) {
		return <Redirect to="/" />;
	}
	return (
		<PageWrap title={t('ENTER')}>
			<Validator type={errors} />
			<Validator type={success} />
			<div className={classes.flex}>
				<form
					onSubmit={e => {
						e.preventDefault();
						handleOnSubmit(email, password, props);
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
					<Link className={classes.link} to="/mailconfirm">
						{t('FORGOT_PASS')}?
					</Link>

					<Button className={classes.btn} size="large" name={t('CONTINUE')} type="submit" />
					<Link to="/register" className={classes.linkSign}>
						{t('REGISTER')}
					</Link>
				</form>
				<div style={{ minWidth: '40%' }}>
					<p className={classes.socHeader}>{t('GO_SOCIAL')}</p>
					<SocLinks />
				</div>
			</div>
		</PageWrap>
	);
}

const mapStateToProps = state => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { loginUser })(Login);
