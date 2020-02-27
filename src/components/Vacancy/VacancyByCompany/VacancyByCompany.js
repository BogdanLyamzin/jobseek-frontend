import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import VacancyByCompanyItem from './VacancyByCompanyItem/VacancyByCompanyItem';
import { getVacancyByFilter } from '../../../store/vacancy/actions';
import useStyles from '../VacancyByHR/styles';

function VacancyByCompany({ vacancy, getVacancyByFilter, user }) {
	const classes = useStyles();
	const { t } = useTranslation();
	useEffect(() => {
		if (user && user._id) getVacancyByFilter(`companyId=${user._id}`);
	}, [getVacancyByFilter, user]);

	return (
		<div
			className={`${classes.vacancyList} ${
				vacancy && vacancy.length >= 2 ? classes.list : classes.list1
			}`}
		>
			{vacancy && vacancy.length === 0 && (
				<div className={classes.vacancyName}>{t('NO_VACANCY')}</div>
			)}
			{vacancy && vacancy.length > 0
				? vacancy.map(elem => {
						return <VacancyByCompanyItem {...elem} key={elem._id} />;
				  })
				: null}
		</div>
	);
}

const mapDispatchToProps = {
	getVacancyByFilter,
};

const mapStateToProps = ({ vacancy, company }) => {
	return {
		user: company.company,
		vacancy: vacancy.vacancyList,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(VacancyByCompany);
