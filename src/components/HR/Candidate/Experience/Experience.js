import React from 'react';

import withLanguage from '../../../../hoc/withLanguage';

const CandidateExperience = ({ classes }) => {
	return (
		<div className={classes.candidateBackground}>
			<div className={classes.candidateField}>Досвід (2-3 роки)</div>
			<div className={classes.candidateBackgroundFlexSkill}>
				<div className={classes.candidateInfoItem}>
					<div className={classes.candidateKey}>Посада</div>
					<div
						className={`${classes.candidateProperty} ${classes.marginBottom30}`}
					>
						Web developer
					</div>
					<div className={classes.candidateKey}>Компанія</div>
					<div
						className={`${classes.candidateProperty} ${classes.marginBottom30}`}
					>
						Storony Travel Company
					</div>
					<div className={classes.candidateKey}>Період роботи</div>
					<div
						className={`${classes.candidateProperty} ${classes.marginBottom30}`}
					>
						Грудень 2018 - зараз працюю тут
					</div>
				</div>
				<div className={classes.candidateInfoItem}>
					<div className={classes.candidateKey}>Посада</div>
					<div
						className={`${classes.candidateProperty} ${classes.marginBottom30}`}
					>
						Frontend developer
					</div>
					<div className={classes.candidateKey}>Компанія</div>
					<div
						className={`${classes.candidateProperty} ${classes.marginBottom30}`}
					>
						Legacyusa.com
					</div>
					<div className={classes.candidateKey}>Період роботи</div>
					<div
						className={`${classes.candidateProperty} ${classes.marginBottom30}`}
					>
						Серпень 2017 - Грудень 2018
					</div>
				</div>
			</div>
		</div>
	);
};

export default withLanguage(CandidateExperience);
