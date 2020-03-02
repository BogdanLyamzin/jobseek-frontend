import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

import Radio from '../Radio';

const useStyles = makeStyles(() => ({
	label: {
		fontFamily: '"Open Sans", sans-serif',
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
					value="fullDay"
					onChange={onChange}
					checked={values === 'fullDay'}
				/>
				{t('FULL_DAY')}
			</label>
			<label className={classes.label}>
				<Radio
					name="employmentType"
					value="non-fullDay"
					onChange={onChange}
					checked={values === 'non-fullDay'}
				/>
				{t('PART_TIME')}
			</label>
			<label className={classes.label}>
				<Radio
					name="employmentType"
					value="freelance"
					onChange={onChange}
					checked={values === 'freelance'}
				/>
				{t('FREELANCE')}
			</label>
			<label className={classes.label}>
				<Radio
					name="employmentType"
					value="distantWork"
					onChange={onChange}
					checked={values === 'distantWork'}
				/>
				{t('REMOTE')}
			</label>
			<label className={classes.label}>
				<Radio
					name="employmentType"
					value="any"
					onChange={onChange}
					checked={values === 'any'}
				/>
				{t('ANY')}
			</label>
		</>
	);
};

export default RadioGroup;
