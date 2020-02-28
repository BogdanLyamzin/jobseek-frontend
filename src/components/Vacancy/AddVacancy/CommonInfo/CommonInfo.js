import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import useStyles from './styles';
import Button from '../../../../shared/Button';
import FormCommonInfo from '../FormCommonInfo';
import { saveInfo } from '../../../../store/vacancy/actions';
import validation from '../../../../utils/validation/hrCompany';

const CommonInfo = ({ info, saveInfo }) => {
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
		return () => {
			saveInfo({ ...values });
		};
	}, [values, saveInfo]);

	const handleChange = event => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	const validationStatus = () => {
		return (
			validation('city', values.city) &&
			validation('country', values.country) &&
			validation('salary', values.salary) &&
			validation('description', values.description)
		);
	};

	return (
		<div>
			<FormCommonInfo
				classes={classes}
				handleChange={handleChange}
				values={values}
			/>

			<hr className={classes.line} />

			<div className={classes.vacancyDescription}>
				<div className={classes.vacancyKey}>{t('VACANCY_DESCRIPTION')}*</div>
				<textarea
					name="description"
					className={classes.vacancyDescriptionArea}
					onChange={handleChange}
					value={values.description}
				/>
				<div className={classes.alignCenter}>
					<Button
						text={t('SAVE')}
						click={() => {
							if (validationStatus()) {
								saveInfo({ ...values });
							}
						}}
					/>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = {
	saveInfo,
};

const mapStateToProps = ({ vacancy }) => {
	return {
		info: vacancy.addVacancy,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CommonInfo);
