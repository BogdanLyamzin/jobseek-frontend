import React, { useEffect } from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import withLanguage from 'hoc/withLanguage';
import withCategory from 'hoc/withCategory';
import Autocomplete from 'shared/Autocomplete';

const Category = ({ t, setId, skill, classes, setSkill, categories }) => {
	useEffect(() => {
		if (skill.vacancyName && skill.vacancyName._id) {
			setId(skill.vacancyName._id);
			setSkill({ ...skill, category: skill.category });
		} // eslint-disable-next-line
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

Category.propTypes = {
	skill: PropTypes.shape({
		category: PropTypes.oneOfType([
			PropTypes.shape({
				_id: PropTypes.string.isRequired,
				parentId: PropTypes.array.isRequired,
				categoryName: PropTypes.string.isRequired,
			}),
			PropTypes.oneOf([null]).isRequired,
		]),
	}),
	categories: PropTypes.oneOfType([
		PropTypes.array.isRequired,
		PropTypes.oneOf([null]).isRequired,
	]),
	setId: PropTypes.func.isRequired,
	setSkill: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired,
};

export default compose(withCategory, withLanguage)(Category);
