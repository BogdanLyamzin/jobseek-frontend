import React from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { programmLanguageList, vacancyList } from '../skillsList';

const Category = ({ skill, setSkill, classes }) => {
	const { t } = useTranslation();

	return (
		<>
			<div className={classes.vacancySkillFlex}>
				<div className={classes.vacancyKey}>{t('VACANCY')}*</div>
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
				<div className={classes.vacancyKey}>{t('CATEGORY')}*</div>
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
