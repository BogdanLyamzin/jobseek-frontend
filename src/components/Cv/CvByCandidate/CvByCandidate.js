import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import useStyles from './styles';
import CvItem from './CvItem';
import { getCvByFilter } from '../../../store/cv/actions';

const CvByCandidate = ({ cv, getCvByFilter, user }) => {
	const classes = useStyles();
	const { t } = useTranslation();
	useEffect(() => {
		if (user) {
			//getOneCv(user._id);
			getCvByFilter('userId=5e5d047ce29d9a26a8a5992b');
		}
	}, [getCvByFilter, user]);

	return (
		<div className={classes.vacancyList}>
			{(cv && cv.length === 0) || !cv ? (
				<div className={classes.vacancyName}>{t('NO_VACANCY')}</div>
			) : null}
			{cv &&
				cv.length > 0 &&
				cv.map(elem => {
					return <CvItem elem={elem} key={elem._id} />;
				})}
		</div>
	);
};

const mapStateToProps = ({ cv, candidate }) => {
	return {
		user: candidate.user,
		cv: cv.cvList,
	};
};

const mapDispatchToProps = {
	getCvByFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(CvByCandidate);
