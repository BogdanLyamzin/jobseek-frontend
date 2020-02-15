import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/context';

function AllReviews({ review }) {
	// const { removeReview } =useContext(Context);
	const { answerUser, likeComment } = useContext(Context);
	const classes = [];

	if (review.clicked) {
		classes.push('liked');
	}
	if (review.mark === 0) review.mark = ' ';
	return (
		<div>
			<div className="reviewList-user">
				<div className="reviewList-user__userData">
					<img className="reviewList-user__userData-photo" src="" alt="" />{' '}
					<p className="reviewList-user__userData-name">{review.userName}</p>
				</div>
				<div className="reviewList-user__position">
					<p>{review.userPosition}</p>
				</div>
				<div className="reviewList-user__date">
					<p>{review.date}</p>
				</div>
			</div>
			<div className="reviewList-user-text">
				<p>{review.reviewText}</p>
			</div>
			<div className="reviewList-footer">
				{/*<p className="reviewList-footer__answer" 
				onClick={removeReview.bind(null, review.id )}>Відповісти</p>*/}
				<p
					className="reviewList-footer__answer"
					onClick={answerUser.bind(null, review.id)}
				>
					Відповісти
				</p>
				<p
					className="reviewList-footer__like"
					onClick={() => {
						likeComment(review.id);
					}}
				>
					<span
						className="reviewList-footer__like__icon"
						role="img"
						aria-label="jsx-a11y/accessible-emoji"
					>
						👍🏽
					</span>
					<span id="likes" className={classes.join(' ')}>
						{review.mark}
					</span>{' '}
					<span className="underline" id="like">
						Підтримати
					</span>
				</p>
			</div>
			<hr className="divider" />
		</div>
	);
}

AllReviews.propTypes = {
	review: PropTypes.object.isRequired,
};

export default AllReviews;
