import React from 'react';
import { Translation } from 'react-i18next';

import Radio from '../../../../shared/Radio';
import Input from '../../../../shared/Input';

const FormCommonInfo = ({ classes, handleChange, values }) => {
	return (
		<Translation>
			{t => (
				<>
					<div className={classes.vacancyLocation}>
						<div className={classes.vacancyLocationItem}>
							<div className={classes.vacancyKey}>{t('COUNTRY')}*</div>
							<Input
								type="text"
								name="country"
								className={classes.vacancyInput}
								onChange={handleChange}
								value={values.country}
							/>
						</div>
						<div className={classes.vacancyLocationItem}>
							<div className={classes.vacancyKey}>{t('CITY')}*</div>
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
							<div className={classes.vacancyKey}>{t('EMPLOYMENT_TYPE')}*</div>
							<label className={classes.vacancyEmploymenttype}>
								<Radio
									name="employmentType"
									value="fullDay"
									onChange={handleChange}
									checked={values.employmentType === 'fullDay'}
								/>
								{t('FULL_DAY')}
							</label>
							<label className={classes.vacancyEmploymenttype}>
								<Radio
									name="employmentType"
									value="non-fullDay"
									onChange={handleChange}
									checked={values.employmentType === 'non-fullDay'}
								/>
								{t('PART_TIME')}
							</label>
							<label className={classes.vacancyEmploymenttype}>
								<Radio
									name="employmentType"
									value="freelance"
									onChange={handleChange}
									checked={values.employmentType === 'freelance'}
								/>
								{t('FREELANCE')}
							</label>
							<label className={classes.vacancyEmploymenttype}>
								<Radio
									name="employmentType"
									value="distantWork"
									onChange={handleChange}
									checked={values.employmentType === 'distantWork'}
								/>
								{t('REMOTE')}
							</label>
							<label className={classes.vacancyEmploymenttype}>
								<Radio
									name="employmentType"
									value="any"
									onChange={handleChange}
									checked={values.employmentType === 'any'}
								/>
								{t('ANY')}
							</label>
						</div>
						<div className={classes.vacancyLocationItem}>
							<div className={classes.vacancyKey}>{t('SALARY')}*</div>
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
			)}
		</Translation>
	);
};

export default FormCommonInfo;
