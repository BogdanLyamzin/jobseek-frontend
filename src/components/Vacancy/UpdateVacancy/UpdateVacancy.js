import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route, useParams } from 'react-router-dom';

import Skills from './Skills';
import Link from 'shared/Link';
import CommonInfo from './CommonInfo';
import PageWrap from 'shared/PageWrap';
import withLanguage from 'hoc/withLanguage';
import useStyles from '../AddVacancy/styles';
import { UPDATE_LINKS } from 'utils/variables/hrLinks';
import { getOneVacancy, deleteInfo } from 'store/vacancy/actions';

const UpdateVacancy = ({ t, getOneVacancy }) => {
	const classes = useStyles();
	const { id } = useParams();

	useEffect(() => {
		getOneVacancy(id);
		return () => deleteInfo();
	}, [getOneVacancy, id]);

	return (
		<PageWrap title={t('CHANGE_VACANCY')}>
			<div className={classes.addvacancyMenu}>
				{UPDATE_LINKS.map(e => (
					<Link
						key={e.to}
						to={`${e.to}${id}${e.to_f}`}
						className={classes.addvacancyMenuLink}
					>
						{t(e.text)}
					</Link>
				))}
			</div>
			<div className={classes.addvacancyRoutes}>
				<Switch>
					<Route exact path="/hr/updateVacancy/:id" component={CommonInfo} />
					<Route
						path="/hr/updateVacancy/:id/skills"
						render={() => <Skills id={id} />}
					/>
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
