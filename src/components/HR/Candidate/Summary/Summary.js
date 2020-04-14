import React from 'react';
import { connect } from 'react-redux';

import Status from '../CheckStatus';
import Text from 'shared/Text';
import Avatar from 'shared/UserImg';
import withLanguage from 'hoc/withLanguage';
import getUserName from 'utils/getUserName';
import emplText from 'utils/variables/emplTypeText';

const Summary = ({ t, cv, cvID, classes, candidate, vacancyID }) => (
	<div className={classes.candidateBackground}>
		<div className={classes.candidateImgFlex}>
			<Avatar className={classes.candidateImg} />
			<div>
				<Status cvID={cvID} vacancyID={vacancyID}>
					<Text className={classes.candidateName}>
						{getUserName(candidate)}
					</Text>
				</Status>
				<Text className={classes.candidateLocation}>
					{candidate && `${candidate.country}, ${candidate.city}`}
				</Text>
			</div>
		</div>
		<div className={classes.candidateBackgroundFlex}>
			<div className={classes.candidateBackgroundItem}>
				<div className={classes.candidateInfoFlex}>
					<Text
						className={`${classes.candidateKey} ${classes.candidateInfoItem}`}
					>
						{t('EMPLOYMENT_TYPE')}
					</Text>
					<Text
						className={`${classes.candidateProperty} ${classes.candidateInfoItem}`}
					>
						{cv && emplText(cv.employmentType, t)}
					</Text>
				</div>
				<div className={classes.candidateInfoFlex}>
					<Text
						className={`${classes.candidateKey} ${classes.candidateInfoItem}`}
					>
						Можливість переїзду
					</Text>
					<Text
						className={`${classes.candidateProperty} ${classes.candidateInfoItem}`}
					>
						Переїзд в інше місто України???
					</Text>
				</div>
				<div className={classes.candidateInfoFlex}>
					<Text
						className={`${classes.candidateKey} ${classes.candidateInfoItem}`}
					>
						{t('SALARY')}
					</Text>
					<Text
						className={`${classes.candidateProperty} ${classes.candidateInfoItem}`}
					>
						{cv && cv.salary} USD
					</Text>
				</div>
			</div>
			<div className={classes.candidateBackgroundItem}>
				<Status cvID={cvID} vacancyID={vacancyID}>
					<div className={classes.candidateInfoFlex}>
						<Text
							className={`${classes.candidateKey} ${classes.candidateInfoItem}`}
						>
							{t('SOCIAL_LINK')}
						</Text>
						<div className={classes.candidateInfoItem}>
							<Text className={classes.candidateProperty}>
								{candidate ? candidate.facebookLink : ''}
							</Text>
							<Text className={classes.candidateProperty}>
								{candidate ? candidate.linkedinLink : ''}
							</Text>
						</div>
					</div>
					<div className={classes.candidateInfoFlex}>
						<Text
							className={`${classes.candidateKey} ${classes.candidateInfoItem}`}
						>
							URL (Git Hub)
						</Text>
						<Text
							className={`${classes.candidateProperty} ${classes.candidateInfoItem}`}
						>
							{candidate ? candidate.repositoryLink : ''}
						</Text>
					</div>
				</Status>
			</div>
		</div>
	</div>
);

const mapStateToProps = ({ candidate, cv }) => ({
	cv: cv.cv,
	candidate: candidate.user,
});

export default connect(mapStateToProps)(withLanguage(Summary));
