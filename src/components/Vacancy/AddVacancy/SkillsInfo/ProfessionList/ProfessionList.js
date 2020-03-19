import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Text from '../../../../../shared/Text';
import { getProfessionsByFilter } from '../../../../../store/admin/actions/professionActions';

const ProfessionList = ({
	skill,
	classes,
	setSkill,
	professionList,
	handleClickSkill,
	getProfessionsByFilter,
}) => {
	const { t } = useTranslation();
	const [prof, setProf] = useState(null);

	useEffect(() => {
		if (skill.sphere && skill.sphere._id) {
			getProfessionsByFilter(`sphereId=${skill.sphere._id}`);
			setSkill({
				...skill,
				vacancyName: null,
				profession: null,
				category: null,
			});
		}
	}, [getProfessionsByFilter, skill.sphere]);

	useEffect(() => {
		setProf(professionList);
	}, [professionList]);

	return (
		<div>
			<div className={classes.vacancySkillFlex}>
				<Text className={classes.vacancyKey}>{t('PROFESSION')}*</Text>
				<Autocomplete
					options={prof}
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
				{prof &&
					prof.map(elem => {
						return (
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
						);
					})}
			</div>
		</div>
	);
};

const mapStateToProps = ({ admin }) => {
	return {
		professionList: admin.professionChange,
	};
};

const mapDispatchToProps = {
	getProfessionsByFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfessionList);
