import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { connect } from 'react-redux';
import {
	updateVacancyTemplate,
	addVacancyTemplate,
} from '../../../../../store/admin/actions/vacancyTemplateActions';
import { getAllProfessions } from '../../../../../store/admin/actions/professionActions';

class SelectProf extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			vacancyName: '',
			professionId: '',
		};
	}
	componentDidMount() {
		this.props.getAllProfessions();
	}
	handleInputChange(input) {
		// console.log("value", input)
	}
	changeOneVacancy(state, id) {
		this.props.updateVacancyTemplate(id, {
			vacancyName: state.vacancyName,
			professionId: state.professionId,
		});
	}
	addVacancy(state) {
		this.props.addVacancyTemplate({
			vacancyName: state.vacancyName,
			professionId: state.professionId,
		});
	}
	handleChange = selectedOptions => {
		let { professionId } = this.state;
		let profession = this.props.profession.map(item1 => item1.professionName);
		if (
			professionId === '' ||
			profession.find(item => item === selectedOptions)
		) {
			this.setState({ professionId: selectedOptions[0]._id });
		}
	};
	onChangeInput = event => {
		const { name } = event.target;
		this.setState({ [name]: event.target.value });
	};

	render() {
		let { vacId } = this.props;
		return (
			this.props.profession && (
				<>
					<div className="col-12 col-md-6 p-2">
						<input
							type="text"
							name="vacancyName"
							className="w-100 border border-light rounded p-2"
							value={this.state.vacancyName}
							onChange={this.onChangeInput}
							placeholder="Назва професії"
						/>
					</div>
					<div className="col-12 col-md-6 p-2">
						<Typeahead
							id="typeahead"
							labelKey={option => `${option.professionName}`}
							options={this.props.profession}
							onInputChange={this.handleInputChange}
							onChange={this.handleChange}
							placeholder="Назва професії"
						/>
					</div>
					<input
						type="submit"
						value="Зберегти"
						className="btn btn-pill btn-success text-right m-2"
						onClick={() => {
							if (vacId) {
								this.changeOneVacancy(this.state, vacId);
								this.props.changeVacancyTemplate();
							}
							if (!vacId) {
								this.addVacancy(this.state);
								this.props.showFormForAdd();
							}
						}}
					/>
				</>
			)
		);
	}
}
const mapStateToProps = state => {
	return {
		vacancyName: state.vacancyName,
		professionId: state.professionId,
		error: state.admin.error,
		profession: state.admin.profession,
	};
};
const mapDispatchToProps = {
	getAllProfessions,
	updateVacancyTemplate,
	addVacancyTemplate,
};
const enhancer = connect(mapStateToProps, mapDispatchToProps);
export default enhancer(SelectProf);
