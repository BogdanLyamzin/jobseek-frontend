import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import useStyles from './styles';
import withVacancies from '../../../hoc/withVacancies';
import VacancyByCompanyItem from './VacancyByCompanyItem/VacancyByCompanyItem';

function VacancyByCompany({ setId, vacancy, user }) {
	const classes = useStyles();
	const { t } = useTranslation();

	useEffect(() => {
		if (user) setId(user._id);
	}, [user]);

	return (
		<div
			className={`${classes.vacancyList} ${
				vacancy && vacancy.length >= 2 ? classes.list : classes.list1
			}`}
		>
			{vacancy && vacancy.length === 0 && (
				<div className={classes.vacancyName}>{t('NO_VACANCY')}</div>
			)}
			{vacancy &&
				vacancy.length > 0 &&
				vacancy.map(elem => {
					return <VacancyByCompanyItem {...elem} key={elem._id} />;
				})}
		</div>
	);
}

const mapStateToProps = ({ company }) => ({
	user: company.company,
});

export default connect(mapStateToProps)(
	withVacancies(VacancyByCompany, 'companyId'),
);
