import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import getDisplayName from '../utils/getDisplayName';
import { getCategoryByFilter } from '../store/admin/actions/categoryActions';

const withCategory = Component => {
	const WithCategory = ({ categoryList, getCategoryByFilter, ...props }) => {
		const [id, setId] = useState(null);
		const [categories, setCategory] = useState(null);

		useEffect(() => {
			if (id) getCategoryByFilter(`parentId=${id}`);
		}, [getCategoryByFilter, id]);

		useEffect(() => {
			setCategory(categoryList);
		}, [categoryList]);

		return <Component setId={setId} categories={categories} {...props} />;
	};

	WithCategory.displayName = `WithCategory(${getDisplayName(Component)})`;

	const mapStateToProps = ({ admin }) => ({
		categoryList: admin.categoryChange,
	});

	return connect(mapStateToProps, { getCategoryByFilter })(WithCategory);
};

export default withCategory;
