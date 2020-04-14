import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import useStyles from './styles';
import {
	SKILLS,
	SPHERE,
	CATEGORY,
	PROFESSION,
	VACANCY_NAME,
} from 'utils/variables/inputName';
import Button from 'shared/Button';
import SkillsList from './SkillsList';
import withLanguage from 'hoc/withLanguage';
import validation from 'utils/validation/vacancy';
import { addVacancy } from 'store/vacancy/actions';
import englishLevel from 'utils/variables/english';
import Category from '../../VacancySkills/Category';
import SphereList from '../../VacancySkills/SphereList';
import VacancyName from '../../VacancySkills/VacancyName';
import ProfessionList from '../../VacancySkills/ProfessionList';

const SkillsInfo = ({ t, isActive, firstForm, user, addVacancy }) => {
	const classes = useStyles();
	const [skill, setSkill] = useState({
		sphere: null,
		vacancyName: null,
		englishLevel: englishLevel[0],
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

	const validationStatus = () =>
		validation(SPHERE, skill.sphere, t) &&
		validation(PROFESSION, skill.profession, t) &&
		validation(VACANCY_NAME, skill.vacancyName, t) &&
		validation(CATEGORY, skill.category, t) &&
		validation(SKILLS, checkboxSkill, t);

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
			<ProfessionList skill={skill} classes={classes} setSkill={setSkill} />
			<VacancyName skill={skill} classes={classes} setSkill={setSkill} />
			<Category skill={skill} classes={classes} setSkill={setSkill} />
			<SkillsList
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

export default compose(
	connect(mapStateToProps, { addVacancy }),
	withLanguage,
)(SkillsInfo);
