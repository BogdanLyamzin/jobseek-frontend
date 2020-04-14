import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Form from './Form';
import useStyles from './styles';
import PageWrap from 'shared/PageWrap';
import Information from './Information';
import UpdatePhoto from './UpdatePhoto';
import withHidden from 'hoc/withHidden';
import { updateHR } from 'store/hr/actions';
import withLanguage from 'hoc/withLanguage';

const HR = ({ user, hidden, setHidden, updateHR, t }) => {
	const classes = useStyles();
	const [values, setValues] = useState({
		name: '',
		phone: '',
		email: '',
		lastName: '',
	});

	useEffect(() => {
		if (user)
			setValues({
				name: user.name,
				phone: user.phone,
				email: user.email,
				lastName: user.lastName,
			});
	}, [user]);

	const handleChange = event => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	const submitForm = () => {
		updateHR(user._id, values);
	};

	const selectedFile = photo => {
		const fd = new FormData();
		fd.append('avatar', photo[0]);
		updateHR(user._id, fd);
	};

	return (
		<PageWrap title={t('MY_PROFILE')}>
			<div className={classes.hr}>
				<form className={classes.hrFlex}>
					<UpdatePhoto uploadPhoto={selectedFile} classes={classes} />
					{hidden ? (
						<Information
							values={values}
							classes={classes}
							setHidden={setHidden}
						/>
					) : (
						<Form
							values={values}
							classes={classes}
							setHidden={setHidden}
							submitForm={submitForm}
							handleChange={handleChange}
						/>
					)}
				</form>
			</div>
		</PageWrap>
	);
};

HR.propTypes = {
	user: PropTypes.oneOfType([
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			phone: PropTypes.string.isRequired,
			email: PropTypes.string.isRequired,
			lastName: PropTypes.string.isRequired,
		}),
		PropTypes.oneOf([null]).isRequired,
	]),
	hidden: PropTypes.bool.isRequired,
	setHidden: PropTypes.func.isRequired,
	updateHR: PropTypes.func.isRequired,
};

const mapStateToProps = ({ hr }) => ({
	user: hr.user,
});

const mapDispatchToProps = {
	updateHR,
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withHidden,
	withLanguage,
)(HR);
