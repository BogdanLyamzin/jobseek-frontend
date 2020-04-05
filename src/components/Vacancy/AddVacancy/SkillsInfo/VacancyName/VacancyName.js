import React, { useEffect } from 'react';
import { compose } from 'redux';

import withLanguage from '../../../../../hoc/withLanguage';
import Autocomplete from '../../../../../shared/Autocomplete';
import withVacancyName from '../../../../../hoc/withVacancyName';

const VacancyName = ({ t, skill, setId, classes, setSkill, vacancy }) => {
	useEffect(() => {
		if (skill.profession && skill.profession._id) {
			setId(skill.profession._id);
			setSkill({ ...skill, vacancyName: null, category: null });
		}
	}, [skill.profession, setId, setSkill]);

	return (
		<div className={classes.vacancySkillFlex}>
			<Autocomplete
				text={`${t('VACANCY')}*`}
				value={skill.vacancyName}
				options={vacancy || []}
				onChange={(event, newValue) => {
					setSkill({ ...skill, vacancyName: newValue });
				}}
				classNameText={classes.vacancyKey}
				className={classes.vacancySkillItemSelect}
				getOptionLabel={option => option.vacancyName}
			/>
		</div>
	);
};

export default compose(withVacancyName, withLanguage)(VacancyName);
