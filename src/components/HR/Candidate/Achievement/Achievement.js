import React from 'react';

import Text from 'shared/Text';
import withLanguage from 'hoc/withLanguage';

const TEST = {
	ACHIEVEMENT: [
		{
			text: 'oporaua.org - developed and integrated with the backend interface for news site',
		},
		{
			text: 'tradalaxy.com - participated in the development of an interface for b2b platform',
		},
		{
			text: 'badata.net - developed an interface for design agency',
		},
	],
	EXPECTATIONS: [
		{
			text: 'I would like to continue working in the area of web development.',
		},
		{
			text: 'My priorities: self-growth, great company culture, learning from experts in the field',
		},
	],
};

const CandidateAchievement = ({ t, classes }) => {
	return (
		<div className={classes.candidateBackgroundFlex}>
			<div className={`${classes.candidateBackground} ${classes.candidateBackgroundFooter}`}>
				<Text className={classes.candidateField}>{t('ACHIEVEMENT')}</Text>
				{TEST.ACHIEVEMENT.map(e => (
					<Text key={e.text} className={`${classes.candidateProperty} ${classes.marginBottom30}`}>
						{e.text}
					</Text>
				))}
			</div>
			<div className={`${classes.candidateBackground} ${classes.candidateBackgroundFooter}`}>
				<Text className={classes.candidateField}>{t('EXPECTATIONS')}</Text>
				{TEST.EXPECTATIONS.map(e => (
					<Text key={e.text} className={`${classes.candidateProperty} ${classes.marginBottom30}`}>
						{e.text}
					</Text>
				))}
			</div>
		</div>
	);
};

export default withLanguage(CandidateAchievement);
