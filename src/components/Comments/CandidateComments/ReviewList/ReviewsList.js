import React from 'react';
import { connect } from 'react-redux';

import ReviewsItem from './ReviewsItem';

const ReviewsList = ({ comments }) => {
	return comments
		? comments.map(element => {
				return <ReviewsItem element={element} key={element._id} />;
		  })
		: null;
};

const mapStateToProps = ({ comment }) => {
	return {
		comments: comment.comments,
	};
};

export default connect(mapStateToProps)(ReviewsList);
