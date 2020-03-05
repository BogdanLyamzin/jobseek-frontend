import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ReviewsItem from './ReviewsItem';
import { getCommentByFilter } from '../../../store/comment/actions';

const CompanyComments = ({ user, getCommentByFilter, comments }) => {
	useEffect(() => {
		if (user) getCommentByFilter(`companyId=${user._id}`);
	}, [getCommentByFilter, user]);

	return comments
		? comments.map(elem => {
				return <ReviewsItem element={elem} key={elem._id} />;
		  })
		: null;
};

const mapStateToProps = ({ company, comment }) => {
	return {
		user: company.company,
		comments: comment.comments,
	};
};

const mapDispatchToProps = {
	getCommentByFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyComments);
