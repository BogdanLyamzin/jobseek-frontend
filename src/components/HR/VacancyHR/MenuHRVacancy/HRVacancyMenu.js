import React from 'react';
import { Translation } from 'react-i18next';
import { NavLink, Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const HRVacancyMenu = ({ classes }) => {
	return (
		<Translation>
			{t => (
				<>
					<nav className={classes.hrMenu}>
						<div className={classes.hrMenuText}>{t('MY_VACANCIES')}</div>
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
								<NavLink
									to="/hr/vacancy/received"
									className={classes.hrMenuLink}
								>
									<MailOutlineIcon />
									<div>{t('RECEIVED_OFFERS')}</div>
								</NavLink>
							</div>
						</div>
					</nav>
					<Link to="/hr/vacancyAdd" className={classes.linkAddVacancy}>
						<AddCircleOutlineIcon className={classes.linkAddVacancyDark} />
						{t('ADD_VACANCY')}
					</Link>
				</>
			)}
		</Translation>
	);
};

export default HRVacancyMenu;
