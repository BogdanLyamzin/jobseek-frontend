import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Button from 'shared/Button';
import SkillsList from './SkillsList';
import withLanguage from 'hoc/withLanguage';
import validation from 'utils/validation/vacancy';
import englishLevel from 'utils/variables/english';
import arrToObj from 'utils/transformType/arrToObj';
import Category from '../../VacancySkills/Category';
import { updateVacancy } from 'store/vacancy/actions';
import useStyles from '../../AddVacancy/Skills/styles';
import SphereList from '../../VacancySkills/SphereList';
import VacancyName from '../../VacancySkills/VacancyName';
import ProfessionList from '../../VacancySkills/ProfessionList';
import { onChangeNameFactory } from 'utils/actions/onChangeFactory';
import { SKILLS, SPHERE, CATEGORY, PROFESSION, VACANCY_NAME } from 'utils/variables/inputName';

const SkillsInfo = ({ t, id, firstForm, oneVacancy, updateVacancy }) => {
	const classes = useStyles();
	const [skill, setSkill] = useState({
		sphere: null,
		profession: null,
		vacancyName: null,
		englishLevel: englishLevel[0],
		category: null,
	});
	const [checkbox, setCheckbox] = useState(null);
	const [checkboxSkill, setCheckboxSkill] = useState(null);

	useEffect(() => {
		setSkill({
			sphere: oneVacancy && oneVacancy.sphere,
			category: oneVacancy && oneVacancy.category,
			profession: oneVacancy && oneVacancy.profession,
			vacancyName: oneVacancy && oneVacancy.vacancyName,
			englishLevel: oneVacancy && oneVacancy.englishLevel,
		});
		setCheckbox(oneVacancy && arrToObj(oneVacancy.skills));
	}, [oneVacancy]);

	const changeSkill = onChangeNameFactory(skill, setSkill);
	const handleChangeEnglish = (event, newValue) => {
		setSkill({ ...skill, englishLevel: englishLevel[newValue] });
	};

	const validationStatus = () =>
		validation(SPHERE, skill.sphere, t) &&
		validation(PROFESSION, skill.profession, t) &&
		validation(VACANCY_NAME, skill.vacancyName, t) &&
		validation(CATEGORY, skill.category, t) &&
		validation(SKILLS, checkboxSkill, t);

	const update = () => {
		const body = {
			...firstForm,
			sphere: skill.sphere,
			vacancyName: skill.vacancyName,
			englishLevel: skill.englishLevel,
			profession: skill.profession,
			category: skill.category,
			skills: [...checkboxSkill],
		};
		validationStatus() && updateVacancy(id, body);
	};

	return (
		<>
			<SphereList skill={skill} classes={classes} setSkill={setSkill} onChange={changeSkill} />
			<ProfessionList skill={skill} classes={classes} setSkill={setSkill} onChange={changeSkill} />
			<VacancyName skill={skill} classes={classes} setSkill={setSkill} onChange={changeSkill} />
			<Category skill={skill} classes={classes} setSkill={setSkill} onChange={changeSkill} />
			<SkillsList
				skill={skill}
				classes={classes}
				checkboxGet={checkbox}
				setCheckboxSkill={setCheckboxSkill}
				handleChangeEng={handleChangeEnglish}
			/>
			{skill.category && (
				<div className={classes.alignCenter}>
					<Button click={update}>{t('UPDATE')}</Button>
				</div>
			)}
		</>
	);
};

const mapStateToProps = ({ vacancy }) => ({
	firstForm: vacancy.addVacancy,
	oneVacancy: vacancy.vacancy,
});

const mapDispatchToProps = {
	updateVacancy,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withLanguage)(SkillsInfo);
