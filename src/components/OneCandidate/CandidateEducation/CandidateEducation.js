import React from 'react';

const CandidateEducation = ({ classes }) => {
	return (
		<div className={classes.candidateBackground}>
			<div className={classes.candidateField}>Освіта</div>
			<div className={classes.candidateBackgroundFlexSkill}>
				<div className={classes.candidateInfoItem}>
					<div className={classes.candidateKey}>Учбовий заклад</div>
					<div
						className={`${classes.candidateProperty} ${classes.marginBottom30}`}
					>
						National Technical University of Ukraine
					</div>
					<div className={classes.candidateKey}>Спеціальність</div>
					<div
						className={`${classes.candidateProperty} ${classes.marginBottom30}`}
					>
						Applied mathematics
					</div>
					<div className={classes.candidateKey}>Ступінь</div>
					<div
						className={`${classes.candidateProperty} ${classes.marginBottom30}`}
					>
						Бакалавр
					</div>
					<div className={classes.candidateKey}>Період навчання</div>
					<div
						className={`${classes.candidateProperty} ${classes.marginBottom30}`}
					>
						Вересень 2011 - Травень 2016
					</div>
				</div>
			</div>
		</div>
	);
};

export default CandidateEducation;
