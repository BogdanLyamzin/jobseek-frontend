import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Text from '../../../../shared/Text';
import OneCv from '../SentOffersList/GetOne';
import useStyles from '../CandidateList/styles';

const ReceivedOffersList = ({ vacancy }) => {
	const classes = useStyles();
	const { t } = useTranslation();

	return (
		<>
			{(vacancy && vacancy.received.length === 0) || !vacancy ? (
				<Text>{t('NO_CANDIDATES')}</Text>
			) : null}
			{vacancy &&
				vacancy.received.map(elem => {
					return (
						<Link
							to={`/hr/candidate/received|${elem.cvId}|${elem.vacancyId}`}
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

const mapStateToProps = ({ vacancy }) => ({
	vacancy: vacancy.vacancy,
});

export default connect(mapStateToProps)(ReceivedOffersList);
