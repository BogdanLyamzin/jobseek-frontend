import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

// import Input from '../../../../../shared/Input';
import { programmLanguageList, vacancyList } from '../skillsList';

const LanguageVacancy = ({ skill, setSkill, classes }) => {
	return (
		<>
			<div className={classes.vacancySkillFlex}>
				<div className={classes.vacancyKey}>Вакансія*</div>
				{/* <Input
					type="text"
					name="vacancyName"
					className={classes.vacancySkillItemInput}
					onChange={e =>
						setSkill({ ...skill, [e.target.name]: e.target.value })
					}
					value={skill.vacancyName}
				/> */}
				<Autocomplete
					options={vacancyList}
					getOptionLabel={option => option}
					autoComplete
					renderInput={params => <TextField {...params} fullWidth />}
					value={skill.vacancyName}
					onChange={(event, newValue) => {
						setSkill({ ...skill, vacancyName: newValue });
					}}
					className={classes.vacancySkillItemSelect}
				/>
			</div>

			<div className={classes.vacancySkillFlex}>
				<div className={classes.vacancyKey}>Категорія*</div>
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
