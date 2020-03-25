import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import useStyles from './styles';
import Text from '../../../../shared/Text';
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

	return (
		<div>
			<FormCommonInfo
				classes={classes}
				handleChange={handleChange}
				values={values}
			/>

			<hr className={classes.line} />

			<div className={classes.vacancyDescription}>
				<Text className={classes.vacancyKey}>{t('VACANCY_DESCRIPTION')}*</Text>
				<textarea
					name="description"
					className={classes.vacancyDescriptionArea}
					onChange={handleChange}
					value={values.description}
				/>
				<div className={classes.alignCenter}>
					<Button
						click={() => {
							if (validationStatus()) {
								saveInfo({ ...values });
							}
						}}
					>
						{t('SAVE')}
					</Button>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = {
	saveInfo,
};

const mapStateToProps = ({ vacancy }) => ({
	info: vacancy.addVacancy,
});

export default connect(mapStateToProps, mapDispatchToProps)(CommonInfo);
