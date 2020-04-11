import React from 'react';

import Link from 'shared/Link';
import useStyles from './styles';
import withLanguage from 'hoc/withLanguage';

const HrLinks = ({ t, className }) => {
	const classes = useStyles();
	return (
		<div className={className}>
			<Link className={classes.link} to="/hr">
				{t('MY_PROFILE')}
			</Link>
			<Link className={classes.link} to="/hr/vacancy">
				{t('MY_VACANCIES')}
			</Link>
			<Link className={classes.link} to="/hr/addVacancy">
				{t('ADD_VACANCY')}
			</Link>
		</div>
	);
};

export default withLanguage(HrLinks);
