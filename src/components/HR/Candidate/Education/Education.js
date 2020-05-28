import React from 'react';

import Text from 'shared/Text';
import withLanguage from 'hoc/withLanguage';

const TEST = [
	{
		institution: 'National Technical University of Ukraine',
		speciality: 'Applied mathematics',
		degree: 'Бакалавр',
		experience: 'Вересень 2011 - Травень 2016',
	},
];

const CandidateEducation = ({ t, classes }) => {
	return (
		<div className={classes.candidateBackground}>
			<Text className={classes.candidateField}>{t('EDUCATION')}</Text>
			<div className={classes.candidateBackgroundFlexSkill}>
				{TEST.map(e => (
					<div key={e.institution} className={classes.candidateInfoItem}>
						<Text className={classes.candidateKey}>{t('EDUCAT_INSTITU')}</Text>
						<Text className={`${classes.candidateProperty} ${classes.marginBottom30}`}>
							{e.institution}
						</Text>
						<Text className={classes.candidateKey}>{t('SPECIALITY')}</Text>
						<Text className={`${classes.candidateProperty} ${classes.marginBottom30}`}>
							{e.speciality}
						</Text>
						<Text className={classes.candidateKey}>{t('DEGREE')}</Text>
						<Text className={`${classes.candidateProperty} ${classes.marginBottom30}`}>
							{e.degree}
						</Text>
						<Text className={classes.candidateKey}>{t('PERIOD')}</Text>
						<Text className={`${classes.candidateProperty} ${classes.marginBottom30}`}>
							{e.experience}
						</Text>
					</div>
				))}
			</div>
		</div>
	);
};

export default withLanguage(CandidateEducation);
