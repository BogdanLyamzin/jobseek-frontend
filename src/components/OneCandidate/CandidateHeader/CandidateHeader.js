import React from 'react';
import GetAppIcon from '@material-ui/icons/GetApp';

const CandidateHeader = ({ classes }) => {
	return (
		<div className={classes.candidateHead}>
			<div className={classes.candidateVacancyNames}>
				Full Stack Javascript Developer
			</div>
			<div className={classes.candidateDates}>
				<div className={classes.candidateDate}>Опубліковано 21.09.19</div>
				<div className={`${classes.candidateDate} ${classes.bold}`}>
					Запрошено 21.09.19
				</div>
				<a href="nothing" className={classes.candidateDate}>
					<GetAppIcon />
					Завантажити
				</a>
			</div>
		</div>
	);
};

export default CandidateHeader;
