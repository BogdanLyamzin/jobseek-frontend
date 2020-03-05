import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import { withStyles } from '@material-ui/core/styles';

const AntSwitch = withStyles(() => ({
	root: {
		width: 35,
		height: 16,
		padding: 0,
		display: 'flex',
		borderRadius: 20,
	},
	switchBase: {
		padding: 3,
		'&$checked': {
			transform: 'translateX(18px)',
			color: '#FFFFFF',
			'& + $track': {
				opacity: 1,
				backgroundColor: '#00F2C9',
			},
		},
	},
	thumb: {
		width: 10,
		height: 10,
		boxShadow: 'none',
	},
	track: {
		opacity: 1,
		backgroundColor: 'rgb(253, 0, 0)',
	},
	checked: {},
}))(Switch);

const FormControlLable = ({ active, onChange }) => {
	return (
		<FormGroup style={{ marginLeft: '15px' }}>
			<AntSwitch checked={active} onChange={onChange} />
		</FormGroup>
	);
};

export default FormControlLable;
