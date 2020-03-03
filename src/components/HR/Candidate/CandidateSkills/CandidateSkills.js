import React from 'react';

const CandidateSkills = ({ classes }) => {
	return (
		<div className={classes.candidateBackground}>
			<div className={classes.candidateField}>Навички</div>
			<div className={classes.candidateBackgroundFlexSkill}>
				<div className={classes.candidateInfoItem}>
					<div className={classes.candidateKey}>English level</div>
					<div className={classes.candidateProperty}>B1 (intermediate)</div>
				</div>
				<div className={classes.candidateInfoItem}>
					<div className={classes.candidateKey}>HTML</div>
					<div className={classes.candidateProperty}>1-2 years</div>
				</div>
				<div className={classes.candidateInfoItem}>
					<div className={classes.candidateKey}>CSS</div>
					<div className={classes.candidateProperty}>1-2 years</div>
				</div>
				<div className={classes.candidateInfoItem}>
					<div className={classes.candidateKey}>AJAX</div>
					<div className={classes.candidateProperty}>3-4 years</div>
				</div>
				<div className={classes.candidateInfoItem}>
					<div className={classes.candidateKey}>JavaScript</div>
					<div className={classes.candidateProperty}>3-4 years</div>
				</div>
				<div className={classes.candidateInfoItem}>
					<div className={classes.candidateKey}>TypeScript</div>
					<div className={classes.candidateProperty}>3-4 years</div>
				</div>
				<div className={classes.candidateInfoItem}>
					<div className={classes.candidateKey}>PHP</div>
					<div className={classes.candidateProperty}>3-4 years</div>
				</div>
				<div className={classes.candidateInfoItem}>
					<div className={classes.candidateKey}>React</div>
					<div className={classes.candidateProperty}>3-4 years</div>
				</div>
			</div>
		</div>
	);
};

export default CandidateSkills;
