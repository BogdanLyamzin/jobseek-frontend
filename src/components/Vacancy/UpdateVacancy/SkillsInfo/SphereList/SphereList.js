import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { sphereList } from '../skillsList';

const SphereList = ({ skill, setSkill, handleClickSkill }) => {
	return (
		<div>
			<div className="vacancy-skill-flex">
				<div className="vacancy-key">Сфера діяльності*</div>
				<Autocomplete
					options={sphereList}
					getOptionLabel={option => option.title}
					autoComplete
					renderInput={params => <TextField {...params} fullWidth />}
					value={skill.sphere}
					onChange={(event, newValue) => {
						setSkill({ ...skill, sphere: newValue });
					}}
					className="vacancy-skill-item-select"
				/>
			</div>
			<div className="vacancy-skill-flex">
				{sphereList.map(elem => {
					return (
						<div className="vacancy-skill-item" key={elem.title}>
							<a
								href="nothing"
								className="vacancy-skill-item-link"
								onClick={e => {
									e.preventDefault();
									handleClickSkill('sphere', elem);
								}}
							>
								{elem.title}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SphereList;
