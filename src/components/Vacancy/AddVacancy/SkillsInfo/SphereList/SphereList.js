import React from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { sphereList } from '../skillsList';

const SphereList = ({ skill, setSkill, handleClickSkill, classes }) => {
	const { t } = useTranslation();

	return (
		<div>
			<div className={classes.vacancySkillFlex}>
				<div className={classes.vacancyKey}>{t('SPHERE')}*</div>
				<Autocomplete
					options={sphereList}
					getOptionLabel={option => option.title}
					autoComplete
					renderInput={params => <TextField {...params} fullWidth />}
					value={skill.sphere}
					onChange={(event, newValue) => {
						setSkill({ ...skill, sphere: newValue });
					}}
					className={classes.vacancySkillItemSelect}
				/>
			</div>
			<div className={classes.vacancySkillFlex}>
				{sphereList.map(elem => {
					return (
						<div className={classes.vacancySkillItem} key={elem.title}>
							<a
								href="nothing"
								className={classes.vacancySkillItemLink}
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
