import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import getDisplayName from 'utils/getDisplayName';
import { getVacancyByFilter } from 'store/admin/actions/vacancyTemplateActions';

const withVacancyName = Component => {
	const WithVacancyName = ({ vacancyList, getVacancyByFilter, ...props }) => {
		const [id, setId] = useState(null);
		const [vacancy, setVacancy] = useState(null);

		useEffect(() => {
			if (id) getVacancyByFilter(`professionId=${id}`);
		}, [getVacancyByFilter, id]);

		useEffect(() => {
			setVacancy(vacancyList);
		}, [vacancyList]);

		return <Component setId={setId} vacancy={vacancy} {...props} />;
	};

	WithVacancyName.displayName = `WithVacancyName(${getDisplayName(Component)})`;

	const mapStateToProps = ({ admin }) => ({
		vacancyList: admin.vacancyChange,
	});

	return connect(mapStateToProps, { getVacancyByFilter })(WithVacancyName);
};

export default withVacancyName;
