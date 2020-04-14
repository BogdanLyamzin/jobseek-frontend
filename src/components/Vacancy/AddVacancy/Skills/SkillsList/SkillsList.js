import React from 'react';
import { compose } from 'redux';

import Text from 'shared/Text';
import Slider from 'shared/Slider';
import withLanguage from 'hoc/withLanguage';
import withSkillState from 'hoc/withSkillState';
import EnglishLevel from '../../../VacancySkills/EnglishLevel';
import CheckboxList from '../../../VacancySkills/CheckboxList';

const SkillsList = ({
	t,
	skill,
	classes,
	checkbox,
	checkboxArr,
	deleteSlider,
	handleChange,
	handleChangeEng,
	checkboxHandleChange,
}) => (
	<>
		<Text className={`${classes.vacancyKey} ${classes.alignCenter}`}>
			{t('SKILLS')}*
		</Text>
		<hr className={classes.line} />
		{skill.category && (
			<div className={classes.vacancySkillListFlex}>
				<CheckboxList
					skill={skill}
					checkbox={checkbox}
					checkboxHandleChange={checkboxHandleChange}
				/>
				<div className={classes.vacancySkillTime}>
					<Text className={classes.level}>{t('LEVEL')}</Text>
					<EnglishLevel skill={skill} handleChangeEng={handleChangeEng} />
					{checkboxArr &&
						checkboxArr.map(elem => (
							<Slider
								key={elem.id}
								element={elem}
								handleChange={handleChange}
								deleteSlider={deleteSlider}
							/>
						))}
				</div>
			</div>
		)}
	</>
);

export default compose(withSkillState, withLanguage)(SkillsList);
