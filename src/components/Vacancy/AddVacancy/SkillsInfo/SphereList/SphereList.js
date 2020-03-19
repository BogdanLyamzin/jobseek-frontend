import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Text from '../../../../../shared/Text';
import { getAllSpheres } from '../../../../../store/admin/actions/sphereActions';

const SphereList = ({
	skill,
	classes,
	setSkill,
	sphereList,
	handleClickSkill,
	getAllSpheres,
}) => {
	const [spheres, setSphere] = useState(null);
	const { t } = useTranslation();
	useEffect(() => {
		getAllSpheres();
	}, [getAllSpheres]);

	useEffect(() => {
		setSphere(sphereList);
	}, [sphereList]);

	return (
		<div>
			<div className={classes.vacancySkillFlex}>
				<Text className={classes.vacancyKey}>{t('SPHERE')}*</Text>
				<Autocomplete
					options={spheres}
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
					spheres.map(elem => {
						return (
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
						);
					})}
			</div>
		</div>
	);
};

const mapStateToProps = ({ admin }) => {
	return {
		sphereList: admin.sphereChange,
	};
};

export default connect(mapStateToProps, { getAllSpheres })(SphereList);
