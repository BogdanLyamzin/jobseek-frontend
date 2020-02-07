import React from 'react';
import { Link } from 'react-router-dom';

const ReceivedOffersListArr = [
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

const ReceivedOffersList = () => {
	return ReceivedOffersListArr.map(elem => {
		return (
			<Link
				to="/oneCandidate"
				key={elem._id}
				id={elem._id}
				className="candidate"
			>
				<div className="candidate-vacancyName">{elem.vacancyName}</div>
				<div className="candidate-skills">{elem.skills.join(', ')}</div>
				<div className="candidate-flex candidate-flex-between">
					<div className="candidate-flex">
						<div className="candidate-photo"></div>
						<div className="candidate-name">
							{elem.candidateName + ' ' + elem.candidateLastName}
						</div>
					</div>
					<div className="candidate-offer-date">Відгук {elem.date}</div>
				</div>
			</Link>
		);
	});
};

export default ReceivedOffersList;
