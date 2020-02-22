import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

const CheckboxItem = withStyles((theme) =>( {
	root: {
		color: theme.palette.textColor,
		'&$checked': {
			color: '#00F2C9',
		},
	},
	checked: {},
}))(props => <Checkbox color="default" {...props} />);

export default CheckboxItem;
