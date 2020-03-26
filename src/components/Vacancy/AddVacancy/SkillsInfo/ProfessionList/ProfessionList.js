import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Text from '../../../../../shared/Text';
import withProfession from '../../../../../hoc/withProfessions';

const ProfessionList = ({
	skill,
	setId,
	classes,
	setSkill,
	profession,
	handleClickSkill,
}) => {
	const { t } = useTranslation();

	useEffect(() => {
		if (skill.sphere && skill.sphere._id) {
			setId(skill.sphere._id);
			setSkill({
				...skill,
				vacancyName: null,
				profession: null,
				category: null,
			});
		}
	}, [skill.sphere]);

	return (
		<div>
			<div className={classes.vacancySkillFlex}>
				<Text className={classes.vacancyKey}>{t('PROFESSION')}*</Text>
				<Autocomplete
					options={profession || []}
					getOptionLabel={option => option.professionName}
					autoComplete
					renderInput={params => <TextField {...params} fullWidth />}
					value={skill.profession}
					onChange={(event, newValue) => {
						setSkill({ ...skill, profession: newValue });
					}}
					className={classes.vacancySkillItemSelect}
				/>
			</div>
			<div className={classes.vacancySkillFlex}>
				{profession &&
					profession.map(elem => (
						<div className={classes.vacancySkillItem} key={elem._id}>
							<a
								href="nothing"
								className={classes.vacancySkillItemLink}
								onClick={e => {
									e.preventDefault();
									handleClickSkill('profession', {
										_id: elem._id,
										sphereId: elem.sphereId,
										professionName: elem.professionName,
									});
								}}
							>
								{elem.professionName}
							</a>
						</div>
					))}
			</div>
		</div>
	);
};

export default withProfession(ProfessionList);
