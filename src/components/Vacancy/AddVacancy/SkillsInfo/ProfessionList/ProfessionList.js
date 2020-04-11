import React, { useEffect } from 'react';
import { compose } from 'redux';

import withLanguage from 'hoc/withLanguage';
import Autocomplete from 'shared/Autocomplete';
import withProfession from 'hoc/withProfessions';

const ProfessionList = ({ t, skill, setId, classes, setSkill, profession }) => {
	useEffect(() => {
		if (skill.sphere && skill.sphere._id) {
			setId(skill.sphere._id);
			setSkill({
				...skill,
				vacancyName: null,
				profession: null,
				category: null,
			});
		}
	}, [skill.sphere, setId, setSkill]);

	return (
		<div>
			<div className={classes.vacancySkillFlex}>
				<Autocomplete
					text={`${t('PROFESSION')}*`}
					value={skill.profession}
					options={profession || []}
					onChange={(event, newValue) => {
						setSkill({ ...skill, profession: newValue });
					}}
					classNameText={classes.vacancyKey}
					className={classes.vacancySkillItemSelect}
					getOptionLabel={option => option.professionName}
				/>
			</div>
		</div>
	);
};

export default compose(withProfession, withLanguage)(ProfessionList);
