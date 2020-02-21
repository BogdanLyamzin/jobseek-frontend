import React from 'react';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';

const StyledRadio = withStyles( (theme) =>({
	root: {
		color: theme.palette.textColor,
		'&$checked': {
			color: '#00F2C9',
		},
	},
	checked: {},
}))(props => <Radio color="default" {...props} />);

export default StyledRadio;
