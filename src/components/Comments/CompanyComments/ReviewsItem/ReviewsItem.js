import React from 'react';

import useStyles from '../../styles';
import getDate from '../../../../utils/getDate';

const ReviewsItem = ({ element }) => {
	const classes = useStyles();
	return (
		<div className={classes.reviewItem}>
			<div className={classes.reviewListUser}>
				<div className={classes.reviewListName}>{element.candidateName}</div>
				<div className={classes.reviewListDate}>{getDate(element.date)}</div>
			</div>
			<div className={classes.text}>{element.reviewTxt}</div>
			<hr className={classes.divider} />
		</div>
	);
};

export default ReviewsItem;
