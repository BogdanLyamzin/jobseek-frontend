import React from 'react';

import Text from 'shared/Text';
import Input from 'shared/Input';
import withLanguage from 'hoc/withLanguage';
import RadioGroup from 'shared/RadioGroupEmpType';

const FormCommonInfo = ({ t, classes, handleChange, values }) => (
	<>
		<div className={classes.vacancyLocation}>
			<div className={classes.vacancyLocationItem}>
				<Text className={classes.vacancyKey}>{t('COUNTRY')}*</Text>
				<Input
					type="text"
					name="country"
					className={classes.vacancyInput}
					onChange={handleChange}
					value={values.country}
				/>
			</div>
			<div className={classes.vacancyLocationItem}>
				<Text className={classes.vacancyKey}>{t('CITY')}*</Text>
				<Input
					type="text"
					name="city"
					className={classes.vacancyInput}
					onChange={handleChange}
					value={values.city}
				/>
			</div>
		</div>
		<div className={classes.vacancyLocation}>
			<div className={classes.vacancyLocationItem}>
				<Text className={classes.vacancyKey}>{t('EMPLOYMENT_TYPE')}*</Text>
				<RadioGroup onChange={handleChange} values={values.employmentType} />
			</div>
			<div className={classes.vacancyLocationItem}>
				<Text className={classes.vacancyKey}>{t('SALARY')}*</Text>
				<label className={classes.vacancySalary}>
					USD
					<Input
						step="10"
						min="100"
						type="number"
						name="salary"
						className={classes.vacancySalaryInp}
						onChange={handleChange}
						value={values.salary}
					/>
				</label>
			</div>
		</div>
	</>
);

export default withLanguage(FormCommonInfo);
