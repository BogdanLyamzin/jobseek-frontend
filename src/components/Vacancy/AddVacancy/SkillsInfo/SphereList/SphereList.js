import React from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Text from '../../../../../shared/Text';
import withSpheres from '../../../../../hoc/withSpheres';

const SphereList = ({
	skill,
	spheres,
	classes,
	setSkill,
	handleClickSkill,
}) => {
	const { t } = useTranslation();

	return (
		<div>
			<div className={classes.vacancySkillFlex}>
				<Text className={classes.vacancyKey}>{t('SPHERE')}*</Text>
				<Autocomplete
					options={spheres || []}
					getOptionLabel={option => option.sphereName}
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
				{spheres &&
					spheres.map(elem => (
						<div className={classes.vacancySkillItem} key={elem._id}>
							<a
								href="nothing"
								className={classes.vacancySkillItemLink}
								onClick={e => {
									e.preventDefault();
									handleClickSkill('sphere', {
										_id: elem._id,
										sphereName: elem.sphereName,
									});
								}}
							>
								{elem.sphereName}
							</a>
						</div>
					))}
			</div>
		</div>
	);
};

export default withSpheres(SphereList);
