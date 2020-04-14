import React, { useState } from 'react';
import { connect } from 'react-redux';

import Switch from './AntSwitch';
import { updateVacancy } from 'store/vacancy/actions';

const FormControlLabel = ({ id, isActive, updateVacancy }) => {
	const [active, setActive] = useState(isActive);

	const handleChange = event => {
		updateVacancy(id, { active: event.target.checked });
		setActive(event.target.checked);
	};

	return <Switch checked={active} onChange={handleChange} />;
};

const mapDispatchToProps = {
	updateVacancy,
};

export default connect(null, mapDispatchToProps)(FormControlLabel);
