import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import ChackboxList from './CheckboxList';
import { englishLevel } from './skillsList';
import Button from '../../../../shared/Button';
import useStyles from '../../AddCv/SkillsInfo/styles';
import Category from '../../AddCv/SkillsInfo/Category';
import validation from '../../../../utils/validation/vacancy';
import objToArr from '../../../../utils/transformType/objToArr';
import arrToObj from '../../../../utils/transformType/arrToObj';
import SphereList from '../../AddCv/SkillsInfo/SphereList';
import { updateCv } from '../../../../store/cv/actions';
import ProfessionList from '../../AddCv/SkillsInfo/ProfessionList';

import { sphereList } from './skillsList'; //TEST

const SkillsInfo = ({ id, firstForm, oneCv, updateCv }) => {
	const classes = useStyles();
	const { t } = useTranslation();
	const [skill, setSkill] = useState({
		sphere: null,
		profession: null,
		cvName: '',
		englishLevel: 'Нет',
		category: '',
	});
	const [checkbox, setCheckbox] = useState(null);
	const [checkboxArr, setCheckboxArr] = useState(null);

	useEffect(() => {
		setSkill({
			sphere: oneCv ? sphereList[0] : '',
			category: oneCv ? oneCv.category : '',
			profession: oneCv ? oneCv.profession : '',
			cvName: oneCv ? oneCv.cvName : '',
			englishLevel: oneCv ? oneCv.englishLevel : '',
		});
		setCheckbox(oneCv ? arrToObj(oneCv.skills) : null);
	}, [oneCv]);

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
			validation('sphere', skill.sphere) &&
			validation('cvName', skill.cvName) &&
			validation('profession', skill.profession) &&
			validation('category', skill.category) &&
			validation('skills', checkboxArr)
		);
	};

	const update = () => {
		const body = {
			...firstForm,
			sphere: skill.sphere.title,
			cvName: skill.cvName,
			englishLevel: skill.englishLevel,
			profession: skill.profession,
			category: skill.category,
			skills: [...checkboxArr],
		};
		if (validationStatus()) {
			updateCv(id, body);
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

const mapStateToProps = ({ cv }) => {
	return {
		firstForm: cv.addCv,
		oneCv: cv.cv,
	};
};

const mapDispatchToProps = {
	updateCv,
};

export default connect(mapStateToProps, mapDispatchToProps)(SkillsInfo);
