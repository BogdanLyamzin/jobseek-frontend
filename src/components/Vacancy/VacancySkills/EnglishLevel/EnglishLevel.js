import React from 'react';

import Text from 'shared/Text';
import useStyles from './styles';
import StyledSlider from 'shared/StyledSlider';
import englishLevel from 'utils/variables/english';

const EnglishLevel = ({ skill, handleChangeEng }) => {
	const classes = useStyles();
	const valueLabelFormatEng = value => englishLevel[value];
	return (
		<div className={classes.sliderItem}>
			<div className={`${classes.sliderFlex} ${classes.marginBottom40}`}>
				<Text className={classes.skillItemText}>English level</Text>
				<Text className={classes.skillItemText}>{skill.englishLevel}</Text>
			</div>
			<div className={classes.sliderFlex}>
				<StyledSlider
					className={classes.sliderSkills}
					valueLabelFormat={valueLabelFormatEng}
					onChange={handleChangeEng}
					valueLabelDisplay="on"
					defaultValue={englishLevel.indexOf(skill.englishLevel)}
					step={1}
					max={5}
				/>
			</div>
		</div>
	);
};

export default EnglishLevel;
