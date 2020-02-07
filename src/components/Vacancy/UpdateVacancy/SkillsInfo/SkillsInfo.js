import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import SphereList from './SphereList';
import ChackboxList from './CheckboxList';
import { englishLevel } from './skillsList';
import LanguageVacancy from './LanguageVacancy';
import SpecializationList from './SpecializationList';
import { updateVacancy } from '../../../../store/vacancy/actions';
import { objToArr, arrToObj } from '../../../../utils/transformArr-Obj';

const SkillsInfo = ({ id, info, oneVacancy, updateVacancy }) => {
	const [skill, setSkill] = useState({
		sphere: null,
		specialization: null,
		vacancyName: null,
		englishLevel: null,
		programmLanguage: null,
	});
	const [checkbox, setCheckbox] = useState(null);
	const [checkboxArr, setCheckboxArr] = useState(null);

	useEffect(() => {
		setSkill({
			vacancyName: oneVacancy ? oneVacancy.result.vacancyName : null,
			englishLevel: oneVacancy ? oneVacancy.result.englishLevel : null,
			programmLanguage: oneVacancy ? oneVacancy.result.programmLanguage : null,
		});
		setCheckbox(oneVacancy ? arrToObj(oneVacancy.result.skills) : null);
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
				id,
				experience: newValue,
			},
		});
	};

	const update = () => {
		const body = {
			...info,
			...skill,
			skills: [...checkboxArr],
		};
		updateVacancy(id, body);
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
				<button onClick={() => update()} className="vacancy-save">
					Опублікувати
				</button>
			</div>
		</>
	);
};

const mapStateToProps = ({ vacancy }) => {
	return {
		info: vacancy.addVacancy,
		oneVacancy: vacancy.vacancy,
	};
};

const mapDispatchToProps = {
	updateVacancy,
};

export default connect(mapStateToProps, mapDispatchToProps)(SkillsInfo);
