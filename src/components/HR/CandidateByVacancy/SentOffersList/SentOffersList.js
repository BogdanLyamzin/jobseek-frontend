import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Text from '../../../../shared/Text';
import useStyles from '../CandidateList/styles';
import Avatar from '../../../../shared/UserImg';
import getDate from '../../../../utils/getDate';

const SentOffersList = ({ candidates }) => {
	const classes = useStyles();
	const { t } = useTranslation();

	return (
		<>
			{(candidates && candidates.length === 0) || !candidates ? (
				<Text>{t('NO_CANDIDATES')}</Text>
			) : null}
			{candidates &&
				candidates.map(elem => {
					return (
						<Link
							to={`/hr/candidate/${elem._id}`}
							key={elem._id}
							className={classes.candidate}
						>
							<div className={classes.candidateFlexBetween}>
								<Text className={classes.candidateVacancyName}>
									{elem.vacancyName + ' vacancyName'}
								</Text>
								<Text className={classes.candidateOfferCheck}>
									{elem.offer ? 'Прийнято' : 'В очікуванні'}
								</Text>
							</div>
							<Text className={classes.candidateSkills70}>
								{t('SKILLS')}: {elem.cvSkill.map(a => a.name).join(', ')}
							</Text>
							<div className={classes.candidateFlexBetween}>
								<div className={classes.candidateFlex}>
									<Avatar className={classes.candidatePhoto} />
									<Text className={classes.candidateName}>
										{t('SEE_MORE')}...
									</Text>
								</div>
								<Text className={classes.candidateOfferDate}>
									Запрошено {getDate(elem.date)}
								</Text>
							</div>
						</Link>
					);
				})}
		</>
	);
};

const mapStateToProps = ({ vacancy }) => {
	return {
		candidates: vacancy.candidates,
	};
};

export default connect(mapStateToProps)(SentOffersList);
