import React, { useEffect } from 'react';
import { compose } from 'redux';

import Text from 'shared/Text';
import Slider from 'shared/Slider';
import Checkbox from 'shared/Checkbox';
import withSkills from 'hoc/withSkills';
import withLanguage from 'hoc/withLanguage';
import StyledSlider from 'shared/StyledSlider';
import withSkillState from 'hoc/withSkillState';

const CheckboxList = ({
	t,
	setId,
	skill,
	classes,
	checkbox,
	skillList,
	checkboxArr,
	deleteSlider,
	handleChange,
	handleChangeEng,
	valueLabelFormatEng,
	checkboxHandleChange,
}) => {
	useEffect(() => {
		if (skill.category && skill.category._id) {
			setId(skill.category._id);
		}
	}, [setId, skill.category]);

	return (
		<>
			<Text className={`${classes.vacancyKey} ${classes.alignCenter}`}>
				{t('SKILLS')}*
			</Text>
			<hr className={classes.line} />
			{skill.category && skillList && (
				<div className={classes.vacancySkillListFlex}>
					<div className={classes.vacancySkillList}>
						{skillList.map(elem => (
							<Checkbox
								key={elem._id}
								value={elem._id}
								name={elem.skillName}
								onChange={checkboxHandleChange(elem.skillName)}
								checked={!!(checkbox && checkbox[elem.skillName])}
							/>
						))}
					</div>
					<div className={classes.vacancySkillTime}>
						<Text className={classes.level}>{t('LEVEL')}</Text>
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
									defaultValue={0}
									step={1}
									max={5}
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
};

export default compose(withSkillState, withSkills, withLanguage)(CheckboxList);
