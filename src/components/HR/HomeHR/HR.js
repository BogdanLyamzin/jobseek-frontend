import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import FormHR from './FormHR';
import useStyles from './styles';
import UpdatePhoto from './UpdatePhoto';
import PageWrap from '../../../shared/PageWrap';
import { updateHR } from '../../../store/hr/actions';
import withLanguage from '../../../hoc/withLanguage';

const HR = ({ user, updateHR, t }) => {
	const classes = useStyles();
	const [values, setValues] = useState(null);

	useEffect(() => {
		if (user) setValues(user);
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
			<div className={classes.hrInfo}>
				<form className={classes.hrFlex}>
					<UpdatePhoto uploadPhoto={selectedFile} classes={classes} />
					<FormHR
						values={values}
						classes={classes}
						submitForm={submitForm}
						handleChange={handleChange}
					/>
				</form>
			</div>
		</PageWrap>
	);
};

const mapStateToProps = ({ hr }) => ({
	user: hr.user,
});

const mapDispatchToProps = {
	updateHR,
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withLanguage,
)(HR);
