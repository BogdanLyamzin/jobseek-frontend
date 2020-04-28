import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';

import useStyle from './styles';
import Button from 'shared/Buttonn';
import PageWrap from 'shared/PageWrap';
import Validator from 'shared/Validator';
import { emailConfirm } from 'store/auth/action/authActions';

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
		<PageWrap title={t('RESTORE_BY_EMAIL')}>
			<Validator type={errors} />
			<Validator type={success} />
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

					<Button className={classes.btn} size="large" name={t('CONTINUE')} type="submit" />
				</form>
			</div>
		</PageWrap>
	);
}

const mapStateToProps = state => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { emailConfirm })(ResetPass);
