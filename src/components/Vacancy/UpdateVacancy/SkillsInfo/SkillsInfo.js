import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import {
	SKILLS,
	SPHERE,
	CATEGORY,
	PROFESSION,
	VACANCY_NAME,
} from 'utils/variables/inputName';
import Button from 'shared/Button';
import ChackboxList from './CheckboxList';
import withLanguage from 'hoc/withLanguage';
import validation from 'utils/validation/vacancy';
import englishLevel from 'utils/variables/english';
import arrToObj from 'utils/transformType/arrToObj';
import { updateVacancy } from 'store/vacancy/actions';
import useStyles from '../../AddVacancy/SkillsInfo/styles';
import Category from '../../AddVacancy/SkillsInfo/Category';
import SphereList from '../../AddVacancy/SkillsInfo/SphereList';
import VacancyName from '../../AddVacancy/SkillsInfo/VacancyName';
import ProfessionList from '../../AddVacancy/SkillsInfo/ProfessionList';

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
		if (validationStatus()) {
			updateVacancy(id, body);
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
				checkboxGet={checkbox}
				setCheckboxSkill={setCheckboxSkill}
				handleChangeEng={handleChangeEnglish}
			/>
			{skill.category && (
				<div className={classes.alignCenter}>
					<Button click={() => update()}>{t('UPDATE')}</Button>
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

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withLanguage,
)(SkillsInfo);
