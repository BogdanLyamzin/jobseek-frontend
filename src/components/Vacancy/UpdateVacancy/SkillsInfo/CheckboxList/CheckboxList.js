import React from 'react';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

import Checkbox from './Checkbox';
import { skillsList } from '../skillsList';
import Slider from '../LanguageVacancy/SliderWithStyles';

const CheckboxList = ({
	checkbox,
	checkboxArr,
	setCheckbox,
	handleChange,
	checkboxHandleChange,
}) => {
	const valueLabelFormat = value => {
		if (value === 0) return '<' + (value + 1);
		else if (value === 5) return '>' + (value + 1);
		else return value + '-' + (value + 1);
	};

	return (
		<>
			<div className="vacancy-key vacancy-align-center">Навички*</div>
			<hr className="vacancy-line" />
			<div className="vacancy-skill-list-flex">
				<div className="vacancy-skill-list">
					{skillsList.map(elem => {
						return (
							<div className="vacancy-skill-list-item" key={elem.name}>
								<Checkbox
									onChange={checkboxHandleChange(elem.name)}
									value={elem.id}
									name={elem.name}
									checked={checkbox && checkbox[elem.name] ? true : false}
								/>
								<div className="vacancy-skill-list-item-text">{elem.name}</div>
							</div>
						);
					})}
				</div>
				<div className="vacancy-skill-time">
					{checkboxArr
						? checkboxArr.map(elem => {
								return (
									<div className="vacancy-slider-item" key={elem.id}>
										<div className="vacancy-skill-item-text margin-bottom-40">
											{elem.name}
										</div>
										<div className="vacancy-slider-flex">
											<Slider
												className="vacancy-slider-skills"
												defaultValue={elem.experience}
												step={1}
												max={5}
												valueLabelDisplay="on"
												valueLabelFormat={valueLabelFormat}
												onChange={handleChange(elem.name, elem.id)}
											/>
											<DeleteOutlineOutlinedIcon
												className="vacancy-delete"
												onClick={() =>
													setCheckbox({ ...checkbox, [elem.name]: null })
												}
											/>
										</div>
									</div>
								);
						  })
						: null}
				</div>
			</div>
		</>
	);
};

export default CheckboxList;
