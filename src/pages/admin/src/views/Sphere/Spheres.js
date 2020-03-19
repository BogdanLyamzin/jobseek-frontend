import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import {
	getAllSpheres,
	addSphere,
} from '../../../../../store/admin/actions/sphereActions';

import _ from 'lodash';
import Search from '../Search/Search';
import SphereList from './SphereList';
import ReactPaginate from 'react-paginate';

class Spheres extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShowForm: false,
			sphereName: '',
			currentPage: 0,
			search: '',
		};
	}
	showFormForAdd() {
		let val = !this.state.isShowForm;
		this.setState({ isShowForm: val });
	}
	addSphere(state) {
		this.props.addSphere({ sphereName: state.sphereName });
		this.props.getAllSpheres();
	}
	onChangeInput = event => {
		const { name } = event.target;
		this.setState({ [name]: event.target.value });
	};
	pageChangeHandler = ({ selected }) =>
		this.setState({ currentPage: selected });
	searchHandler = search => {
		this.setState({ search, currentPage: 0 });
	};
	getFilteredData() {
		const { search } = this.state;
		const { sphere } = this.props;
		if (!search) {
			return sphere;
		}
		let result = sphere.filter(item =>
			item['sphereName'].toLowerCase().includes(search.toLowerCase()),
		);
		if (!result.length) {
			result = this.props.sphere;
		}
		return result;
	}
	render() {
		this.props.getAllSpheres();
		let pageSize = 5;
		let { isShowForm } = this.state;
		const { sphere } = this.props;
		let pageCount = 0;
		if (sphere) {
			pageCount = Math.ceil(sphere.length / pageSize);
		}
		const filteredData = this.getFilteredData();
		let displayData;

		if (filteredData % pageSize === 0 && this.state.currentPage > 0) {
			displayData = _.chunk(filteredData, pageSize)[this.state.currentPage - 1];
		} else {
			displayData = _.chunk(filteredData, pageSize)[this.state.currentPage];
		}

		return (
			<div className="animated fadeIn">
				<Row>
					<Col sm="12">
						{sphere && Array.isArray(sphere) && sphere.length !== 0 && (
							<Search onSearch={this.searchHandler} />
						)}
						<Card>
							<CardHeader className="d-flex justify-content-between">
								<strong>Список професійних сфер: </strong>
								<button
									className="btn btn-pill btn-success"
									onClick={() => this.showFormForAdd()}
								>
									Додати професійну сферу
								</button>
							</CardHeader>
							<CardBody>
								<div id="accordionSphere">
									{isShowForm && (
										<div className="col-12 col-md-6 p-2">
											<input
												type="text"
												name="sphereName"
												className="w-100 border border-light rounded p-2"
												value={this.state.sphereName}
												onChange={this.onChangeInput}
												placeholder="Назва сфери"
											/>
											<input
												type="submit"
												value="Зберегти"
												className="btn btn-pill btn-success text-right m-2"
												onClick={() => {
													this.addSphere(this.state);
													this.showFormForAdd();
												}}
											/>
										</div>
									)}

									{displayData && <SphereList sphere={displayData} />}
									{!displayData && <>Список сфер пустий! Додайте сферу.</>}

									{sphere &&
										(sphere.length > pageSize ? (
											<ReactPaginate
												previousLabel={'<'}
												nextLabel={'>'}
												breakLabel={'...'}
												breakClassName={'break-me'}
												pageCount={pageCount}
												marginPagesDisplayed={2}
												pageRangeDisplayed={5}
												onPageChange={this.pageChangeHandler}
												containerClassName={'pagination'}
												activeClassName={'active'}
												pageClassName="page-item"
												pageLinkClassName="page-link"
												previousClassName="page-item"
												nextClassName="page-item"
												previousLinkClassName="page-link"
												nextLinkClassName="page-link"
												forcePage={this.state.currentPage}
											/>
										) : null)}
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		sphere: state.admin.sphere,
		error: state.admin.error,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getAllSpheres: () => dispatch(getAllSpheres()),
		addSphere: body => dispatch(addSphere(body)),
	};
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(Spheres);
