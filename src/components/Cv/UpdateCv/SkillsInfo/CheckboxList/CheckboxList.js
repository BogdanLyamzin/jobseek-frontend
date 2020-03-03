import React from 'react';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

import Slider from '../../../../../shared/Slider';
import Checkbox from '../../../../../shared/Checkbox';
import { skillsList, englishLevel } from '../skillsList';

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
	const valueLabelFormat = value => {
		if (value === 0) return '<' + (value + 1);
		else if (value === 5) return '>' + (value + 1);
		else return value + '-' + (value + 1);
	};

	const valueLabelFormatEng = value => {
		return englishLevel[value];
	};

	return (
		<>
			<div className={`${classes.vacancyKey} ${classes.alignCenter}`}>
				Навички*
			</div>
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
										checked={!!(checkbox && checkbox[elem.name])}
									/>
									<div className={classes.vacancySkillItemText}>
										{elem.name}
									</div>
								</div>
							);
						})}
					</div>
					<div className={classes.vacancySkillTime}>
						<div className={classes.vacancySliderItem}>
							<div
								className={`${classes.vacancySliderFlex} ${classes.marginBottom40}`}
							>
								<div className={classes.vacancySkillItemText}>
									English level
								</div>
								<div className={classes.vacancySkillItemText}>
									{skill.englishLevel}
								</div>
							</div>
							<div className={classes.vacancySliderFlex}>
								<Slider
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
										<div className={classes.vacancySliderItem} key={elem.id}>
											<div
												style={{ marginBottom: '40px' }}
												className={classes.vacancySkillItemText}
											>
												{elem.name}
											</div>
											<div className={classes.vacancySliderFlex}>
												<Slider
													className={classes.vacancySliderSkills}
													defaultValue={elem.experience}
													step={1}
													max={5}
													valueLabelDisplay="on"
													valueLabelFormat={valueLabelFormat}
													onChange={handleChange(elem.name, elem.id)}
												/>
												<DeleteOutlineOutlinedIcon
													className={classes.vacancyIcon}
													onClick={() =>
														// eslint-disable-next-line max-len
														setCheckbox({ ...checkbox, [elem.name]: null })
													}
												/>
											</div>
										</div>
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
