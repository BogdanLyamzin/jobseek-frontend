import React, { useState, useEffect } from 'react';

import getDisplayName from '../utils/getDisplayName';
import objToArr from '../utils/transformType/objToArr';

const withSkillState = Component => {
	const WithSkillState = ({ setCheckboxSkill, checkboxGet, ...props }) => {
		const [checkbox, setCheckbox] = useState(null);
		const [checkboxArr, setCheckboxArr] = useState(null);

		useEffect(() => {
			if (checkboxGet) setCheckbox(checkboxGet);
		}, [checkboxGet]);

		useEffect(() => {
			setCheckboxArr([...objToArr(checkbox)]);
		}, [checkbox]);

		useEffect(() => {
			setCheckboxSkill(checkboxArr);
		}, [checkboxArr]);

		const handleChangeSkillSlider = (name, id) => (event, newValue) => {
			setCheckbox({
				...checkbox,
				[name]: {
					name,
					id,
					experience: newValue,
				},
			});
		};

		const checkboxHandleChange = name => event => {
			if (event.target.checked) {
				setCheckbox({
					...checkbox,
					[name]: {
						id: event.target.value,
						experience: 0,
					},
				});
			} else {
				setCheckbox({ ...checkbox, [name]: null });
			}
		};

		const deleteSlider = name => {
			setCheckbox({ ...checkbox, [name]: null });
		};

		return (
			<Component
				{...props}
				checkbox={checkbox}
				checkboxArr={checkboxArr}
				deleteSlider={deleteSlider}
				handleChange={handleChangeSkillSlider}
				checkboxHandleChange={checkboxHandleChange}
			/>
		);
	};

	WithSkillState.displayName = `WithSkillState(${getDisplayName(Component)})`;

	return WithSkillState;
};

export default withSkillState;