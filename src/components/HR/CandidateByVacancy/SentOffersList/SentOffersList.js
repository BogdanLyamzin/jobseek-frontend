import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from '../CandidateList/styles';

const SentOffersListArr = [
	{
		_id: '144657457',
		vacancyName: 'Front-end Developer',
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
		vacancyName: 'Backend Developer',
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
		vacancyName: 'Java Developer',
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

const SentOffersList = () => {
	const classes = useStyles();

	return SentOffersListArr.map(elem => {
		return (
			<Link
				to="/hr/oneCandidate"
				key={elem._id}
				id={elem._id}
				className={classes.candidate}
			>
				<div className={classes.candidateFlexBetween}>
					<div className={classes.candidateVacancyName}>{elem.vacancyName}</div>
					<div className={classes.candidateOfferCheck}>
						{elem.offer ? 'Прийнято' : 'В очікуванні'}
					</div>
				</div>
				<div className={classes.candidateSkills70}>
					{elem.skills.join(', ')}
				</div>
				<div className={classes.candidateFlexBetween}>
					<div className={classes.candidateFlex}>
						<div className={classes.candidatePhoto}></div>
						<div className={classes.candidateName}>
							{elem.candidateName + ' ' + elem.candidateLastName}
						</div>
					</div>
					<div className={classes.candidateOfferDate}>
						Запрошено {elem.date}
					</div>
				</div>
			</Link>
		);
	});
};

export default SentOffersList;
