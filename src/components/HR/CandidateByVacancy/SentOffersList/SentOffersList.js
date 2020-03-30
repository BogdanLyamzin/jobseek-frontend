import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import OneCv from './GetOne';
import Text from '../../../../shared/Text';
import useStyles from '../CandidateList/styles';
import withLanguage from '../../../../hoc/withLanguage';

const SentOffersList = ({ t, vacancy }) => {
	const classes = useStyles();

	return (
		<>
			{(vacancy && vacancy.sent.length === 0) || !vacancy ? (
				<Text>{t('NO_CANDIDATES')}</Text>
			) : null}
			{vacancy &&
				vacancy.sent.map(elem => (
					<Link
						to={`/hr/candidate/sent|${elem.cvId}|${elem.vacancyId}`}
						key={elem.date}
						className={classes.candidate}
					>
						<OneCv
							classes={classes}
							url={elem.cvId}
							date={elem.date}
							status={elem.status}
						/>
					</Link>
				))}
		</>
	);
};

const mapStateToProps = ({ vacancy }) => ({
	vacancy: vacancy.vacancy,
});

export default compose(connect(mapStateToProps), withLanguage)(SentOffersList);
