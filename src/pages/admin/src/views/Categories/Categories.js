import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import SelectVacancies from '../Select/SelectVacancies';
import { getAllCategories } from '../../../../../store/admin/actions/categoryActions';
import ReactPaginate from 'react-paginate';
import _ from 'lodash';
import CategoryList from './CategoryList';
import Search from '../Search/Search';

class Categories extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShowForm: false,
			isChange: false,
			currentPage: 0,
			search: '',
		};
	}
	componentDidMount() {
		this.props.getAllCategories();
	}

	isDeleted = () => {
		this.props.getAllCategories();
	};
	showFormForAdd = () => {
		let val = !this.state.isShowForm;
		this.setState({ isShowForm: val });
		this.props.getAllCategories();
	};
	changeCategory = () => {
		let val = !this.state.isChange;
		this.setState({ isChange: val });
		this.props.getAllCategories();
	};

	pageChangeHandler = ({ selected }) =>
		this.setState({ currentPage: selected });
	searchHandler = search => {
		this.setState({ search, currentPage: 0 });
	};
	getFilteredData() {
		const { search } = this.state;
		const { category } = this.props;

		if (!search) {
			return category;
		}
		let result = category.filter(item =>
			item['categoryName'].toLowerCase().includes(search.toLowerCase()),
		);
		if (!result.length) {
			result = this.props.category;
		}
		return result;
	}
	render() {
		this.props.getAllCategories();
		let pageSize = 5;
		let { isShowForm } = this.state;
		const { category } = this.props;
		let pageCount = 0;
		if (category) {
			pageCount = Math.ceil(category.length / pageSize);
		}
		const filteredData = this.getFilteredData();
		const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage];
		return (
			<div className="animated fadeIn">
				<Row>
					<Col sm="12">
						{category && Array.isArray(category) && (
							<Search onSearch={this.searchHandler} />
						)}
						<Card>
							<CardHeader className="d-flex justify-content-between">
								<strong>Список категорій: </strong>
								<button
									className="btn btn-pill btn-success"
									onClick={this.showFormForAdd}
								>
									Додати категорію
								</button>
							</CardHeader>
							<CardBody>
								<div id="accordionCategory">
									{isShowForm && (
										<SelectVacancies showFormForAdd={this.showFormForAdd} />
									)}
									{displayData ? (
										<div className="pb-4">
											<CategoryList
												category={displayData}
												changeCategory={this.changeCategory}
												isChange={this.state.isChange}
												isDeleted={this.isDeleted}
											/>
										</div>
									) : (
										<>Список категорій пустий! Додайте категорію.</>
									)}
									{category &&
										(category.length > pageSize ? (
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
		category: state.admin.category,
		error: state.admin.error,
	};
};

const mapDispatchToProps = {
	getAllCategories,
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(Categories);
