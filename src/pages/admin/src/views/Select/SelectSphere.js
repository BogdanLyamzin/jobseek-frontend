import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
// import axios from 'axios';
import { connect } from 'react-redux';
import {
	// getAllProfessions,
	updateProfession,
	addProfession,
} from '../../../../../store/admin/actions/professionActions';
import { getAllSpheres } from '../../../../../store/admin/actions/sphereActions';

class SelectSpheres extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			professionName: '',
			sphereId: '',
		};
	}
	componentDidMount() {
		this.props.getAllSpheres();
	}
	handleInputChange(input) {
		// console.log("value", input)
	}
	changeOneProfession(state, id) {
		this.props.updateProfession(id, {
			professionName: state.professionName,
			sphereId: state.sphereId,
		});
	}
	addProfession(state) {
		this.props.addProfession({
			professionName: state.professionName,
			sphereId: state.sphereId,
		});
	}
	handleChange = selectedOptions => {
		let { sphereId } = this.state;
		// let {options} = this.props;
		let sphere = this.props.sphere.map(item1 => item1.sphereName);
		if (sphereId === '' || sphere.find(item => item === selectedOptions)) {
			this.setState({ sphereId: selectedOptions[0]._id });
		}
	};
	onChangeInput = event => {
		const { name } = event.target;
		this.setState({ [name]: event.target.value });
	};

	render() {
		let { profId } = this.props;
		// console.log(this.props.sphere);
		return (
			this.props.sphere && (
				<>
					<div className="col-12 col-md-6 p-2">
						<input
							type="text"
							name="professionName"
							className="w-100 border border-light rounded p-2"
							value={this.state.professionName}
							onChange={this.onChangeInput}
							placeholder="Назва професії"
						/>
					</div>
					<div className="col-12 col-md-6 p-2">
						<Typeahead
							id="typeahead"
							labelKey={sphere => `${sphere.sphereName}`}
							options={this.props.sphere}
							onInputChange={this.handleInputChange}
							onChange={this.handleChange}
							placeholder="Назва проф. сфери"
						/>
					</div>
					<input
						type="submit"
						value="Зберегти"
						className="btn btn-pill btn-success text-right m-2"
						onClick={() => {
							if (profId) {
								this.changeOneProfession(this.state, profId);
								this.props.changeProfession();
							}
							if (!profId) {
								this.addProfession(this.state);
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
		professionName: state.admin.professionName,
		// profession: state.admin.profession,
		sphereId: state.admin.sphereId,
		error: state.admin.error,
		sphere: state.admin.sphere,
	};
};
const mapDispatchToProps = {
	// getAllProfessions,
	updateProfession,
	addProfession,
	getAllSpheres,
};
const enhancer = connect(mapStateToProps, mapDispatchToProps);
export default enhancer(SelectSpheres);
