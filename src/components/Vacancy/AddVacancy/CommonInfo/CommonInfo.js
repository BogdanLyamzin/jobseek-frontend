import React, { useState } from 'react';
import { connect } from 'react-redux';

import { FULL } from 'utils/variables/employmentType';
import { onChangeFactory } from 'utils/actions/onChangeFactory';
import FormCommonInfo from '../../VacancySkills/FormCommonInfo';

const CommonInfo = ({ info }) => {
	const [values, setValues] = useState({
		city: info ? info.city : '',
		salary: info ? info.salary : '',
		country: info ? info.country : '',
		description: info ? info.description : '',
		employmentType: info ? info.employmentType : FULL,
	});
	const handleChange = onChangeFactory(values, setValues);

	return <FormCommonInfo handleChange={handleChange} values={values} />;
};

const mapStateToProps = ({ vacancy }) => ({
	info: vacancy.addVacancy,
});

export default connect(mapStateToProps)(CommonInfo);
