import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import useStyles from './styles';
import Button from 'shared/Button';
import { newComment } from 'store/comment/actions';

const Review = ({ newComment, user }) => {
	const classes = useStyles();
	const { t } = useTranslation();
	const [value, setValue] = useState('');

	const addReview = () => {
		//TEST
		newComment({
			companyId: user._id,
			candidateId: '5e3c361c657e122a841e88e4',
			candidateName: 'Aleksey Nazarov',
			reviewTxt: value,
		});
		setValue('');
	};

	return (
		<div className={classes.review}>
			<div className={classes.reviewComment}>{t('YOUR_REVIEW')}</div>
			<textarea
				className={classes.reviewTextarea}
				name="review"
				value={value}
				onChange={event => setValue(event.target.value)}
				rows="10"
			></textarea>
			<div className={classes.reviewFooter}>
				<Button text={t('POST')} click={() => addReview()} />
			</div>
		</div>
	);
};

const mapStateToProps = ({ company }) => {
	return {
		user: company.company,
	};
};

const mapDispatchToProps = {
	newComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Review);
