import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Text from '../Text';
import Radio from '../Radio';
import useStyles from './styles';
import { EMPL_TYPE } from 'utils/variables/inputProps';

const RadioGroup = ({ onChange, values }) => {
	const classes = useStyles();
	const { t } = useTranslation();

	return (
		<div className={classes.item}>
			<Text className={classes.key}>{t('EMPLOYMENT_TYPE')}*</Text>
			{EMPL_TYPE.map(elem => (
				<label key={elem.name} className={classes.label}>
					<Radio
						name="employmentType"
						value={elem.name}
						onChange={onChange}
						checked={values === elem.name}
					/>
					{t(elem.text)}
				</label>
			))}
		</div>
	);
};

RadioGroup.propTypes = {
	values: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default RadioGroup;
