import React from 'react';

import Text from 'shared/Text';
import Input from 'shared/Input';
import withLanguage from 'hoc/withLanguage';
import RadioGroup from 'shared/RadioGroupEmpType';
import InputWithLabel from 'shared/InputWithLabel';
import { COUNTRY_CITY } from 'utils/variables/inputProps';

const FormCommonInfo = ({ t, classes, handleChange, values }) => (
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
			<div className={classes.vacancyLocationItem}>
				<Text className={classes.vacancyKey}>{t('EMPLOYMENT_TYPE')}*</Text>
				<RadioGroup onChange={handleChange} values={values.employmentType} />
			</div>
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
	</>
);

export default withLanguage(FormCommonInfo);
