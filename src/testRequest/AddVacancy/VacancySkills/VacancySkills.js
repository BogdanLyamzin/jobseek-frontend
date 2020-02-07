import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class VacancySkills extends React.Component {
	render() {
		return (
			<div>
				<Field component="input" type="checkbox" name="jquery" value="jquery" />
				<Field component="input" type="checkbox" name="html" value="html" />
				<Field component="input" type="checkbox" name="react" value="react" />
				<Field
					component="input"
					type="checkbox"
					name="angular"
					value="angular"
				/>
				<Field component="input" type="checkbox" name="es6" value="es6" />
				<Field
					component="input"
					type="checkbox"
					name="photoshop"
					value="photoshop"
				/>
				<Field component="input" type="checkbox" name="css" value="css" />
				<Field
					component="input"
					type="checkbox"
					name="mongoDB"
					value="mongoDB"
				/>
				<Field
					component="input"
					type="checkbox"
					name="mongoose"
					value="mongoose"
				/>
				<Field
					component="input"
					type="checkbox"
					name="react native"
					value="react native"
				/>
			</div>
		);
	}
}

const mapStateToProps = ({ form }) => {
	return {
		values: form.vacancySkill ? form.vacancySkill.values : {},
	};
};

export default reduxForm({
	form: 'vacancySkill',
})(connect(mapStateToProps)(VacancySkills));
