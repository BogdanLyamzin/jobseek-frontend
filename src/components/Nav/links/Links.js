import React from 'react';

import Link from 'shared/Link';
import useStyles from './styles';
import withLanguage from 'hoc/withLanguage';

const Links = ({ t, className, links, setHidden }) => {
	const classes = useStyles();
	return (
		<div className={className}>
			{links.map(e => (
				<Link key={e.to} to={e.to} onClick={setHidden} className={classes.link}>
					{t(e.text)}
				</Link>
			))}
		</div>
	);
};

export default withLanguage(Links);
