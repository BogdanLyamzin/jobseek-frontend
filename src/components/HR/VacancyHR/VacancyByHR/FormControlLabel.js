import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import { withStyles } from '@material-ui/core/styles';

import API from '../../../../services/api';

const AntSwitch = withStyles(() => ({
	root: {
		width: 22,
		height: 12,
		padding: 0,
		display: 'flex',
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

export default ({ vacancy, isActive }) => {
	const [active, setActive] = useState({
		switch: isActive,
	});

	const handleChange = name => event => {
		API.putVacancy(vacancy, { active: event.target.checked });
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
