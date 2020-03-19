import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Text from '../../../../../shared/Text';
import { getCategoryByFilter } from '../../../../../store/admin/actions/categoryActions';

const Category = ({
	skill,
	classes,
	setSkill,
	categoryList,
	getCategoryByFilter,
}) => {
	const { t } = useTranslation();
	const [categories, setCategory] = useState(null);

	useEffect(() => {
		if (skill.vacancyName && skill.vacancyName._id) {
			getCategoryByFilter(`parentId=${skill.vacancyName._id}`);
			setSkill({ ...skill, category: skill.category });
		}
	}, [getCategoryByFilter, skill.vacancyName]);

	useEffect(() => {
		setCategory(categoryList);
	}, [categoryList]);

	return (
		<div className={classes.vacancySkillFlex}>
			<Text className={classes.vacancyKey}>{t('CATEGORY')}*</Text>
			<Autocomplete
				options={categories}
				getOptionLabel={option => option.categoryName}
				autoComplete
				renderInput={params => <TextField {...params} fullWidth />}
				value={skill.category}
				onChange={(event, newValue) => {
					setSkill({ ...skill, category: newValue });
				}}
				className={classes.vacancySkillItemSelect}
			/>
		</div>
	);
};

const mapStateToProps = ({ admin }) => {
	return {
		categoryList: admin.categoryChange,
	};
};

const mapDispatchToProps = {
	getCategoryByFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
