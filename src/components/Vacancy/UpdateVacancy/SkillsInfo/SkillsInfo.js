import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import ChackboxList from './CheckboxList';
import { englishLevel } from './skillsList';
import Button from '../../../../shared/Button';
import useStyles from '../../AddVacancy/SkillsInfo/styles';
import Category from '../../AddVacancy/SkillsInfo/Category';
import validation from '../../../../utils/validation/vacancy';
import objToArr from '../../../../utils/transformType/objToArr';
import arrToObj from '../../../../utils/transformType/arrToObj';
import SphereList from '../../AddVacancy/SkillsInfo/SphereList';
import { updateVacancy } from '../../../../store/vacancy/actions';
import ProfessionList from '../../AddVacancy/SkillsInfo/ProfessionList';

import { sphereList } from './skillsList'; //TEST

const SkillsInfo = ({ id, firstForm, oneVacancy, updateVacancy }) => {
	const classes = useStyles();
	const { t } = useTranslation();
	const [skill, setSkill] = useState({
		sphere: null,
		profession: null,
		vacancyName: '',
		englishLevel: 'Нет',
		category: '',
	});
	const [checkbox, setCheckbox] = useState(null);
	const [checkboxArr, setCheckboxArr] = useState(null);

	useEffect(() => {
		setSkill({
			sphere: oneVacancy ? sphereList[0] : '',
			category: oneVacancy ? oneVacancy.category : '',
			profession: oneVacancy ? oneVacancy.profession : '',
			vacancyName: oneVacancy ? oneVacancy.vacancyName : '',
			englishLevel: oneVacancy ? oneVacancy.englishLevel : '',
		});
		setCheckbox(oneVacancy ? arrToObj(oneVacancy.skills) : null);
	}, [oneVacancy]);

	useEffect(() => {
		setCheckboxArr([...objToArr(checkbox)]);
	}, [checkbox]);

	const handleClickSkill = (name, newValue) => {
		setSkill({ ...skill, [name]: newValue });
	};

	const handleChangeEnglish = (event, newValue) => {
		setSkill({ ...skill, englishLevel: englishLevel[newValue] });
	};

	const handleChangeSkillSlider = (name, id) => (event, newValue) => {
		setCheckbox({
			...checkbox,
			[name]: {
				name,
				id,
				experience: newValue,
			},
		});
	};

	const validationStatus = () => {
		return (
			validation('sphere', skill.sphere, t) &&
			validation('vacancyName', skill.vacancyName, t) &&
			validation('profession', skill.profession, t) &&
			validation('category', skill.category, t) &&
			validation('skills', checkboxArr, t)
		);
	};

	const update = () => {
		const body = {
			...firstForm,
			sphere: skill.sphere.title,
			vacancyName: skill.vacancyName,
			englishLevel: skill.englishLevel,
			profession: skill.profession,
			category: skill.category,
			skills: [...checkboxArr],
		};
		if (validationStatus()) {
			updateVacancy(id, body);
		}
	};

	const checkboxHandleChange = name => event => {
		if (event.target.checked) {
			setCheckbox({
				...checkbox,
				[name]: {
					id: event.target.value,
					experience: 0,
				},
			});
		} else {
			setCheckbox({ ...checkbox, [name]: null });
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
			<Category skill={skill} classes={classes} setSkill={setSkill} />
			<ChackboxList
				skill={skill}
				classes={classes}
				checkbox={checkbox}
				checkboxArr={checkboxArr}
				setCheckbox={setCheckbox}
				handleChangeEng={handleChangeEnglish}
				handleChange={handleChangeSkillSlider}
				checkboxHandleChange={checkboxHandleChange}
			/>
			{skill.category && (
				<div className={classes.alignCenter}>
					<Button text={t('UPDATE')} click={() => update()} />
				</div>
			)}
		</>
	);
};

const mapStateToProps = ({ vacancy }) => {
	return {
		firstForm: vacancy.addVacancy,
		oneVacancy: vacancy.vacancy,
	};
};

const mapDispatchToProps = {
	updateVacancy,
};

export default connect(mapStateToProps, mapDispatchToProps)(SkillsInfo);
