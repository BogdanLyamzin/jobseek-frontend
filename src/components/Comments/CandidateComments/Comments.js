import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import AddReview from './AddReview';
import ReviewsList from './ReviewList';
import { getCommentByFilter } from '../../../store/comment/actions';

const CandidateComments = ({ getCommentByFilter }) => {
	useEffect(() => {
		const id = '5e3c343c6f90fc2d0467aef8'; //TEST
		getCommentByFilter(`companyId=${id}`);
	}, [getCommentByFilter]);

	return (
		<>
			<ReviewsList />
			<AddReview />
		</>
	);
};

const mapDispatchToProps = {
	getCommentByFilter,
};

export default connect(null, mapDispatchToProps)(CandidateComments);
