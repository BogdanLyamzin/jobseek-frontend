import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { connect } from 'react-redux';
import {
	updateSkill,
	addSkill,
} from '../../../../../store/admin/actions/skillActions';
import { getAllCategories } from '../../../../../store/admin/actions/categoryActions';

class SelectCategory extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			skillName: '',
			categoryId: '',
		};
		// this.showFormForAddSkillInParent = this.showFormForAddSkillInParent.bind(this);
	}
	componentDidMount() {
		this.props.getAllCategories();
	}
	handleInputChange(input) {
		// console.log("value", input)
	}
	// showFormForAddSkillInParent () {
	//   this.props.showFormForAddSkill();
	// }
	changeOneSkill(state, id) {
		this.props.updateSkill(id, {
			skillName: state.skillName,
			categoryId: state.categoryId,
		});
	}
	addSkill(state) {
		this.props.addSkill({
			skillName: state.skillName,
			categoryId: state.categoryId,
		});
	}
	// changeSkill (state, id) {
	//   axios.put(`http://localhost:5000/skills/${id}`, { skillName: state.skillName, categoryId: state.categoryId });
	// }
	// addSkill (state) {
	//   axios.post(`http://localhost:5000/skills`, { skillName: state.skillName, categoryId: state.categoryId })
	//     .then( data => console.log(data))
	//     .catch( err => console.log(err));
	// }
	handleChange = selectedOptions => {
		let { categoryId } = this.state;
		// let {options} = this.props;
		let category = this.props.category.map(item1 => item1.categoryName);
		if (categoryId === '' || category.find(item => item === selectedOptions)) {
			this.setState({ categoryId: selectedOptions[0]._id });
		}
	};
	onChangeInput = event => {
		const { name } = event.target;
		this.setState({ [name]: event.target.value });
	};

	render() {
		let { skillId } = this.props;

		return (
			this.props.category && (
				<>
					<div className="col-12 col-md-6 p-2">
						<input
							type="text"
							name="skillName"
							className="w-100 border border-light rounded p-2"
							value={this.state.skillName}
							onChange={this.onChangeInput}
							placeholder="Назва навички"
						/>
					</div>
					<div className="col-12 col-md-6 p-2">
						<Typeahead
							id="typeahead"
							labelKey={option => `${option.categoryName}`}
							options={this.props.category}
							onInputChange={this.handleInputChange}
							onChange={this.handleChange}
							placeholder="Назва категорії"
						/>
					</div>
					<input
						type="submit"
						value="Зберегти"
						className="btn btn-pill btn-success text-right m-2"
						onClick={() => {
							if (skillId) {
								this.changeOneSkill(this.state, skillId);
								this.props.changeSkill();
							}
							if (!skillId) {
								this.addSkill(this.state);
								this.props.showFormForAdd();
							}
							//   (!skillId &&
							//  (this.addSkill(this.state) &&
							//  (this.props.showFormForAddSkill())))
							//  || (skillId && this.changeSkill(this.state, skillId)
							//  && (this.props.showFormForAddSkill()));
						}}
					/>
				</>
			)
		);
	}
}
const mapStateToProps = state => {
	return {
		skillName: state.admin.skillName,
		categoryId: state.admin.categoryId,
		error: state.admin.error,
		category: state.admin.category,
	};
};
const mapDispatchToProps = {
	getAllCategories,
	updateSkill,
	addSkill,
};
const enhancer = connect(mapStateToProps, mapDispatchToProps);
export default enhancer(SelectCategory);
