import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import FormHR from './FormHR';
import useStyles from './styles';
import UpdatePhoto from './UpdatePhoto';
import PageWrap from '../../../shared/PageWrap';
import { updateHR } from '../../../store/hr/actions';
import CreateOutlinedIcon from '../../../shared/CreateOutlinedIcon';

const HR = ({ user, updateHR }) => {
	const classes = useStyles();
	const [hiddenForm, setHiddenForm] = useState(false);
	const [values, setValues] = useState(null);
	const { t } = useTranslation();

	useEffect(() => {
		if (user) setValues({ ...user });
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

	const updateHRinfo = () => {
		setHiddenForm(!hiddenForm);
	};

	return (
		<PageWrap title={t('MY_PROFILE')}>
			<div className={classes.hrInfo}>
				<form className={classes.hrFlex}>
					<CreateOutlinedIcon
						className={`${classes.iconPenSm} ${classes.iconPen}`}
						click={updateHRinfo}
					/>
					<UpdatePhoto uploadPhoto={selectedFile} classes={classes} />
					<FormHR
						values={values}
						classes={classes}
						submitForm={submitForm}
						updateHRinfo={updateHRinfo}
						hidden={hiddenForm}
						handleChange={handleChange}
					/>
				</form>
			</div>
		</PageWrap>
	);
};

const mapStateToProps = ({ hr }) => {
	return {
		user: hr.user,
	};
};

const mapDispatchToProps = {
	updateHR,
};

export default connect(mapStateToProps, mapDispatchToProps)(HR);
