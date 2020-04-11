import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

import Radio from '../Radio';
import {
	ANY,
	FULL,
	DISTANT,
	NONFULL,
	FREELANCE,
} from '../../utils/variables/employmentType';

const useStyles = makeStyles(theme => ({
	label: {
		fontFamily: theme.palette.font,
		fontSize: '16px',
		lineHeight: '24px',
		color: '#757575',
		display: 'block',
		margin: '10px 0 10px 7px',
	},
}));

const RadioGroup = ({ onChange, values }) => {
	const classes = useStyles();
	const { t } = useTranslation();

	return (
		<>
			<label className={classes.label}>
				<Radio
					name="employmentType"
					value={FULL}
					onChange={onChange}
					checked={values === FULL}
				/>
				{t('FULL_DAY')}
			</label>
			<label className={classes.label}>
				<Radio
					name="employmentType"
					value={NONFULL}
					onChange={onChange}
					checked={values === NONFULL}
				/>
				{t('PART_TIME')}
			</label>
			<label className={classes.label}>
				<Radio
					name="employmentType"
					value={FREELANCE}
					onChange={onChange}
					checked={values === FREELANCE}
				/>
				{t('FREELANCE')}
			</label>
			<label className={classes.label}>
				<Radio
					name="employmentType"
					value={DISTANT}
					onChange={onChange}
					checked={values === DISTANT}
				/>
				{t('REMOTE')}
			</label>
			<label className={classes.label}>
				<Radio
					name="employmentType"
					value={ANY}
					onChange={onChange}
					checked={values === ANY}
				/>
				{t('ANY')}
			</label>
		</>
	);
};

export default RadioGroup;
