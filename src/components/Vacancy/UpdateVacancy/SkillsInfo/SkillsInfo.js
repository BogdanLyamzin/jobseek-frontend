import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Translation } from 'react-i18next';

import ChackboxList from './CheckboxList';
import { englishLevel } from './skillsList';
import Button from '../../../../shared/Button';
import useStyles from '../../AddVacancy/SkillsInfo/styles';
import SphereList from '../../AddVacancy/SkillsInfo/SphereList';
import { updateVacancy } from '../../../../store/vacancy/actions';
import { objToArr, arrToObj } from '../../../../utils/transformArr-Obj';
import LanguageVacancy from '../../AddVacancy/SkillsInfo/LanguageVacancy';
import SpecializationList from '../../AddVacancy/SkillsInfo/SpecializationList';

const SkillsInfo = ({ id, info, oneVacancy, updateVacancy }) => {
	const classes = useStyles();
	const [skill, setSkill] = useState({
		sphere: null,
		specialization: null,
		vacancyName: '',
		englishLevel: null,
		programmLanguage: '',
	});
	const [checkbox, setCheckbox] = useState(null);
	const [checkboxArr, setCheckboxArr] = useState(null);

	useEffect(() => {
		setSkill({
			vacancyName: oneVacancy ? oneVacancy.vacancyName : '',
			englishLevel: oneVacancy ? oneVacancy.englishLevel : '',
			programmLanguage: oneVacancy ? oneVacancy.programmLanguage : '',
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
		<Translation>
			{t => (
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
					<LanguageVacancy
						skill={skill}
						classes={classes}
						setSkill={setSkill}
						handleChange={handleChangeEnglish}
					/>
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
					{skill.programmLanguage && (
						<div className={classes.alignCenter}>
							<Button text={t('UPDATE')} click={() => update()} />
						</div>
					)}
				</>
			)}
		</Translation>
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
