import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Text from '../../../../../shared/Text';
import withCategory from '../../../../../hoc/withCategory';

const Category = ({ setId, skill, classes, setSkill, categories }) => {
	const { t } = useTranslation();

	useEffect(() => {
		if (skill.vacancyName && skill.vacancyName._id) {
			setId(skill.vacancyName._id);
			setSkill({ ...skill, category: skill.category });
		}
	}, [skill.vacancyName]);

	return (
		<div className={classes.vacancySkillFlex}>
			<Text className={classes.vacancyKey}>{t('CATEGORY')}*</Text>
			<Autocomplete
				options={categories || []}
				getOptionLabel={option => option.categoryName}
				autoComplete
				renderInput={params => <TextField {...params} fullWidth />}
				value={skill.category}
				onChange={(event, newValue) => {
					setSkill({ ...skill, category: newValue });
				}}
				className={classes.vacancySkillItemSelect}
			/>
		</div>
	);
};

export default withCategory(Category);
