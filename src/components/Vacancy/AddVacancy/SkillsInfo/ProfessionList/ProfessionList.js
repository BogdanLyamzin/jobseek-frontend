import React from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const ProfessionList = ({ skill, setSkill, handleClickSkill, classes }) => {
	const { t } = useTranslation();

	return (
		<div>
			<div className={classes.vacancySkillFlex}>
				<div className={classes.vacancyKey}>{t('PROFESSION')}*</div>
				<Autocomplete
					options={skill.sphere ? skill.sphere.profession : []}
					getOptionLabel={option => option}
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
				{skill.sphere
					? skill.sphere.profession.map(elem => {
							return (
								<div className={classes.vacancySkillItem} key={elem}>
									<a
										href="nothing"
										className={classes.vacancySkillItemLink}
										onClick={e => {
											e.preventDefault();
											handleClickSkill('profession', elem);
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

export default ProfessionList;
