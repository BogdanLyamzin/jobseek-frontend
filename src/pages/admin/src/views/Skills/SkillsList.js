import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardBody, CardHeader, Collapse } from 'reactstrap';
import SelectCategory from '../Select/SelectCategory';
import SkillCategName from './SkillCategName';
import { deleteSkill } from '../../../../../store/admin/actions/skillActions';

class SkillsList extends Component {
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
		const { skill, isChange } = this.props;
		let { accordion } = this.state;
		return (
			skill &&
			Array.isArray(skill) &&
			skill.map((elem, index) => {
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
									<h5 className="m-0 p-0">{elem.skillName}</h5>
								</Button>
							</CardHeader>
							<Collapse
								isOpen={this.state.accordion[index]}
								data-parent="#accordionSkill"
							>
								<CardBody className="row">
									<>
										<div className="col-6 col-lg-9">
											{!isChange && (
												<SkillCategName
													categoryId={elem.categoryId}
													// isDeleted={this.props.isDeleted}
												/>
											)}

											{isChange && (
												<>
													<p>Нові значення:</p>
													<SelectCategory
														changeSkill={this.props.changeSkill}
														skillId={elem._id}
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
													this.props.deleteSkill(elem._id);
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
												onClick={() => this.props.changeSkill()}
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
	deleteSkill,
};
const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(SkillsList);
