import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import useStyles from './styles';
import CommonInfo from './CommonInfo';
import SkillsInfo from './SkillsInfo';
import Title from '../../../shared/Title';
import SwitchControl from '../../../shared/Switch';

const AddVacancy = () => {
	const classes = useStyles();
	const [isActive, setIsActive] = useState(true);

	return (
		<div className={classes.container}>
			<div className={classes.addvacancy}>
				<div className={classes.addvacancyHead}>
					<div></div>
					<Title text="Створити вакансію" />
					<div className={classes.addvacancyIsActive}>
						<div>Активність вакансії</div>
						<SwitchControl setIsActive={setIsActive} isActive={isActive} />
					</div>
				</div>

				<div className={classes.addvacancyMain}>
					<div className={classes.addvacancyMenu}>
						<Link to="/hr/vacancyAdd" className={classes.addvacancyMenuLink}>
							Загальна інформація
						</Link>
						<Link
							to="/hr/vacancyAdd/skills"
							className={classes.addvacancyMenuLink}
						>
							Навички
						</Link>
					</div>
					<div className={classes.addvacancyRoutes}>
						<Switch>
							<Route exact path="/hr/vacancyAdd">
								<CommonInfo />
							</Route>
							<Route path="/hr/vacancyAdd/skills">
								<SkillsInfo isActive={isActive} />
							</Route>
						</Switch>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddVacancy;
