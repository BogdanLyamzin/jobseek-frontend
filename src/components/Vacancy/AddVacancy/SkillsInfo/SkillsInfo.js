import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import API from '../../../../services/api';
import SphereList from './SphereList';
import ChackboxList from './CheckboxList';
import { englishLevel } from './skillsList';
import LanguageVacancy from './LanguageVacancy';
import SpecializationList from './SpecializationList';

const SkillsInfo = ({ isActive, firstForm }) => {
	const [skill, setSkill] = useState({
		sphere: null,
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
				setSkill={setSkill}
				handleClickSkill={handleClickSkill}
			/>
			<SpecializationList
				skill={skill}
				setSkill={setSkill}
				handleClickSkill={handleClickSkill}
			/>
			<LanguageVacancy
				skill={skill}
				setSkill={setSkill}
				handleChange={handleChangeEnglish}
			/>
			<ChackboxList
				checkbox={checkbox}
				checkboxArr={checkboxArr}
				setCheckbox={setCheckbox}
				handleChange={handleChangeSkillSlider}
				checkboxHandleChange={checkboxHandleChange}
			/>
			<div className="vacancy-align-center">
				<button onClick={() => addVacancy()} className="vacancy-save">
					Опублікувати
				</button>
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
