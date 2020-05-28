import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import withSpheres from 'hoc/withSpheres';
import withLanguage from 'hoc/withLanguage';
import Autocomplete from 'shared/Autocomplete';

const SphereList = ({ t, skill, spheres, classes, onChange }) => (
	<>
		<div className={classes.vacancySkillFlex}>
			<Autocomplete
				text={`${t('SPHERE')}*`}
				value={skill.sphere}
				options={spheres || []}
				onChange={(event, newValue) => onChange('sphere', newValue)}
				classNameText={classes.vacancyKey}
				className={classes.vacancySkillItemSelect}
				getOptionLabel={option => option.sphereName}
			/>
		</div>
		<div className={`${classes.vacancySkillFlex} ${classes.spheres}`}>
			{spheres &&
				spheres.map(elem => (
					<div className={classes.vacancySkillItem} key={elem._id}>
						<a
							href="nothing"
							className={classes.vacancySkillItemLink}
							onClick={e => {
								e.preventDefault();
								onChange('sphere', {
									_id: elem._id,
									sphereName: elem.sphereName,
								});
							}}
						>
							{elem.sphereName}
						</a>
					</div>
				))}
		</div>
	</>
);

SphereList.propTypes = {
	skill: PropTypes.shape({
		sphere: PropTypes.oneOfType([
			PropTypes.shape({
				_id: PropTypes.string.isRequired,
				sphereName: PropTypes.string.isRequired,
			}),
			PropTypes.oneOf([null]).isRequired,
		]),
	}),
	spheres: PropTypes.oneOfType([
		PropTypes.array.isRequired,
		PropTypes.oneOf([null]).isRequired,
	]),
	classes: PropTypes.object.isRequired,
	setSkill: PropTypes.func.isRequired,
	handleClickSkill: PropTypes.func.isRequired,
};

export default compose(withSpheres, withLanguage)(SphereList);
