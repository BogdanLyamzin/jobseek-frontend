import React from 'react';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
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

const margin = { marginLeft: '15px' };
const FormControlLable = ({ active, onChange }) => (
	<div style={margin}>
		<AntSwitch checked={active} onChange={onChange} />
	</div>
);

FormControlLable.propTypes = {
	active: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default React.memo(FormControlLable);
