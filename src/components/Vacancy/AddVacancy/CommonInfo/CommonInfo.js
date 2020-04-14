import React, { useState } from 'react';
import { connect } from 'react-redux';

import useStyles from './styles';
import { FULL } from 'utils/variables/employmentType';
import FormCommonInfo from '../../VacancySkills/FormCommonInfo';

const CommonInfo = ({ info }) => {
	const classes = useStyles();
	const [values, setValues] = useState({
		city: info ? info.city : '',
		salary: info ? info.salary : '',
		country: info ? info.country : '',
		description: info ? info.description : '',
		employmentType: info ? info.employmentType : FULL,
	});

	const handleChange = event => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	return (
		<FormCommonInfo
			classes={classes}
			handleChange={handleChange}
			values={values}
		/>
	);
};

const mapStateToProps = ({ vacancy }) => ({
	info: vacancy.addVacancy,
});

export default connect(mapStateToProps)(CommonInfo);
