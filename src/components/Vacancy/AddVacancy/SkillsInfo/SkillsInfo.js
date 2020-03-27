import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import useStyles from './styles';
import Category from './Category';
import SphereList from './SphereList';
import VacancyName from './VacancyName';
import ChackboxList from './CheckboxList';
import { englishLevel } from './skillsList';
import ProfessionList from './ProfessionList';
import Button from '../../../../shared/Button';
import validation from '../../../../utils/validation/vacancy';
import { addVacancy } from '../../../../store/vacancy/actions';

const SkillsInfo = ({ isActive, firstForm, user, addVacancy }) => {
	const classes = useStyles();
	const { t } = useTranslation();
	const [skill, setSkill] = useState({
		sphere: null,
		vacancyName: null,
		englishLevel: 'Нет',
		profession: null,
		category: null,
	});
	const [checkboxSkill, setCheckboxSkill] = useState(null);

	const handleClickSkill = (name, newValue) => {
		setSkill({ ...skill, [name]: newValue });
	};

	const handleChangeEnglish = (event, newValue) => {
		setSkill({ ...skill, englishLevel: englishLevel[newValue] });
	};

	const validationStatus = () => {
		return (
			validation('sphere', skill.sphere, t) &&
			validation('vacancyName', skill.vacancyName, t) &&
			validation('profession', skill.profession, t) &&
			validation('category', skill.category, t) &&
			validation('skills', checkboxSkill, t)
		);
	};

	const addNewVacancy = () => {
		const body = {
			active: isActive,
			...firstForm,
			sphere: skill.sphere,
			vacancyName: skill.vacancyName,
			englishLevel: skill.englishLevel,
			profession: skill.profession,
			category: skill.category,
			skills: [...checkboxSkill],
			companyId: user.companyId,
			hrId: user._id,
		};
		if (validationStatus()) {
			addVacancy(body);
		}
	};

	return (
		<>
			<SphereList
				skill={skill}
				classes={classes}
				setSkill={setSkill}
				handleClickSkill={handleClickSkill}
			/>
			<ProfessionList
				skill={skill}
				classes={classes}
				setSkill={setSkill}
				handleClickSkill={handleClickSkill}
			/>
			<VacancyName skill={skill} classes={classes} setSkill={setSkill} />
			<Category skill={skill} classes={classes} setSkill={setSkill} />
			<ChackboxList
				skill={skill}
				classes={classes}
				setCheckboxSkill={setCheckboxSkill}
				handleChangeEng={handleChangeEnglish}
			/>
			{skill.category && (
				<div className={classes.alignCenter}>
					<Button click={addNewVacancy}>{t('POST')}</Button>
				</div>
			)}
		</>
	);
};

const mapStateToProps = ({ hr, vacancy }) => ({
	user: hr.user,
	firstForm: vacancy.addVacancy,
});

export default connect(mapStateToProps, { addVacancy })(SkillsInfo);
