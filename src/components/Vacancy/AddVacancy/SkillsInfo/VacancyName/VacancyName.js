import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Text from '../../../../../shared/Text';
import withVacancyName from '../../../../../hoc/withVacancyName';

const VacancyName = ({ skill, setId, classes, setSkill, vacancy }) => {
	const { t } = useTranslation();

	useEffect(() => {
		if (skill.profession && skill.profession._id) {
			setId(skill.profession._id);
			setSkill({ ...skill, vacancyName: null, category: null });
		}
	}, [skill.profession]);

	return (
		<div className={classes.vacancySkillFlex}>
			<Text className={classes.vacancyKey}>{t('VACANCY')}*</Text>
			<Autocomplete
				options={vacancy ? vacancy : []}
				getOptionLabel={option => option.vacancyName}
				autoComplete
				renderInput={params => <TextField {...params} fullWidth />}
				value={skill.vacancyName}
				onChange={(event, newValue) => {
					setSkill({ ...skill, vacancyName: newValue });
				}}
				className={classes.vacancySkillItemSelect}
			/>
		</div>
	);
};

export default withVacancyName(VacancyName);
