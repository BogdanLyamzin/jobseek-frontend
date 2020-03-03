import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import useStyles from './styles';
import Category from './Category';
import SphereList from './SphereList';
import ChackboxList from './CheckboxList';
import { englishLevel } from './skillsList';
import ProfessionList from './ProfessionList';
import Button from '../../../../shared/Button';
import validation from '../../../../utils/validation/vacancy';
import { addCv } from '../../../../store/cv/actions';
import objToArr from '../../../../utils/transformType/objToArr';

const SkillsInfo = ({ isActive, firstForm, user, addCv }) => {
	const classes = useStyles();
	const { t } = useTranslation();
	const [skill, setSkill] = useState({
		sphere: null,
		cvName: null,
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

	const validationStatus = () => {
		return (
			validation('sphere', skill.sphere) &&
			validation('cvName', skill.cvName) &&
			validation('profession', skill.profession) &&
			validation('category', skill.category) &&
			validation('skills', checkboxArr)
		);
	};

	const addNewCv = () => {
		const body = {
			active: isActive,
			...firstForm,
			sphere: skill.sphere && skill.sphere.title,
			cvName: skill.cvName,
			englishLevel: skill.englishLevel,
			profession: skill.profession,
			category: skill.category,
			skills: [...checkboxArr],
			companyId: user.companyId,
			candidateId: user._id,
		};
		if (validationStatus()) {
			addCv(body);
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
					<Button text={t('POST')} click={() => addNewCv()} />
				</div>
			)}
		</>
	);
};

const mapStateToProps = ({ candidate, cv }) => {
	return {
		user: candidate.user,
		firstForm: cv.addCv,
	};
};

export default connect(mapStateToProps, { addCv })(SkillsInfo);
