import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import getDisplayName from '../utils/getDisplayName';
import { getCategoryByFilter } from '../store/admin/actions/categoryActions';

const withCategory = Component => {
	return function WithCategory(props) {
		const dispatch = useDispatch();
		const [id, setId] = useState(null);
		const [categories, setCategory] = useState(null);
		const categoryList = useSelector(state => state.admin.categoryChange);

		useEffect(() => {
			if (id) dispatch(getCategoryByFilter(`parentId=${id}`));
		}, [dispatch, getCategoryByFilter, id]);

		useEffect(() => {
			setCategory(categoryList);
		}, [categoryList]);

		WithCategory.displayName = `WithCategory(${getDisplayName(Component)})`;

		return <Component setId={setId} categories={categories} {...props} />;
	};
};

export default withCategory;
