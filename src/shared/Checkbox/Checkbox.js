import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

import Text from '../Text';

const CheckboxStyled = withStyles(theme => ({
	root: {
		color: theme.palette.textColor,
		'&$checked': {
			color: '#00F2C9',
		},
	},
	checked: {},
}))(props => <Checkbox color="default" {...props} />);

const useStyle = makeStyles(theme => ({
	text: {
		fontFamily: theme.palette.font,
		fontSize: '14px',
		lineHeight: '19px',
		color: theme.palette.textColor,
	},
}));

const CheckboxItem = ({ onChange, value, name, checked }) => {
	const classes = useStyle();
	return (
		<>
			<CheckboxStyled
				onChange={onChange}
				value={value}
				name={name}
				checked={checked}
			/>
			<Text className={classes.text}>{name}</Text>
		</>
	);
};

export default CheckboxItem;
