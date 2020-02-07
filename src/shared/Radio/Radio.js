import React from 'react';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';

const StyledRadio = withStyles({
	root: {
		color: '#3D3B69',
		'&$checked': {
			color: '#00F2C9',
		},
	},
	checked: {},
})(props => <Radio color="default" {...props} />);

export default StyledRadio;
