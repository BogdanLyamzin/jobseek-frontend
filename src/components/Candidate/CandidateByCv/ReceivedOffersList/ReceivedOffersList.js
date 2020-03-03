import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import useStyles from '../CandidateList/styles';
import Avatar from '../../../../shared/UserImg';

const ReceivedOffersListArr = [
	{
		_id: '144657457',
		cvName: 'Front-end Developer',
		skills: [
			'HTML',
			'CSS',
			'BEM',
			'JavaScript',
			'React',
			'redux',
			'es6',
			'REST API',
			'git',
			'jQuery',
			'HTML5',
			'CSS3',
			'Bootstrap',
			'AJAX',
			'Jira',
			'Gulp',
			'SCSS',
			'JSON',
			'webpack',
			'Asynchronous JavaScript',
			'ES6+',
			'SASS/SCSS',
		],
		candidateName: 'Ivan',
		candidateLastName: 'Orlov',
		offer: true,
		date: '12.12.19',
	},
	{
		_id: '3546574856',
		cvName: 'Backend Developer',
		skills: [
			'JavaScript',
			'React',
			'redux',
			'es6',
			'TypeScript',
			'REST API',
			'git',
			'Node.js',
			'HTML5',
			'CSS3',
			'Bootstrap',
			'AJAX',
			'Jira',
			'Gulp',
			'SCSS',
			'JSON',
			'webpack',
			'Asynchronous JavaScript',
			'ES6+',
			'SASS/SCSS',
		],
		candidateName: 'Pavel',
		candidateLastName: 'Ivanov',
		offer: true,
		date: '10.10.19',
	},
	{
		_id: '8767345243',
		cvName: 'Java Developer',
		skills: [
			'Java',
			'Angular',
			'es6',
			'TypeScript',
			'REST API',
			'git',
			'Node.js',
			'HTML',
			'CSS',
			'BEM',
			'HTML5',
			'CSS3',
			'Bootstrap',
			'AJAX',
			'Jira',
			'Gulp',
			'SCSS',
			'JSON',
			'webpack',
			'Asynchronous JavaScript',
			'ES6+',
			'SASS/SCSS',
		],
		candidateName: 'Vadym',
		candidateLastName: 'Grischev',
		offer: false,
		date: '04.04.19',
	},
];

const ReceivedOffersList = () => {
	const classes = useStyles();

	return (
		<>
			{/* {(candidates && candidates.length === 0) || !candidates ? (
				<div>Немає кандидатів</div>
			) : null} */}
			{ReceivedOffersListArr.map(elem => {
				return (
					<Link
						to={`/candidate/cv/${elem._id}`}
						key={elem._id}
						className={classes.cv}
					>
						<div className={classes.candidateVacancyName}>{elem.cvName}</div>
						<div className={classes.candidateSkills}>
							{elem.skills.join(', ')}
						</div>
						<div className={classes.candidateFlexBetween}>
							<div className={classes.candidateFlex}>
								<Avatar className={classes.candidatePhoto} />
								<div className={classes.candidateName}>
									{elem.candidateName + ' ' + elem.candidateLastName}
								</div>
							</div>
							<div className={classes.candidateOfferDate}>
								Відгук {elem.date}
							</div>
						</div>
					</Link>
				);
			})}
		</>
	);
};

const mapStateToProps = ({ cv }) => {
	return {
		candidates: cv.candidates,
	};
};

export default connect(mapStateToProps)(ReceivedOffersList);
