import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Button from '../../../../shared/Button';
import useStyles from '../../AddCv/CommonInfo/styles';
import { saveInfo } from '../../../../store/vacancy/actions';
import FormCommonInfo from '../../AddCv/FormCommonInfo';
import validation from '../../../../utils/validation/hrCompany';

const CommonInfo = ({ info, saveInfo, oneCv }) => {
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
		if (oneCv)
			setValues({
				city: oneCv.city,
				salary: oneCv.salary,
				country: oneCv.country,
				description: oneCv.description,
				employmentType: oneCv.employmentType,
			});
	}, [oneCv]);

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
					<Button
						click={() => {
							if (validationStatus(values)) {
								saveInfo({ ...values });
							}
						}}
						text={t('SAVE')}
					/>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = ({ cv }) => {
	return {
		info: cv.addCv,
		oneCv: cv.cv,
	};
};

const mapDispatchToProps = {
	saveInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(CommonInfo);
