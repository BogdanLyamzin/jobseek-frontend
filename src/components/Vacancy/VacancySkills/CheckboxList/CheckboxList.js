import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Checkbox from 'shared/Checkbox';
import withSkills from 'hoc/withSkills';

const useStyles = makeStyles(() => ({
	list: {
		flexBasis: '60%',
		padding: '5px 0 0 25px',
		display: 'flex',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
	},
}));

const CheckboxList = ({ checkbox, skillList, checkboxHandleChange }) => {
	const classes = useStyles();
	return (
		<div className={classes.list}>
			{skillList &&
				skillList.map(elem => (
					<Checkbox
						key={elem._id}
						value={elem._id}
						name={elem.skillName}
						onChange={checkboxHandleChange(elem.skillName)}
						checked={!!(checkbox && checkbox[elem.skillName])}
					/>
				))}
		</div>
	);
};

export default withSkills(CheckboxList);
