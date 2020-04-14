import React, { useEffect } from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import withLanguage from 'hoc/withLanguage';
import Autocomplete from 'shared/Autocomplete';
import withVacancyName from 'hoc/withVacancyName';

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

VacancyName.propTypes = {
	skill: PropTypes.shape({
		vacancyName: PropTypes.oneOfType([
			PropTypes.shape({
				_id: PropTypes.string.isRequired,
				vacancyName: PropTypes.string.isRequired,
				professionId: PropTypes.string.isRequired,
			}),
			PropTypes.oneOf([null]).isRequired,
		]),
	}),
	vacancy: PropTypes.oneOfType([
		PropTypes.array.isRequired,
		PropTypes.oneOf([null]).isRequired,
	]),
	setId: PropTypes.func.isRequired,
	setSkill: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired,
};

export default compose(withVacancyName, withLanguage)(VacancyName);
