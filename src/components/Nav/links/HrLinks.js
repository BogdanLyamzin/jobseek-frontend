import React from 'react';

import Link from 'shared/Link';
import useStyles from './styles';
import withLanguage from 'hoc/withLanguage';
import { PROFILE } from 'utils/variables/hrLinks';

const HrLinks = ({ t, className }) => {
	const classes = useStyles();
	return (
		<div className={className}>
			{PROFILE.map(e => (
				<Link key={e.to} to={e.to} className={classes.link}>
					{t(e.text)}
				</Link>
			))}
		</div>
	);
};

export default withLanguage(HrLinks);
