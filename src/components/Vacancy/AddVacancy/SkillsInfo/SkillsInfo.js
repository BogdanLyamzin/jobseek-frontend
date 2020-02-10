import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import useStyles from './styles';
import SphereList from './SphereList';
import ChackboxList from './CheckboxList';
import API from '../../../../services/api';
import { englishLevel } from './skillsList';
import Button from '../../../../shared/Button';
import LanguageVacancy from './LanguageVacancy';
import SpecializationList from './SpecializationList';

const SkillsInfo = ({ isActive, firstForm }) => {
	const classes = useStyles();
	const [skill, setSkill] = useState({
		sphere: null,
		vacancyName: '',
		englishLevel: null,
		specialization: null,
		programmLanguage: null,
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

	const addVacancy = () => {
		const body = {
			active: isActive,
			...firstForm,
			...skill,
			skills: [...checkboxArr],
			companyId: '34823852',
			hrId: '841385880780',
		};
		API.addVacancy(body);
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
			<SpecializationList
				skill={skill}
				classes={classes}
				setSkill={setSkill}
				handleClickSkill={handleClickSkill}
			/>
			<LanguageVacancy skill={skill} classes={classes} setSkill={setSkill} />
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
			<div className={classes.alignCenter}>
				<Button text="Опублікувати" click={() => addVacancy()} />
			</div>
		</>
	);
};

const objToArr = obj => {
	let arr = [];
	for (let key in obj) {
		if (obj[key]) {
			arr.push({ name: key, id: obj[key].id, experience: obj[key].experience });
		}
	}
	return arr;
};

const mapStateToProps = ({ vacancy }) => {
	return {
		firstForm: vacancy.addVacancy,
	};
};

export default connect(mapStateToProps)(SkillsInfo);
