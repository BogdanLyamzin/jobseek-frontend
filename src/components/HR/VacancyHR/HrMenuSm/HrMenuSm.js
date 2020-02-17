import React from 'react';
import { Translation } from 'react-i18next';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from 'react-router-dom';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const VacancyHR = ({ classes }) => {
	return (
		<Translation>
			{t => (
				<nav className={classes.hrMenuSm}>
					<div className={classes.hrMenuGroup}>
						<div className={classes.hrMenuItem}>
							<NavLink to="/hr/vacancy" className={classes.hrMenuLink}>
								<SearchIcon />
								<div>{t('CANDIDATES_LIST')}</div>
							</NavLink>
						</div>
						<div className={classes.hrMenuItem}>
							<NavLink to="/hr/vacancy/sent" className={classes.hrMenuLink}>
								<MailOutlineIcon />
								<div>{t('SENT_OFFERS')}</div>
							</NavLink>
						</div>
						<div className={classes.hrMenuItem}>
							<NavLink to="/hr/vacancy/received" className={classes.hrMenuLink}>
								<MailOutlineIcon />
								<div>{t('RECEIVED_OFFERS')}</div>
							</NavLink>
						</div>
					</div>
				</nav>
			)}
		</Translation>
	);
};

export default VacancyHR;
