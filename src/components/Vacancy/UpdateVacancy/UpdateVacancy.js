import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Link from 'shared/Link';
import CommonInfo from './CommonInfo';
import SkillsInfo from './SkillsInfo';
import PageWrap from 'shared/PageWrap';
import withLanguage from 'hoc/withLanguage';
import useStyles from '../AddVacancy/styles';
import { getOneVacancy, deleteInfo } from 'store/vacancy/actions';

const UpdateVacancy = ({ t, match, getOneVacancy }) => {
	const classes = useStyles();
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

export default compose(
	connect(null, mapDispatchToProps),
	withLanguage,
)(UpdateVacancy);
