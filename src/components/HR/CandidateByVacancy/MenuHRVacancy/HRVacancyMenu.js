import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import Link from 'shared/Link';
import Text from 'shared/Text';
import withLanguage from 'hoc/withLanguage';

const HRVacancyMenu = ({ t, classes, id }) => (
	<nav className={classes.hrMenu}>
		<div className={classes.menuItem}>
			<Link to={`/hr/vacancy/${id}`} className={classes.menuLink}>
				<SearchIcon />
				<Text>{t('CANDIDATES_LIST')}</Text>
			</Link>
		</div>
		<div className={classes.menuItem}>
			<Link to={`/hr/vacancy/${id}/sent`} className={classes.menuLink}>
				<MailOutlineIcon />
				<Text>{t('SENT_OFFERS')}</Text>
			</Link>
		</div>
		<div className={classes.menuItem}>
			<Link to={`/hr/vacancy/${id}/received`} className={classes.menuLink}>
				<MailOutlineIcon />
				<Text>{t('RECEIVED_OFFERS')}</Text>
			</Link>
		</div>
	</nav>
);

export default withLanguage(HRVacancyMenu);
