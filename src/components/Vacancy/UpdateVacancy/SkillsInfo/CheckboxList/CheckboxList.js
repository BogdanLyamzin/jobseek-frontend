import React from 'react';
import { compose } from 'redux';

import Text from '../../../../../shared/Text';
import Slider from '../../../../../shared/Slider';
import Checkbox from '../../../../../shared/Checkbox';
import { skillsList, englishLevel } from '../skillsList';
import withLanguage from '../../../../../hoc/withLanguage';
import StyledSlider from '../../../../../shared/StyledSlider';
import withSkillState from '../../../../../hoc/withSkillState';

const CheckboxList = ({
	t,
	skill,
	classes,
	checkbox,
	checkboxArr,
	deleteSlider,
	handleChange,
	handleChangeEng,
	valueLabelFormatEng,
	checkboxHandleChange,
}) => (
	<>
		<Text className={`${classes.vacancyKey} ${classes.alignCenter}`}>
			{t('SKILLS')}*
		</Text>
		<hr className={classes.line} />
		{skill.category && (
			<div className={classes.vacancySkillListFlex}>
				<div className={classes.vacancySkillList}>
					{skillsList.map(elem => (
						<div className={classes.vacancySkillListItem} key={elem.name}>
							<Checkbox
								onChange={checkboxHandleChange(elem.name)}
								value={elem.id}
								name={elem.name}
								checked={!!(checkbox && checkbox[elem.name])}
							/>
						</div>
					))}
				</div>
				<div className={classes.vacancySkillTime}>
					<div className={classes.vacancySliderItem}>
						<div
							className={`${classes.vacancySliderFlex} ${classes.marginBottom40}`}
						>
							<Text className={classes.vacancySkillItemText}>
								English level
							</Text>
							<Text className={classes.vacancySkillItemText}>
								{skill.englishLevel}
							</Text>
						</div>
						<div className={classes.vacancySliderFlex}>
							<StyledSlider
								className={classes.vacancySliderSkills}
								valueLabelFormat={valueLabelFormatEng}
								onChange={handleChangeEng}
								valueLabelDisplay="on"
								defaultValue={englishLevel.indexOf(skill.englishLevel)}
								step={1}
								max={6}
							/>
						</div>
					</div>
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

export default compose(withSkillState, withLanguage)(CheckboxList);
