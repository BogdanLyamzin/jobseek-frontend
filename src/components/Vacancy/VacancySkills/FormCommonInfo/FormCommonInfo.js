import React from 'react';
import { connect } from 'react-redux';

import Text from 'shared/Text';
import Input from 'shared/Input';
import useStyles from './styles';
import Button from 'shared/Button';
import withLanguage from 'hoc/withLanguage';
import { saveInfo } from 'store/vacancy/actions';
import RadioGroup from 'shared/RadioGroupEmpType';
import InputWithLabel from 'shared/InputWithLabel';
import validation from 'utils/validation/hrCompany';
import { COUNTRY_CITY } from 'utils/variables/inputProps';
import { CITY, SALARY, COUNTRY, DESCRIPTION } from 'utils/variables/inputName';

const FormCommonInfo = ({ t, saveInfo, handleChange, values }) => {
	const classes = useStyles();
	const validationStatus = () =>
		validation(COUNTRY, values.country, t) &&
		validation(CITY, values.city, t) &&
		validation(SALARY, values.salary, t) &&
		validation(DESCRIPTION, values.description, t);
	const saveForm = () => validationStatus() && saveInfo({ ...values });

	return (
		<>
			<div className={classes.vacancyLocation}>
				{COUNTRY_CITY.map(elem => (
					<InputWithLabel
						key={elem.name}
						text={`${t(elem.text)}*`}
						onChange={handleChange}
						name={elem.name}
						value={values[elem.name]}
						className={classes.vacancyInput}
						classNameText={classes.vacancyKey}
						classNameWrap={classes.vacancyLocationItem}
					/>
				))}
			</div>
			<div className={classes.vacancyLocation}>
				<RadioGroup onChange={handleChange} values={values.employmentType} />
				<div className={classes.vacancyLocationItem}>
					<Text className={classes.vacancyKey}>{t('SALARY')}*</Text>
					<label className={classes.vacancySalary}>
						USD
						<Input
							step={10}
							min={100}
							type="number"
							name="salary"
							className={classes.vacancySalaryInp}
							onChange={handleChange}
							value={values.salary}
						/>
					</label>
				</div>
			</div>
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
					<Button click={saveForm}>{t('SAVE')}</Button>
				</div>
			</div>
		</>
	);
};

export default connect(null, { saveInfo })(withLanguage(FormCommonInfo));
