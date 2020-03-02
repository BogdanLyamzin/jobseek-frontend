import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import useStyles from './styles';
import Text from '../../../../shared/Text';
import Avatar from '../../../../shared/UserImg';
import getDate from '../../../../utils/getDate';

const CandidateList = ({ candidates }) => {
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
							<Text className={classes.candidateVacancyName}>
								{elem.vacancyName + ' ' + elem.vacancyName}
							</Text>
							<Text className={classes.candidateSkills}>
								{elem.cvSkill.map(a => a.name).join(', ')}
							</Text>
							<div className={classes.candidateFlexBetween}>
								<div className={classes.candidateFlex}>
									<Avatar className={classes.candidatePhoto} />
									<Text className={classes.candidateName}>
										{elem.candidateName + ' ' + elem.candidateLastName}
									</Text>
								</div>
								<Text className={classes.candidateOfferDate}>
									{t('POSTED')} {getDate(elem.date)}
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

export default connect(mapStateToProps)(CandidateList);
