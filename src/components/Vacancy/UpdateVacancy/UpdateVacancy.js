import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Switch, Route } from 'react-router-dom';

import CommonInfo from './CommonInfo';
import SkillsInfo from './SkillsInfo';
import Link from '../../../shared/Link';
import useStyles from '../AddVacancy/styles';
import PageWrap from '../../../shared/PageWrap';
import { getOneVacancy, deleteInfo } from '../../../store/vacancy/actions';

const UpdateVacancy = ({ match, getOneVacancy }) => {
	const classes = useStyles();
	const { t } = useTranslation();
	const { id } = match.params;

	useEffect(() => {
		getOneVacancy(id);
		return () => {
			deleteInfo();
		};
	}, [getOneVacancy, id]);

	return (
		<PageWrap title={t('CHANGE_VACANCY')}>
			<div className={classes.addvacancyMenu}>
				<Link
					to={`/hr/updateVacancy/${id}`}
					className={classes.addvacancyMenuLink}
				>
					{t('COMMON_INFO')}
				</Link>
				<Link
					to={`/hr/updateVacancy/${id}/skills`}
					className={classes.addvacancyMenuLink}
				>
					{t('SKILLS')}
				</Link>
			</div>
			<div className={classes.addvacancyRoutes}>
				<Switch>
					<Route exact path="/hr/updateVacancy/:id" component={CommonInfo} />
					<Route path="/hr/updateVacancy/:id/skills">
						<SkillsInfo id={id} />
					</Route>
				</Switch>
			</div>
		</PageWrap>
	);
};

const mapDispatchToProps = {
	deleteInfo,
	getOneVacancy,
};

export default connect(null, mapDispatchToProps)(UpdateVacancy);
