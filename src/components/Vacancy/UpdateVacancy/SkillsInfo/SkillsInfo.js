import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import ChackboxList from './CheckboxList';
import { englishLevel } from './skillsList';
import Button from '../../../../shared/Button';
import useStyles from '../../AddVacancy/SkillsInfo/styles';
import Category from '../../AddVacancy/SkillsInfo/Category';
import validation from '../../../../utils/validation/vacancy';
import arrToObj from '../../../../utils/transformType/arrToObj';
import SphereList from '../../AddVacancy/SkillsInfo/SphereList';
import { updateVacancy } from '../../../../store/vacancy/actions';
import VacancyName from '../../AddVacancy/SkillsInfo/VacancyName';
import ProfessionList from '../../AddVacancy/SkillsInfo/ProfessionList';

const SkillsInfo = ({ id, firstForm, oneVacancy, updateVacancy }) => {
	const classes = useStyles();
	const { t } = useTranslation();
	const [skill, setSkill] = useState({
		sphere: null,
		profession: null,
		vacancyName: null,
		englishLevel: 'Нет',
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

	const validationStatus = () => {
		return (
			validation('sphere', skill.sphere, t) &&
			validation('vacancyName', skill.vacancyName, t) &&
			validation('profession', skill.profession, t) &&
			validation('category', skill.category, t) &&
			validation('skills', checkboxSkill, t)
		);
	};

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

export default connect(mapStateToProps, mapDispatchToProps)(SkillsInfo);
