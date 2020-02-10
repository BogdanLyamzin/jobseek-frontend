import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const HRVacancyMenu = ({ classes }) => {
	return (
		<>
			<ul className={classes.hrMenu}>
				<li className={classes.hrMenuText}>Мії вакансії</li>
				<li className={classes.hrMenuItem}>
					<NavLink to="/hr/vacancy" className={classes.hrMenuLink}>
						<SearchIcon />
						<div>Список кандидатів</div>
					</NavLink>
				</li>
				<li className={classes.hrMenuItem}>
					<NavLink to="/hr/vacancy/sent" className={classes.hrMenuLink}>
						<MailOutlineIcon />
						<div>Відправлені пропозиції</div>
					</NavLink>
				</li>
				<li className={classes.hrMenuItem}>
					<NavLink to="/hr/vacancy/received" className={classes.hrMenuLink}>
						<MailOutlineIcon />
						<div>Отримані пропозиції</div>
					</NavLink>
				</li>
			</ul>
			<Link to="/hr/vacancyAdd" className={classes.linkAddVacancy}>
				<AddCircleOutlineIcon className={classes.linkAddVacancyDark} />
				Додати вакансію
			</Link>
		</>
	);
};

export default HRVacancyMenu;
