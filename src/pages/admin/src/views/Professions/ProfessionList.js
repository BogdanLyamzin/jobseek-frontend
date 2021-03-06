import React, { Component } from 'react';
// import axios from "axios";
import { connect } from 'react-redux';
import { Button, Card, CardBody, CardHeader, Collapse } from 'reactstrap';
import SelectSphere from '../Select/SelectSphere';
import ProfSphereName from './ProfSphereName';
import { deleteProfession } from '../../../../../store/admin/actions/professionActions';
// import {getAllSpheres} from "../../../../../store/admin/actions/sphereActions";

class ProfessionList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			accordion: [],
		};
	}
	toggleAccordion = tab => {
		const prevState = this.state.accordion;
		const state = prevState.map((x, index) => (tab === index ? !x : false));
		this.setState({
			accordion: state,
		});
	};

	render() {
		const { profession, isChange } = this.props;
		let { accordion } = this.state;
		return (
			profession &&
			Array.isArray(profession) &&
			profession.map((elem, index) => {
				accordion.push(false);
				return (
					<div key={elem._id}>
						<Card className="mb-0">
							<CardHeader>
								<Button
									block
									color="link"
									className="text-left m-0 p-0"
									onClick={() => this.toggleAccordion(index)}
									aria-expanded={this.state.accordion[index]}
								>
									<h5 className="m-0 p-0">{elem.professionName}</h5>
								</Button>
							</CardHeader>
							<Collapse
								isOpen={this.state.accordion[index]}
								data-parent="#accordionProf"
							>
								<CardBody className="row">
									<>
										<div className="col-6 col-lg-9">
											{!isChange && <ProfSphereName sphereId={elem.sphereId} />}
											{isChange && (
												<>
													<p>Нові значення:</p>
													<SelectSphere
														changeProfession={this.props.changeProfession}
														profId={elem._id}
													/>
												</>
											)}
										</div>
										<div className="col-6 col-lg-3 text-right">
											<button
												type="button"
												className="btn btn-danger btn-sm btn-pill rounded-pill mr-3 ml-4"
												data-toggle="tooltip"
												data-placement="top"
												title="Видалити"
												onClick={() => {
													this.props.deleteProfession(elem._id);
													this.props.isDeleted();
												}}
											>
												<i className="fa fa-close fa-lg p-1"></i>
											</button>
											<button
												type="button"
												className="btn btn-warning btn-sm btn-pill rounded-pill mr-3"
												data-toggle="tooltip"
												data-placement="top"
												title="Редагувати"
												onClick={() => this.props.changeProfession()}
											>
												<i className="fa fa-pencil text-white fa-lg p-1"></i>
											</button>
										</div>
									</>
								</CardBody>
							</Collapse>
						</Card>
					</div>
				);
			})
		);
	}
}
const mapStateToProps = state => {
	return {
		error: state.admin.error,
	};
};
const mapDispatchToProps = {
	deleteProfession,
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(ProfessionList);
