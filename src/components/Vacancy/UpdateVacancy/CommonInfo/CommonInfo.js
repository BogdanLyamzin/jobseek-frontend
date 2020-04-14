import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { FULL } from 'utils/variables/employmentType';
import useStyles from '../../AddVacancy/CommonInfo/styles';
import FormCommonInfo from '../../VacancySkills/FormCommonInfo';

const CommonInfo = ({ info, oneVacancy }) => {
	const classes = useStyles();
	const [values, setValues] = useState({
		city: info ? info.city : '',
		salary: info ? info.salary : '',
		country: info ? info.country : '',
		description: info ? info.description : '',
		employmentType: info ? info.employmentType : FULL,
	});

	useEffect(() => {
		if (oneVacancy)
			setValues({
				city: oneVacancy.city,
				salary: oneVacancy.salary,
				country: oneVacancy.country,
				description: oneVacancy.description,
				employmentType: oneVacancy.employmentType,
			});
	}, [oneVacancy]);

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
	oneVacancy: vacancy.vacancy,
});

export default connect(mapStateToProps)(CommonInfo);
