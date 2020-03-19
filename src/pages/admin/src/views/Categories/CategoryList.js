import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from "axios";
import { Button, Card, CardBody, CardHeader, Collapse } from 'reactstrap';
import SelectVacancies from '../Select/SelectVacancies';
import CategVacancyName from './CategVacancyName';
import { deleteCategory } from '../../../../../store/admin/actions/categoryActions';

class CategoryList extends Component {
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
		const { category, isChange } = this.props;
		let { accordion } = this.state;
		return (
			category &&
			Array.isArray(category) &&
			category.map((elem, index) => {
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
									<h5 className="m-0 p-0">{elem.categoryName}</h5>
								</Button>
							</CardHeader>
							<Collapse
								isOpen={this.state.accordion[index]}
								data-parent="#accordionCategory"
							>
								<CardBody className="row">
									<>
										<div className="col-6 col-lg-9">
											{!isChange && (
												<CategVacancyName parentId={elem.parentId} />
											)}
											{isChange && (
												<>
													<p>Нові значення:</p>
													<SelectVacancies
														changeCategory={this.props.changeCategory}
														catId={elem._id}
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
													this.props.deleteCategory(elem._id);
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
												onClick={() => this.props.changeCategory()}
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
	deleteCategory,
};
const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(CategoryList);
