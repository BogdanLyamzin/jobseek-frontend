import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import OneCv from './GetOne';
import Text from '../../../../shared/Text';
import useStyles from '../CandidateList/styles';

const SentOffersList = ({ vacancy }) => {
	const classes = useStyles();
	const { t } = useTranslation();

	return (
		<>
			{(vacancy && vacancy.sent.length === 0) || !vacancy ? (
				<Text>{t('NO_CANDIDATES')}</Text>
			) : null}
			{vacancy &&
				vacancy.sent.map(elem => {
					return (
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
					);
				})}
		</>
	);
};

const mapStateToProps = ({ vacancy }) => {
	return {
		vacancy: vacancy.vacancy,
	};
};

export default connect(mapStateToProps)(SentOffersList);
