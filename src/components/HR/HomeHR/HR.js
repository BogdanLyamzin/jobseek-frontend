import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import FormHR from './FormHR';
import useStyles from './styles';
import UpdatePhoto from './UpdatePhoto';
import Title from '../../../shared/Title';
import { updateHR } from '../../../store/hr/actions';

const HR = ({ user, updateHR }) => {
	const classes = useStyles();
	const [hiddenForm, setHiddenForm] = useState(false);
	const [values, setValues] = useState(null);

	useEffect(() => {
		if (user) setValues({ ...user.result });
	}, [user]);

	const handleChange = event => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	const submitForm = e => {
		e.preventDefault();
		updateHR('5dfba763a638d31fcc1921de', values);
	};

	const selectedFile = photo => {
		const fd = new FormData();
		fd.append('avatar', photo[0]);
		updateHR('5dfba763a638d31fcc1921de', fd);
	};

	const updateHRinfo = e => {
		e.preventDefault();
		setHiddenForm(!hiddenForm);
	};

	return (
		<div className={classes.container}>
			<div className={classes.hr}>
				<Title text="Мій профіль (HR)" />
				<div className={classes.hrInfo}>
					<form className={classes.hrFlex}>
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
			</div>
		</div>
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
