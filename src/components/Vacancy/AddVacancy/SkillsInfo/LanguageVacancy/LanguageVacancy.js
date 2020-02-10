import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Input from '../../../../../shared/Input';
import { programmLanguageList } from '../skillsList';

const LanguageVacancy = ({ skill, setSkill, classes }) => {
	return (
		<>
			<div className={classes.vacancySkillFlex}>
				<div className={classes.vacancyKey}>Посада*</div>
				<Input
					type="text"
					name="vacancyName"
					className={classes.vacancySkillItemInput}
					onChange={e =>
						setSkill({ ...skill, [e.target.name]: e.target.value })
					}
					value={skill.vacancyName}
				/>
			</div>

			<div className={classes.vacancySkillFlex}>
				<div className={classes.vacancyKey}>Мова програмування*</div>
				<Autocomplete
					options={programmLanguageList}
					getOptionLabel={option => option}
					autoComplete
					renderInput={params => <TextField {...params} fullWidth />}
					value={skill.programmLanguage}
					onChange={(event, newValue) => {
						setSkill({ ...skill, programmLanguage: newValue });
					}}
					className={classes.vacancySkillItemSelect}
				/>
			</div>
		</>
	);
};

export default LanguageVacancy;
