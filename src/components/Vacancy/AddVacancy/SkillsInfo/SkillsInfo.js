import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { useTranslation } from 'react-i18next';

import useStyles from './styles';
import Category from './Category';
import SphereList from './SphereList';
import ChackboxList from './CheckboxList';
import { englishLevel } from './skillsList';
import ProfessionList from './ProfessionList';
import Button from '../../../../shared/Button';
import { objToArr } from '../../../../utils/transformArr-Obj';
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
	const [checkbox, setCheckbox] = useState(null);
	const [checkboxArr, setCheckboxArr] = useState(null);

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

	const addNewVacancy = () => {
		const body = {
			active: isActive,
			...firstForm,
			sphere: skill.sphere.title,
			vacancyName: skill.vacancyName,
			englishLevel: skill.englishLevel,
			profession: skill.profession,
			category: skill.category,
			skills: [...checkboxArr],
			companyId: user.companyId,
			hrId: user._id,
		};
		if (checkboxArr && checkboxArr.length > 0) {
			addVacancy(body);
		} else {
			toastr.error('Заповніть поле навиків');
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
					<Button text={t('POST')} click={() => addNewVacancy()} />
				</div>
			)}
		</>
	);
};

const mapStateToProps = ({ hr, vacancy }) => {
	return {
		user: hr.user,
		firstForm: vacancy.addVacancy,
	};
};

export default connect(mapStateToProps, { addVacancy })(SkillsInfo);
