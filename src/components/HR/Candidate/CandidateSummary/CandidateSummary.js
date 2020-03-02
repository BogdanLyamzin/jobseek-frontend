import React from 'react';

import Avatar from '../../../../shared/UserImg';
const user = null;

const CandidateSummary = ({ classes }) => {
	return (
		<div className={classes.candidateBackground}>
			<div className={classes.candidateImgFlex}>
				{user && <Avatar className={classes.candidateImg} />}
				{!user && <Avatar className={classes.candidateImg} />}
				<div>
					<div className={classes.candidateName}>Ivan Orlov</div>
					<div className={classes.candidateLocation}>Ukraine, Kyiv</div>
				</div>
			</div>
			<div className={classes.candidateBackgroundFlex}>
				<div className={classes.candidateBackgroundItem}>
					<div className={classes.candidateInfoFlex}>
						<div
							className={`${classes.candidateKey} ${classes.candidateInfoItem}`}
						>
							Форма зайнятості
						</div>
						<div
							className={`${classes.candidateProperty} ${classes.candidateInfoItem}`}
						>
							Робота в офісі на повний день
						</div>
					</div>
					<div className={classes.candidateInfoFlex}>
						<div
							className={`${classes.candidateKey} ${classes.candidateInfoItem}`}
						>
							Можливість переїзду
						</div>
						<div
							className={`${classes.candidateProperty} ${classes.candidateInfoItem}`}
						>
							Переїзд в інше місто України
						</div>
					</div>
					<div className={classes.candidateInfoFlex}>
						<div
							className={`${classes.candidateKey} ${classes.candidateInfoItem}`}
						>
							Бажана зарплата
						</div>
						<div
							className={`${classes.candidateProperty} ${classes.candidateInfoItem}`}
						>
							1000 USD
						</div>
					</div>
				</div>
				<div className={classes.candidateBackgroundItem}>
					<div className={classes.candidateInfoFlex}>
						<div
							className={`${classes.candidateKey} ${classes.candidateInfoItem}`}
						>
							Соціаньні мережі
						</div>
						<a
							href="nothing"
							className={`${classes.candidateProperty} ${classes.candidateInfoItem}`}
						>
							facebook
						</a>
					</div>
					<div className={classes.candidateInfoFlex}>
						<div
							className={`${classes.candidateKey} ${classes.candidateInfoItem}`}
						>
							URL (Git Hub)
						</div>
						<a
							href="nothing"
							className={`${classes.candidateProperty} ${classes.candidateInfoItem}`}
						>
							https://github.com/profile
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CandidateSummary;
