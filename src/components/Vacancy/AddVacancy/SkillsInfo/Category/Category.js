import React, { useEffect } from 'react';
import { compose } from 'redux';

import withLanguage from 'hoc/withLanguage';
import withCategory from 'hoc/withCategory';
import Autocomplete from 'shared/Autocomplete';

const Category = ({ t, setId, skill, classes, setSkill, categories }) => {
	useEffect(() => {
		if (skill.vacancyName && skill.vacancyName._id) {
			setId(skill.vacancyName._id);
			setSkill({ ...skill, category: skill.category });
		}
	}, [skill.vacancyName, setId, setSkill]);

	return (
		<div className={classes.vacancySkillFlex}>
			<Autocomplete
				text={`${t('CATEGORY')}*`}
				value={skill.category}
				options={categories || []}
				onChange={(event, newValue) => {
					setSkill({ ...skill, category: newValue });
				}}
				classNameText={classes.vacancyKey}
				className={classes.vacancySkillItemSelect}
				getOptionLabel={option => option.categoryName}
			/>
		</div>
	);
};

export default compose(withCategory, withLanguage)(Category);
