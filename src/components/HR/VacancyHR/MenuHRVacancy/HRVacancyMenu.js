import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const HRVacancyMenu = ({ classes }) => {
	return (
		<>
			<nav className={classes.hrMenu}>
				<div className={classes.hrMenuText}>Мії вакансії</div>
				<div className={classes.hrMenuGroup}>
					<div className={classes.hrMenuItem}>
						<NavLink to="/hr/vacancy" className={classes.hrMenuLink}>
							<SearchIcon />
							<div>Список кандидатів</div>
						</NavLink>
					</div>
					<div className={classes.hrMenuItem}>
						<NavLink to="/hr/vacancy/sent" className={classes.hrMenuLink}>
							<MailOutlineIcon />
							<div>Відправлені пропозиції</div>
						</NavLink>
					</div>
					<div className={classes.hrMenuItem}>
						<NavLink to="/hr/vacancy/received" className={classes.hrMenuLink}>
							<MailOutlineIcon />
							<div>Отримані пропозиції</div>
						</NavLink>
					</div>
				</div>
			</nav>
			<Link to="/hr/vacancyAdd" className={classes.linkAddVacancy}>
				<AddCircleOutlineIcon className={classes.linkAddVacancyDark} />
				Додати вакансію
			</Link>
		</>
	);
};

export default HRVacancyMenu;
