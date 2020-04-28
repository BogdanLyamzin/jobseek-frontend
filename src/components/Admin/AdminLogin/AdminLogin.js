import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';

import useStyle from './styles';
import Button from 'shared/Buttonn';
import PageWrap from 'shared/PageWrap';
import Validator from 'shared/Validator';
import { loginAdmin } from 'store/auth/action/authActions';

function handleOnSubmit(email, password, props) {
	const user = {
		email,
		password,
	};
	props.loginAdmin(user, props.history);
}

function Login(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const classes = useStyle();
	const { errors, success } = props.auth;
	const { t } = useTranslation();

	return (
		<div className={classes.main}>
			<PageWrap title={t('ADMIN')}>
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

						<Button className={classes.btn} size="large" name={t('CONTINUE')} type="submit" />
					</form>
				</div>
			</PageWrap>
		</div>
	);
}

const mapStateToProps = state => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { loginAdmin })(Login);
