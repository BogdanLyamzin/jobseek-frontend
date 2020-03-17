import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Text from '../../../../../shared/Text';
import { getVacancyByFilter } from '../../../../../store/admin/actions/vacancyTemplateActions';

const VacancyName = ({
	skill,
	classes,
	setSkill,
	vacancyList,
	getVacancyByFilter,
}) => {
	const { t } = useTranslation();
	const [vacancy, setVacancy] = useState(null);

	useEffect(() => {
		if (skill.profession && skill.profession._id) {
			getVacancyByFilter(`professionId=${skill.profession._id}`);
			setSkill({ ...skill, vacancyName: null, category: null });
		}
	}, [getVacancyByFilter, skill.profession]);

	useEffect(() => {
		setVacancy(vacancyList);
	}, [vacancyList]);

	return (
		<div className={classes.vacancySkillFlex}>
			<Text className={classes.vacancyKey}>{t('VACANCY')}*</Text>
			<Autocomplete
				options={vacancy}
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

const mapStateToProps = ({ admin }) => {
	return {
		vacancyList: admin.vacancyChange,
	};
};

const mapDispatchToProps = {
	getVacancyByFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(VacancyName);
