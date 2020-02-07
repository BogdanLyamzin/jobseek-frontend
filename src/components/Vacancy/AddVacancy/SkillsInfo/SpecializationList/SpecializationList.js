import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const SpecializationList = ({ skill, setSkill, handleClickSkill }) => {
	return (
		<div>
			<div className="vacancy-skill-flex">
				<div className="vacancy-key">Спеціалізація*</div>
				<Autocomplete
					options={skill.sphere ? skill.sphere.specialization : []}
					getOptionLabel={option => option}
					autoComplete
					renderInput={params => <TextField {...params} fullWidth />}
					value={skill.specialization}
					onChange={(event, newValue) => {
						setSkill({ ...skill, specialization: newValue });
					}}
					className="vacancy-skill-item-select"
				/>
			</div>
			<div className="vacancy-skill-flex">
				{skill.sphere
					? skill.sphere.specialization.map(elem => {
							return (
								<div className="vacancy-skill-item" key={elem}>
									<a
										href="nothing"
										className="vacancy-skill-item-link"
										onClick={e => {
											e.preventDefault();
											handleClickSkill('specialization', elem);
										}}
									>
										{elem}
									</a>
								</div>
							);
					  })
					: null}
			</div>
		</div>
	);
};

export default SpecializationList;
