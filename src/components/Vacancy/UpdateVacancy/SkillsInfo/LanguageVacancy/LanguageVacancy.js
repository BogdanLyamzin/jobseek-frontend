import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Slider from './SliderWithStyles';
import { programmLanguageList, englishLevel } from '../skillsList';

const LanguageVacancy = ({ skill, setSkill, oneVacancy, handleChange }) => {
	const valueLabelFormat = value => {
		return englishLevel[value];
	};

	return (
		<>
			<div className="vacancy-skill-flex">
				<div className="vacancy-key">Посада*</div>
				<input
					type="text"
					name="vacancyName"
					className="vacancy-skill-item-input"
					defaultValue={skill.vacancyName}
					onChange={e =>
						setSkill({ ...skill, [e.target.name]: e.target.value })
					}
				/>
			</div>

			<div className="vacancy-skill-flex">
				<div className="vacancy-key">Мова програмування*</div>
				<Autocomplete
					options={programmLanguageList}
					getOptionLabel={option => option}
					autoComplete
					renderInput={params => <TextField {...params} fullWidth />}
					value={skill.programmLanguage}
					onChange={(event, newValue) => {
						setSkill({ ...skill, programmLanguage: newValue });
					}}
					className="vacancy-skill-item-select"
				/>
			</div>

			<div className="vacancy-skill-flex">
				<div className="vacancy-key">Рівень Англійської мови*</div>
				<Slider
					className="vacancy-skill-item-slider"
					valueLabelFormat={valueLabelFormat}
					onChange={handleChange}
					valueLabelDisplay="auto"
					defaultValue={0}
					step={1}
					max={6}
				/>
				<div className="vacancy-skill-english">{skill.englishLevel}</div>
			</div>
		</>
	);
};

const mapStateToProps = ({ vacancy }) => {
	return {
		oneVacancy: vacancy.vacancy,
	};
};

export default connect(mapStateToProps)(LanguageVacancy);
