import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import getDisplayName from 'utils/getDisplayName';
import { deleteVacancy, getVacancyByFilter } from 'store/vacancy/actions';

const withVacancies = (Component, user) => {
	const WithVacancies = ({
		vacancy,
		deleteVacancy,
		getVacancyByFilter,
		...props
	}) => {
		const [id, setId] = useState(null);

		useEffect(() => {
			if (id) getVacancyByFilter(`${user}=${id}`);
		}, [id, getVacancyByFilter]);

		const deleteVacancies = id => {
			deleteVacancy(id);
		};

		return (
			<Component
				{...props}
				setId={setId}
				vacancy={vacancy}
				deleteVacancies={deleteVacancies}
			/>
		);
	};

	WithVacancies.displayName = `WithVacancies(${getDisplayName(Component)})`;

	const mapStateToProps = ({ vacancy }) => ({
		vacancy: vacancy.vacancyList,
	});

	const mapDispatchToProps = {
		deleteVacancy,
		getVacancyByFilter,
	};

	return connect(mapStateToProps, mapDispatchToProps)(WithVacancies);
};

export default withVacancies;
