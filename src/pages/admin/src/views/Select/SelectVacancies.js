import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { connect } from 'react-redux';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import {
	updateCategory,
	addCategory,
	getOptionsCategoryAndVacancy,
} from '../../../../../store/admin/actions/categoryActions';

class SelectVacancies extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			categoryName: '',
			parentId: [],
		};
	}
	componentDidMount() {
		this.props.getOptionsCategoryAndVacancy();
	}
	handleInputChange(input) {
		// console.log("value", input)
	}
	changeOneCategory(state, id) {
		this.props.updateCategory(id, {
			categoryName: state.categoryName,
			parentId: state.parentId,
		});
	}
	addCategory(state) {
		this.props.addCategory({
			categoryName: state.categoryName,
			parentId: state.parentId,
		});
	}
	handleChange = selected => {
		let parentId = selected.map(item => item._id);
		this.setState({ parentId });
	};
	onChangeInput = event => {
		const { name } = event.target;
		this.setState({ [name]: event.target.value });
	};

	render() {
		let { catId } = this.props;
		let options = this.props.vacancy.concat(this.props.category);
		// let {options} = this.state;
		// this.setOptions();
		return (
			options && (
				<>
					<div className="col-12 col-md-6 p-2">
						<input
							type="text"
							name="categoryName"
							className="w-100 border border-light rounded p-2"
							value={this.state.categoryName}
							onChange={this.onChangeInput}
							placeholder="Назва категорії"
						/>
					</div>
					<div className="col-12 col-md-6 p-2">
						<Typeahead
							id="typeahead"
							labelKey={option =>
								`${option.vacancyName || option.categoryName}`
							}
							options={options}
							multiple
							onInputChange={this.handleInputChange}
							onChange={this.handleChange}
							placeholder="Назва вакансії чи батьківської категорії"
							selected={this.state.selected}
						/>
					</div>
					<input
						type="submit"
						value="Зберегти"
						className="btn btn-pill btn-success text-right m-2"
						onClick={() => {
							if (catId) {
								this.changeOneCategory(this.state, catId);
								this.props.changeCategory();
							}
							if (!catId) {
								this.addCategory(this.state);
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
		categoryName: state.categoryName,
		parentId: state.parentId,
		error: state.admin.error,
		vacancy: state.admin.vacancy,
		category: state.admin.category,
	};
};
const mapDispatchToProps = {
	getOptionsCategoryAndVacancy,
	updateCategory,
	addCategory,
};
const enhancer = connect(mapStateToProps, mapDispatchToProps);
export default enhancer(SelectVacancies);
