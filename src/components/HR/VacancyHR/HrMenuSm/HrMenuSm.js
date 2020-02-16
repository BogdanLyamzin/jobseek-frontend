import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from 'react-router-dom';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const VacancyHR = ({ classes }) => {
	return (
		<nav className={classes.hrMenuSm}>
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
	);
};

export default VacancyHR;
