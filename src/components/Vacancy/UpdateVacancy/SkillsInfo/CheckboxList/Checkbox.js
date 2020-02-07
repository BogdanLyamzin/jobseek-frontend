import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const CheckboxItem = withStyles({
	root: {
		color: '#3D3B69',
		'&$checked': {
			color: '#00F2C9',
		},
	},
	checked: {},
})(props => <Checkbox color="default" {...props} />);

export default CheckboxItem;
