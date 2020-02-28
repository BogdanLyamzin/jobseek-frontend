import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import useStyles from './styles';
import VacancyItem from './VacancyItem';
import { getVacancyByFilter } from '../../../store/vacancy/actions';

const VacancyByHR = ({ vacancy, getVacancyByFilter, user }) => {
	const classes = useStyles();
	const { t } = useTranslation();

	useEffect(() => {
		if (user) getVacancyByFilter(`hrId=${user._id}`);
	}, [getVacancyByFilter, user]);

	return (
		<div className={classes.vacancyList}>
			{(vacancy && vacancy.length === 0) || !vacancy ? (
				<div className={classes.vacancyName}>{t('NO_VACANCY')}</div>
			) : null}
			{vacancy &&
				vacancy.length > 0 &&
				vacancy.map(elem => {
					return <VacancyItem elem={elem} key={elem._id} />;
				})}
		</div>
	);
};

const mapStateToProps = ({ vacancy, hr }) => {
	return {
		user: hr.user,
		vacancy: vacancy.vacancyList,
	};
};

const mapDispatchToProps = {
	getVacancyByFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(VacancyByHR);
