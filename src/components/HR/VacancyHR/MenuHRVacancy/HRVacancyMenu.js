import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const HRVacancyMenu = () => {
	return (
		<>
			<ul className="hr-menu">
				<li className="hr-menu-item hr-menu-link">Мії вакансії</li>
				<li className="hr-menu-item hr-menu-item-line">
					<NavLink
						to="/admin/hr/vacancy"
						className="hr-menu-link"
						activeClassName="hr-menu-link-active"
					>
						<SearchIcon />
						<div>Список кандидатів</div>
					</NavLink>
				</li>
				<li className="hr-menu-item hr-menu-item-line">
					<NavLink
						to="/admin/hr/vacancy/sent"
						className="hr-menu-link"
						activeClassName="hr-menu-link-active"
					>
						<MailOutlineIcon />
						<div>Відправлені пропозиції</div>
					</NavLink>
				</li>
				<li className="hr-menu-item hr-menu-item-line">
					<NavLink
						to="/admin/hr/vacancy/received"
						className="hr-menu-link"
						activeClassName="hr-menu-link-active"
					>
						<MailOutlineIcon />
						<div>Отримані пропозиції</div>
					</NavLink>
				</li>
			</ul>
			<Link to="/admin/vacancyAdd" className="link-add-vacancy">
				<AddCircleOutlineIcon className="link-add-vacancy-dark" />
				Додати вакансію
			</Link>
		</>
	);
};

export default HRVacancyMenu;
