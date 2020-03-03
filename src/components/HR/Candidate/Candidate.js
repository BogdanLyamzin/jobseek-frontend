import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';

import useStyles from './styles';
import Skills from './CandidateSkills';
import Header from './CandidateHeader';
import Information from './Information';
import Summary from './CandidateSummary';
import Button from '../../../shared/Button';
import Education from './CandidateEducation';
import Experience from './CandidateExperience';
import Achievement from './CandidateAchievement';

const user = null;

const OneCandidate = ({ match }) => {
	const classes = useStyles();
	const { id } = match.params;

	useEffect(() => {
		//получить резюме и кандидата
	}, [id]);

	return (
		<Container>
			<div className={classes.candidate}>
				<Header classes={classes} />
				{!user && <Summary classes={classes} />}
				<Skills classes={classes} />
				<Experience classes={classes} />
				<Education classes={classes} />
				<Achievement classes={classes} />
				{!user && <Information classes={classes} />}

				<div className={classes.candidateBtnFlex}>
					{user && (
						<>
							<button
								className={`${classes.candidateBtn} ${classes.candidateBtnRed}`}
							>
								Ігнорувати
							</button>
							<Button text="Запросити" />
						</>
					)}
					{!user && (
						<>
							<button
								className={`${classes.candidateBtn} ${classes.candidateBtnRed}`}
							>
								Відмовити
							</button>
							<Button text="Прийняти" />
						</>
					)}
				</div>
			</div>
		</Container>
	);
};

export default OneCandidate;
