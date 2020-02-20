import React from 'react';
import { Translation } from 'react-i18next';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import Link from '../../../../shared/Link';

const VacancyHR = ({ classes }) => {
	return (
		<Translation>
			{t => (
				<nav className={classes.hrMenuSm}>
					<div className={classes.hrMenuGroup}>
						<div className={classes.hrMenuItem}>
							<Link to="/hr/vacancy" className={classes.hrMenuLink}>
								<SearchIcon />
								<div>{t('CANDIDATES_LIST')}</div>
							</Link>
						</div>
						<div className={classes.hrMenuItem}>
							<Link to="/hr/vacancy/sent" className={classes.hrMenuLink}>
								<MailOutlineIcon />
								<div>{t('SENT_OFFERS')}</div>
							</Link>
						</div>
						<div className={classes.hrMenuItem}>
							<Link to="/hr/vacancy/received" className={classes.hrMenuLink}>
								<MailOutlineIcon />
								<div>{t('RECEIVED_OFFERS')}</div>
							</Link>
						</div>
					</div>
				</nav>
			)}
		</Translation>
	);
};

export default VacancyHR;
