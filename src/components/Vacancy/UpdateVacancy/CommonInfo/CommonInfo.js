import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Text from '../../../../shared/Text';
import Button from '../../../../shared/Button';
import withLanguage from '../../../../hoc/withLanguage';
import useStyles from '../../AddVacancy/CommonInfo/styles';
import { saveInfo } from '../../../../store/vacancy/actions';
import FormCommonInfo from '../../AddVacancy/FormCommonInfo';
import validation from '../../../../utils/validation/hrCompany';

const CommonInfo = ({ t, info, saveInfo, oneVacancy }) => {
	const classes = useStyles();
	const [values, setValues] = useState({
		city: info ? info.city : '',
		salary: info ? info.salary : '',
		country: info ? info.country : '',
		description: info ? info.description : '',
		employmentType: info ? info.employmentType : 'fullDay',
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

	const validationStatus = () => {
		return (
			validation('city', values.city, t) &&
			validation('country', values.country, t) &&
			validation('salary', values.salary, t) &&
			validation('description', values.description, t)
		);
	};

	const saveInfoForm = () => {
		if (validationStatus()) {
			saveInfo({ ...values });
		}
	};

	return (
		<div>
			<FormCommonInfo
				classes={classes}
				handleChange={handleChange}
				values={values}
			/>

			<hr className={classes.vacancyLine} />

			<div className={classes.vacancyDescription}>
				<Text className={classes.vacancyKey}>{t('VACANCY_DESCRIPTION')}*</Text>
				<textarea
					name="description"
					className={classes.vacancyDescriptionArea}
					onChange={handleChange}
					value={values.description}
				/>
				<div className={classes.alignCenter}>
					<Button click={saveInfoForm}>{t('SAVE')}</Button>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = ({ vacancy }) => ({
	info: vacancy.addVacancy,
	oneVacancy: vacancy.vacancy,
});

const mapDispatchToProps = {
	saveInfo,
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withLanguage,
)(CommonInfo);
