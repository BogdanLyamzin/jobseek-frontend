import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import useStyles from './styles';
import Text from '../../../../shared/Text';
import Avatar from '../../../../shared/UserImg';
import getDate from '../../../../utils/getDate';
import arrToStringSkill from '../../../../utils/transformType/arrToStringSkills';

const CandidateList = ({ candidates, id }) => {
	const classes = useStyles();
	const { t } = useTranslation();

	return (
		<>
			{(candidates && candidates.length === 0) || !candidates ? (
				<Text>{t('NO_CANDIDATES')}</Text>
			) : null}
			{candidates &&
				candidates.map(elem => (
					<Link
						to={`/hr/candidate/common|${elem._id}|${id}`}
						key={elem._id}
						className={classes.candidate}
					>
						<Text className={classes.candidateVacancyName}>
							{t('VACANCY') + ': ' + elem.vacancyName}
						</Text>
						<Text className={classes.candidateSkills}>
							{t('SKILLS') + ': ' + arrToStringSkill(elem.cvSkill)}
						</Text>
						<div className={classes.candidateFlexBetween}>
							<div className={classes.candidateFlex}>
								<Avatar className={classes.candidatePhoto} />
								<Text className={classes.candidateName}>
									{t('SEE_MORE') + '...'}
								</Text>
							</div>
							<Text className={classes.candidateOfferDate}>
								{t('POSTED') + ' ' + getDate(elem.date)}
							</Text>
						</div>
					</Link>
				))}
		</>
	);
};

const mapStateToProps = ({ vacancy }) => ({
	candidates: vacancy.candidates,
});

export default connect(mapStateToProps)(CandidateList);
