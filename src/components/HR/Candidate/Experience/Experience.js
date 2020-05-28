import React from 'react';

import Text from 'shared/Text';
import withLanguage from 'hoc/withLanguage';

const TEST = [
	{
		company: 'Legacyusa.com',
		vacancyName: 'Frontend developer',
		experience: 'Серпень 2017 - Грудень 2018',
	},
	{
		company: 'Storony Travel Company',
		vacancyName: 'Web developer',
		experience: 'Грудень 2018 - зараз працюю тут',
	},
];

const CandidateExperience = ({ t, classes }) => {
	return (
		<div className={classes.candidateBackground}>
			<Text className={classes.candidateField}>{`${t('EXPERIENCE')} (2-3 ${t('YEARS')})`}</Text>
			<div className={classes.candidateBackgroundFlexSkill}>
				{TEST.map(e => (
					<div className={classes.candidateInfoItem} key={e.company}>
						<Text className={classes.candidateKey}>{t('VACANCY')}</Text>
						<Text className={`${classes.candidateProperty} ${classes.marginBottom30}`}>
							{e.vacancyName}
						</Text>
						<Text className={classes.candidateKey}>{t('COMPANY_NAME')}</Text>
						<Text className={`${classes.candidateProperty} ${classes.marginBottom30}`}>
							{e.company}
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

export default withLanguage(CandidateExperience);
