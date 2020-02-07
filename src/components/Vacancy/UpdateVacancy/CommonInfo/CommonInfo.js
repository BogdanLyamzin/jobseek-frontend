import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Radio from './Radio';
import { addInfo } from '../../../../store/vacancy/actions';

const CommonInfo = ({ info, addInfo, oneVacancy }) => {
	const [values, setValues] = useState({
		city: info ? info.city : null,
		salary: info ? info.salary : null,
		country: info ? info.country : null,
		description: info ? info.description : null,
		employmentType: info ? info.employmentType : 'fullDay',
	});

	useEffect(() => {
		if (oneVacancy)
			setValues({
				city: oneVacancy.result.city,
				salary: oneVacancy.result.salary,
				country: oneVacancy.result.country,
				description: oneVacancy.result.description,
				employmentType: oneVacancy.result.employmentType,
			});
	}, [oneVacancy]);

	useEffect(() => {
		return () => {
			addInfo({ ...values });
		};
	}, [values, addInfo]);

	const handleChange = event => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	return (
		<div>
			<div className="vacancy-location">
				<div className="vacancy-location-item">
					<div className="vacancy-key">Країна*</div>
					<input
						type="text"
						name="country"
						className="vacancy-input"
						onChange={handleChange}
						defaultValue={values.country}
					/>
				</div>
				<div className="vacancy-location-item">
					<div className="vacancy-key">Місто*</div>
					<input
						type="text"
						name="city"
						className="vacancy-input"
						onChange={handleChange}
						defaultValue={values.city}
					/>
				</div>
			</div>
			<div className="vacancy-location">
				<div className="vacancy-location-item">
					<div className="vacancy-key">Форма зайнятості*</div>
					<label className="vacancy-employmenttype">
						<Radio
							name="employmentType"
							value="fullDay"
							onChange={handleChange}
							checked={values.employmentType === 'fullDay'}
						/>
						Робота в офісі на повний день
					</label>
					<label className="vacancy-employmenttype">
						<Radio
							name="employmentType"
							value="non-fullDay"
							onChange={handleChange}
							checked={values.employmentType === 'non-fullDay'}
						/>
						Робота в офісі на неповний день
					</label>
					<label className="vacancy-employmenttype">
						<Radio
							name="employmentType"
							value="freelance"
							onChange={handleChange}
							checked={values.employmentType === 'freelance'}
						/>
						Фріланс (разові проекти)
					</label>
					<label className="vacancy-employmenttype">
						<Radio
							name="employmentType"
							value="distantWork"
							onChange={handleChange}
							checked={values.employmentType === 'distantWork'}
						/>
						Віддалена робота
					</label>
					<label className="vacancy-employmenttype">
						<Radio
							name="employmentType"
							value="any"
							onChange={handleChange}
							checked={values.employmentType === 'any'}
						/>
						Будь-яка
					</label>
				</div>
				<div className="vacancy-location-item">
					<div className="vacancy-key">Зарплата*</div>
					<label className="vacancy-salary">
						USD
						<input
							step="50"
							min="100"
							type="number"
							name="salary"
							className="vacancy-salary-inp"
							onChange={handleChange}
							defaultValue={values.salary}
						/>
					</label>
				</div>
			</div>

			<hr className="vacancy-line" />

			<div className="vacancy-description">
				<div className="vacancy-key">Описання вакансії*</div>
				<textarea
					name="description"
					className="vacancy-description-area"
					onChange={handleChange}
					defaultValue={values.description}
				/>
				<div className="vacancy-align-center">
					<button
						onClick={() => addInfo({ ...values })}
						className="vacancy-save"
					>
						Зберегти
					</button>
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
	addInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(CommonInfo);
