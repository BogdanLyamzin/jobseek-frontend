import React from 'react';
import { useTranslation } from 'react-i18next';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import Link from '../../../../shared/Link';

const HRVacancyMenu = ({ classes, id }) => {
	const { t } = useTranslation();
	return (
		<nav className={classes.hrMenu}>
			<div className={classes.menuItem}>
				<Link to={`/hr/vacancy/${id}`} className={classes.menuLink}>
					<SearchIcon />
					<div>{t('CANDIDATES_LIST')}</div>
				</Link>
			</div>
			<div className={classes.menuItem}>
				<Link to={`/hr/vacancy/${id}/sent`} className={classes.menuLink}>
					<MailOutlineIcon />
					<div>{t('SENT_OFFERS')}</div>
				</Link>
			</div>
			<div className={classes.menuItem}>
				<Link to={`/hr/vacancy/${id}/received`} className={classes.menuLink}>
					<MailOutlineIcon />
					<div>{t('RECEIVED_OFFERS')}</div>
				</Link>
			</div>
		</nav>
	);
};

export default HRVacancyMenu;
