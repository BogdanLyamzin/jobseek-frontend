import React from 'react';

const Information = ({ classes }) => {
	return (
		<div className={classes.candidateBackground}>
			<div className={classes.candidateField}>Контакти</div>
			<div className={classes.candidateBackgroundFlex}>
				<div className={classes.candidateBackgroundFooter}>
					<div className={classes.candidateInfoFlex}>
						<div
							className={`${classes.candidateKey} ${classes.candidateInfoItem}`}
						>
							e-mail:
						</div>
						<div
							className={`${classes.candidateProperty} ${classes.candidateInfoItem}`}
						>
							i.orlov@gmail.com
						</div>
					</div>
				</div>
				<div className={classes.candidateBackgroundFooter}>
					<div className={classes.candidateInfoFlex}>
						<div
							className={`${classes.candidateKey} ${classes.candidateInfoItem}`}
						>
							Phone:
						</div>
						<div
							className={`${classes.candidateProperty} ${classes.candidateInfoItem}`}
						>
							067 25 87 574
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Information;
