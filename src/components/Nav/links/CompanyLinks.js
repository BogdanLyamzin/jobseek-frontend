import React from 'react';
import { useTranslation } from 'react-i18next';

import Link from 'shared/Link';
import useStyles from './styles';

export default function CompanyLinks() {
	const classes = useStyles();
	const { t } = useTranslation();
	return (
		<div>
			<Link className={classes.link} to="/company">
				{t('MY_PROFILE')}
			</Link>
			<Link className={classes.link} to="/company/hrs">
				HRs
			</Link>
			<Link className={classes.link} to="/company/review">
				{t('REVIEW')}
			</Link>
		</div>
	);
}
