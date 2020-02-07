import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Switch, Route } from 'react-router-dom';

import CommonInfo from './CommonInfo';
import SkillsInfo from './SkillsInfo';
import { getOneVacancy } from '../../../store/vacancy/actions';

const UpdateVacancy = ({ match, getOneVacancy }) => {
	const { id } = match.params;

	useEffect(() => {
		getOneVacancy(id);
	}, [getOneVacancy, id]);

	return (
		<div className="addvacancy container">
			<div className="vacancy-align-center">
				<div className="hr-caption">Змінити вакансію</div>
			</div>

			<div className="addvacancy-main">
				<div className="addvacancy-menu">
					<Link to={`/admin/updateVacancy/${id}`} className="addvacancy-menu-link">
						Загальна інформація
					</Link>
					<Link
						to={`/updateVacancy/${id}/skills`}
						className="addvacancy-menu-link"
					>
						Навички
					</Link>
				</div>
				<div className="addvacancy-routes">
					<Switch>
						<Route exact path="/admin/updateVacancy/:id" component={CommonInfo} />
						<Route path="/admin/updateVacancy/:id/skills">
							<SkillsInfo id={id} />
						</Route>
					</Switch>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = {
	getOneVacancy,
};

export default connect(null, mapDispatchToProps)(UpdateVacancy);
