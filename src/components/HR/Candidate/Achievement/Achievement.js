import React from 'react';

import withLanguage from 'hoc/withLanguage';

const CandidateAchievement = ({ classes }) => {
	return (
		<div className={classes.candidateBackgroundFlex}>
			<div
				className={`${classes.candidateBackground} ${classes.candidateBackgroundFooter}`}
			>
				<div className={classes.candidateField}>Досягнення</div>
				<div
					className={`${classes.candidateProperty} ${classes.marginBottom30}`}
				>
					oporaua.org - developed and integrated with the backend interface for
					the Ukrainian news site
				</div>
				<div
					className={`${classes.candidateProperty} ${classes.marginBottom30}`}
				>
					tradalaxy.com - participated in the development of an interface for a
					large b2b platform
				</div>
				<div
					className={`${classes.candidateProperty} ${classes.marginBottom30}`}
				>
					badata.net - developed an interface for design agency
				</div>
			</div>
			<div
				className={`${classes.candidateBackground} ${classes.candidateBackgroundFooter}`}
			>
				<div className={classes.candidateField}>Очікування від роботи</div>
				<div
					className={`${classes.candidateProperty} ${classes.marginBottom30}`}
				>
					I would like to continue working in the area of web development.
				</div>
				<div
					className={`${classes.candidateProperty} ${classes.marginBottom30}`}
				>
					My priorities: self-growth, great company culture, learning from
					experts in the field.
				</div>
			</div>
		</div>
	);
};

export default withLanguage(CandidateAchievement);
