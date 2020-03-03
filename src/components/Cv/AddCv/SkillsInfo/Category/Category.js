import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { programmLanguageList, vacancyList } from '../skillsList';

const Category = ({ skill, setSkill, classes }) => {
	return (
		<>
			<div className={classes.vacancySkillFlex}>
				<div className={classes.vacancyKey}>Резюме*</div>
				<Autocomplete
					options={vacancyList}
					getOptionLabel={option => option}
					autoComplete
					renderInput={params => <TextField {...params} fullWidth />}
					value={skill.vacancyName}
					onChange={(event, newValue) => {
						setSkill({ ...skill, cvName: newValue });
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
					value={skill.category}
					onChange={(event, newValue) => {
						setSkill({ ...skill, category: newValue });
					}}
					className={classes.vacancySkillItemSelect}
				/>
			</div>
		</>
	);
};

export default Category;
