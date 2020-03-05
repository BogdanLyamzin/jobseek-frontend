import React from 'react';
import { useTranslation } from 'react-i18next';

import Text from '../../../../../shared/Text';
import Slider from '../../../../../shared/Slider';
import Checkbox from '../../../../../shared/Checkbox';
import { skillsList, englishLevel } from '../skillsList';
import StyledSlider from '../../../../../shared/StyledSlider';

const CheckboxList = ({
	skill,
	classes,
	checkbox,
	checkboxArr,
	setCheckbox,
	handleChange,
	handleChangeEng,
	checkboxHandleChange,
}) => {
	const { t } = useTranslation();

	const valueLabelFormatEng = value => {
		return englishLevel[value];
	};

	const deleteSlider = name => {
		setCheckbox({ ...checkbox, [name]: null });
	};

	return (
		<>
			<Text className={`${classes.vacancyKey} ${classes.alignCenter}`}>
				{t('SKILLS')}*
			</Text>
			<hr className={classes.line} />
			{skill.category && (
				<div className={classes.vacancySkillListFlex}>
					<div className={classes.vacancySkillList}>
						{skillsList.map(elem => {
							return (
								<div className={classes.vacancySkillListItem} key={elem.name}>
									<Checkbox
										onChange={checkboxHandleChange(elem.name)}
										value={elem.id}
										name={elem.name}
										checked={checkbox && checkbox[elem.name] ? true : false}
									/>
								</div>
							);
						})}
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
						{checkboxArr
							? checkboxArr.map(elem => {
									return (
										<Slider
											key={elem.id}
											element={elem}
											handleChange={handleChange}
											deleteSlider={deleteSlider}
										/>
									);
							  })
							: null}
					</div>
				</div>
			)}
		</>
	);
};

export default CheckboxList;
