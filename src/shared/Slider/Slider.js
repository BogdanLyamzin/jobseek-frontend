import React from 'react';
import PropTypes from 'prop-types';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

import Text from '../Text';
import useStyles from './styles';
import StyledSlider from '../StyledSlider';

const SliderItem = ({ element, handleChange, deleteSlider }) => {
	const classes = useStyles();
	const valueLabelFormat = value => {
		if (value === 0) return '<' + (value + 1);
		else if (value === 5) return '>' + (value + 1);
		else return value + '-' + (value + 1);
	};

	return (
		<div className={classes.sliderItem}>
			<Text className={classes.text}>{element.name}</Text>
			<div className={classes.sliderFlex}>
				<StyledSlider
					className={classes.sliderSkills}
					defaultValue={element.experience}
					step={1}
					max={5}
					valueLabelDisplay="on"
					valueLabelFormat={valueLabelFormat}
					onChange={handleChange(element.name, element.id)}
				/>
				<DeleteOutlineOutlinedIcon
					className={classes.icon}
					onClick={() => deleteSlider(element.name)}
				/>
			</div>
		</div>
	);
};

SliderItem.propTypes = {
	element: PropTypes.exact({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		experience: PropTypes.number.isRequired,
	}),
	handleChange: PropTypes.func.isRequired,
	deleteSlider: PropTypes.func.isRequired,
};

export default React.memo(SliderItem);
