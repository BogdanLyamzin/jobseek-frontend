import React from 'react';
import { compose } from 'redux';

import withSpheres from '../../../../../hoc/withSpheres';
import withLanguage from '../../../../../hoc/withLanguage';
import Autocomplete from '../../../../../shared/Autocomplete';

const SphereList = ({
	t,
	skill,
	spheres,
	classes,
	setSkill,
	handleClickSkill,
}) => (
	<div>
		<div className={classes.vacancySkillFlex}>
			<Autocomplete
				text={`${t('SPHERE')}*`}
				value={skill.sphere}
				options={spheres || []}
				onChange={(event, newValue) => {
					setSkill({ ...skill, sphere: newValue });
				}}
				classNameText={classes.vacancyKey}
				className={classes.vacancySkillItemSelect}
				getOptionLabel={option => option.sphereName}
			/>
		</div>
		<div className={classes.vacancySkillFlex}>
			{spheres &&
				spheres.map(elem => (
					<div className={classes.vacancySkillItem} key={elem._id}>
						<a
							href="nothing"
							className={classes.vacancySkillItemLink}
							onClick={e => {
								e.preventDefault();
								handleClickSkill('sphere', {
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
	</div>
);

export default compose(withSpheres, withLanguage)(SphereList);
