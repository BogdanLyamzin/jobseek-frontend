import React from 'react';

import Radio from '../../../../shared/Radio';
import Input from '../../../../shared/Input';

const FormCommonInfo = ({ classes, handleChange, values }) => {
	return (
		<>
			<div className={classes.vacancyLocation}>
				<div className={classes.vacancyLocationItem}>
					<div className={classes.vacancyKey}>Країна*</div>
					<Input
						type="text"
						name="country"
						className={classes.vacancyInput}
						onChange={handleChange}
						value={values.country}
					/>
				</div>
				<div className={classes.vacancyLocationItem}>
					<div className={classes.vacancyKey}>Місто*</div>
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
					<div className={classes.vacancyKey}>Форма зайнятості*</div>
					<label className={classes.vacancyEmploymenttype}>
						<Radio
							name="employmentType"
							value="fullDay"
							onChange={handleChange}
							checked={values.employmentType === 'fullDay'}
						/>
						Робота в офісі на повний день
					</label>
					<label className={classes.vacancyEmploymenttype}>
						<Radio
							name="employmentType"
							value="non-fullDay"
							onChange={handleChange}
							checked={values.employmentType === 'non-fullDay'}
						/>
						Робота в офісі на неповний день
					</label>
					<label className={classes.vacancyEmploymenttype}>
						<Radio
							name="employmentType"
							value="freelance"
							onChange={handleChange}
							checked={values.employmentType === 'freelance'}
						/>
						Фріланс (разові проекти)
					</label>
					<label className={classes.vacancyEmploymenttype}>
						<Radio
							name="employmentType"
							value="distantWork"
							onChange={handleChange}
							checked={values.employmentType === 'distantWork'}
						/>
						Віддалена робота
					</label>
					<label className={classes.vacancyEmploymenttype}>
						<Radio
							name="employmentType"
							value="any"
							onChange={handleChange}
							checked={values.employmentType === 'any'}
						/>
						Будь-яка
					</label>
				</div>
				<div className={classes.vacancyLocationItem}>
					<div className={classes.vacancyKey}>Зарплата*</div>
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
};

export default FormCommonInfo;
