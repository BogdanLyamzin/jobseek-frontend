import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Button from '../../../../shared/Button';
import useStyles from '../../AddVacancy/CommonInfo/styles';
import { saveInfo } from '../../../../store/vacancy/actions';
import FormCommonInfo from '../../AddVacancy/FormCommonInfo';

const CommonInfo = ({ info, saveInfo, oneVacancy }) => {
	const classes = useStyles();
	const { t } = useTranslation();
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

	useEffect(() => {
		return () => {
			saveInfo({ ...values });
		};
	}, [values, saveInfo]);

	const handleChange = event => {
		setValues({ ...values, [event.target.name]: event.target.value });
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
				<div className={classes.vacancyKey}>{t('VACANCY_DESCRIPTION')}*</div>
				<textarea
					name="description"
					className={classes.vacancyDescriptionArea}
					onChange={handleChange}
					value={values.description}
				/>
				<div className={classes.alignCenter}>
					<Button click={() => saveInfo({ ...values })} text={t('SAVE')} />
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = ({ vacancy }) => {
	return {
		info: vacancy.addVacancy,
		oneVacancy: vacancy.vacancy,
	};
};

const mapDispatchToProps = {
	saveInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(CommonInfo);
