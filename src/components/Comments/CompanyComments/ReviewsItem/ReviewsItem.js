import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import API from 'services/api';
import getDate from 'utils/getDate';
import useStyles from '../../styles';
import toastr from 'utils/toastr/toastrAction';

const ReviewsItem = ({ element, user }) => {
	const classes = useStyles();
	const { t } = useTranslation();

	const addReport = () => {
		API.post('reports', {
			name: user.companyName,
			reviewId: element._id,
			reviewText: element.reviewTxt,
		}).then(data => toastr(data, 'Жалоба успішна'));
	};

	return (
		<div className={classes.reviewItem}>
			<div className={classes.reviewListUser}>
				<div className={classes.reviewListName}>{element.candidateName}</div>
				<button className={classes.report} onClick={addReport}>
					{t('REPORT')}
				</button>
			</div>
			<div className={classes.text}>{element.reviewTxt}</div>
			<div className={classes.reviewListDate}>{getDate(element.date)}</div>
			<hr className={classes.divider} />
		</div>
	);
};

const mapStateToProps = ({ company }) => ({
	user: company.company,
});

export default connect(mapStateToProps)(ReviewsItem);
