import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import API from '../../services/api';
import VacancySkills from './VacancySkills';

class AddVacancy extends React.Component {
	constructor(props) {
		super(props);
		this.addVacancy = this.addVacancy.bind(this);
		this.arrSkills = [];
	}

	addVacancy(event) {
		this.arrSkills = [];
		const skills = this.props.values.skills.values;
		for (const key in skills) {
			if (skills[key]) this.arrSkills.push(key);
		}
		const postObj = {
			...this.props.values.vacancy,
			skills: this.arrSkills,
		};
		API.addVacancy(postObj);
		event.preventDefault();
	}

	render() {
		return (
			<>
				<div>AddVacancy</div>
				<form onSubmit={this.addVacancy}>
					<Field
						component="input"
						name="vacancyName"
						placeholder="vacancy name"
					/>
					<Field component="input" name="salary" placeholder="salary" />
					<Field component="input" name="experience" placeholder="experience" />
					<Field
						component="input"
						name="englishLevel"
						placeholder="englishLevel"
					/>
					<Field
						component="input"
						name="programmLanguage"
						placeholder="programmLanguage"
					/>
					<VacancySkills />
					<Field
						component="input"
						name="employmentType"
						placeholder="employmentType"
					/>
					<Field
						component="input"
						name="description"
						placeholder="descriptionVacancy"
					/>
					<Field component="input" name="companyId" placeholder="companyId" />
					<Field component="input" name="hrId" placeholder="hrId" />

					<input type="submit" value="Submit" />
				</form>
			</>
		);
	}
}

const mapStateToProps = ({ form }) => {
	return {
		values: {
			vacancy: form.vacancy ? form.vacancy.values : {},
			skills: form.vacancySkill,
		},
	};
};

export default reduxForm({
	form: 'vacancy',
})(connect(mapStateToProps)(AddVacancy));
