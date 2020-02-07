import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import './AddVacancy.css';
import CommonInfo from './CommonInfo';
import SkillsInfo from './SkillsInfo';
import FormControlLable from './FormControlLable';

const AddVacancy = () => {
	const [isActive, setIsActive] = useState(true);

	return (
		<div className="addvacancy container">
			<div className="addvacancy-head">
				{/*<div></div>*/}
				<div className="hr-caption">Створити вакансію</div>
				<div className="addvacancy-isActive">
					<div>Активність вакансії</div>
					<FormControlLable setIsActive={setIsActive} isActive={isActive} />
				</div>
			</div>

			<div className="addvacancy-main">
				<div className="addvacancy-menu">
					<Link to="/admin/vacancyAdd" className="addvacancy-menu-link">
						Загальна інформація
					</Link>
					<Link to="/admin/vacancyAdd/skills" className="addvacancy-menu-link">
						Навички
					</Link>
				</div>
				<div className="addvacancy-routes">
					<Switch>
						<Route exact path="/admin/vacancyAdd" component={CommonInfo} />
						<Route path="/admin/vacancyAdd/skills">
							<SkillsInfo isActive={isActive} />
						</Route>
					</Switch>
				</div>
			</div>
		</div>
	);
};

export default AddVacancy;
