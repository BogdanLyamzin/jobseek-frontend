import React, { useState } from 'react';
import { connect } from 'react-redux';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import { withStyles } from '@material-ui/core/styles';

import { updateVacancy } from '../../../../store/vacancy/actions';

const AntSwitch = withStyles(() => ({
	root: {
		width: 22,
		height: 12,
		padding: 0,
		display: 'flex',
		marginRight: 15,
	},
	switchBase: {
		padding: 2,
		'&$checked': {
			transform: 'translateX(10px)',
			color: '#FFFFFF',
			'& + $track': {
				opacity: 1,
				backgroundColor: '#00F2C9',
			},
		},
	},
	thumb: {
		width: 8,
		height: 8,
		boxShadow: 'none',
	},
	track: {
		opacity: 1,
		backgroundColor: 'rgb(253, 0, 0)',
	},
	checked: {},
}))(Switch);

const FormControlLabel = ({ id, isActive, updateVacancy }) => {
	const [active, setActive] = useState({
		switch: isActive,
	});

	const handleChange = name => event => {
		updateVacancy(id, { active: event.target.checked });
		setActive({ ...active, [name]: event.target.checked });
	};

	return (
		<FormGroup>
			<AntSwitch
				checked={active.switch}
				onChange={handleChange('switch')}
				value="switch"
			/>
		</FormGroup>
	);
};

const mapDispatchToProps = {
	updateVacancy,
};

export default connect(null, mapDispatchToProps)(FormControlLabel);
