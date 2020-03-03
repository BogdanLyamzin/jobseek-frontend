import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

import Text from '../Text';
import StyledSlider from '../StyledSlider';

const useStyles = makeStyles(theme => ({
	sliderItem: {
		marginBottom: '25px',
		[theme.breakpoints.down(720)]: {
			flexBasis: '40%',
		},
	},

	sliderFlex: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	sliderSkills: {
		flexBasis: '90%',
	},

	icon: {
		color: theme.palette.textColor,
		fontSize: '22px',
		cursor: 'pointer',
		'&:hover': {
			color: 'black',
		},
	},

	text: {
		fontFamily: '"Open Sans", sans-sarif',
		fontSize: '16px',
		lineHeight: '19px',
		marginBottom: '40px',
		color: theme.palette.textColor,
	},
}));

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
					defaultValue={0}
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

export default SliderItem;
