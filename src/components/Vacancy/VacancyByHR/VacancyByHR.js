import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import useStyles from './styles';
import VacancyItem from './VacancyItem';
import { getVacancyByFilter } from '../../../store/vacancy/actions';

const VacancyByHR = ({ vacancy, getVacancyByFilter, user }) => {
	const classes = useStyles();

	useEffect(() => {
		if (user && user._id) getVacancyByFilter(`hrId=${user._id}`);
	}, [getVacancyByFilter, user]);

	return (
		<div className={classes.vacancyList}>
			{vacancy
				? vacancy.map(elem => {
						return <VacancyItem elem={elem} key={elem._id} />;
				  })
				: null}
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
