import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './hr.css';
import FormHR from './FormHR';
import UpdatePhoto from './UpdatePhoto';
import { updateHR } from '../../../store/hr/actions';

const HR = ({ user, updateHR }) => {
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
		<div className="container hr">
			<h2 className="hr-caption">Мій профіль (HR)</h2>
			<div className="hr-info">
				<form className="hr-flex" onSubmit={submitForm}>
					<UpdatePhoto selectFile={selectedFile} />
					<FormHR
						values={values}
						updateHRinfo={updateHRinfo}
						hidden={hiddenForm}
						handleChange={handleChange}
					/>
				</form>
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
