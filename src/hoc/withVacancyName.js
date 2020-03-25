import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import getDisplayName from '../utils/getDisplayName';
import { getVacancyByFilter } from '../store/admin/actions/vacancyTemplateActions';

const withVacancyName = Component => {
	return function WithVacancyName(props) {
		const dispatch = useDispatch();
		const [id, setId] = useState(null);
		const [vacancy, setVacancy] = useState(null);
		const vacancyList = useSelector(state => state.admin.vacancyChange);

		useEffect(() => {
			if (id) dispatch(getVacancyByFilter(`professionId=${id}`));
		}, [dispatch, getVacancyByFilter, id]);

		useEffect(() => {
			setVacancy(vacancyList);
		}, [vacancyList]);

		WithVacancyName.displayName = `WithVacancyName(${getDisplayName(
			Component,
		)})`;

		return <Component setId={setId} vacancy={vacancy} {...props} />;
	};
};

export default withVacancyName;
