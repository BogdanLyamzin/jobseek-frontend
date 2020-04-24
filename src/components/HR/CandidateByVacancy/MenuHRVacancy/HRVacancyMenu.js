import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import Link from 'shared/Link';
import Text from 'shared/Text';
import withLanguage from 'hoc/withLanguage';
import { CAND_BY_VACANCY } from 'utils/variables/hrLinks';

const HRVacancyMenu = ({ t, classes, id }) => (
	<nav className={classes.hrMenu}>
		{CAND_BY_VACANCY.map((e, index) => (
			<Link key={e.text} to={`${e.to}${id}${e.to_f}`} className={classes.menuLink}>
				{index === 0 ? <SearchIcon /> : <MailOutlineIcon />}
				<Text>{t(e.text)}</Text>
			</Link>
		))}
	</nav>
);

export default withLanguage(HRVacancyMenu);
