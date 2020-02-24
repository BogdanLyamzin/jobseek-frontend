import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const candidateListArr = [
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
	},
];

const CandidateList = () => {
	const classes = useStyles();

	return candidateListArr.map(elem => {
		return (
			<Link
				to="/hr/oneCandidate"
				key={elem._id}
				id={elem._id}
				className={classes.candidate}
			>
				<div className={classes.candidateVacancyName}>{elem.vacancyName}</div>
				<div className={classes.candidateSkills}>{elem.skills.join(', ')}</div>
				<div className={classes.candidateFlex}>
					<div className={classes.candidatePhoto}></div>
					<div className={classes.candidateName}>
						{elem.candidateName + ' ' + elem.candidateLastName}
					</div>
				</div>
			</Link>
		);
	});
};

export default CandidateList;
