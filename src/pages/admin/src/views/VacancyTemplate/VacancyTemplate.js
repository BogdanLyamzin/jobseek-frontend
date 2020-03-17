import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import SelectProf from '../Select/SelectProf';
import { getAllVacancyTemplate } from '../../../../../store/admin/actions/vacancyTemplateActions';
import ReactPaginate from 'react-paginate';
import _ from 'lodash';
import VacanciesList from './VacanciesList';
import Search from '../Search/Search';

class VacancyTemplate extends Component {
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
		this.props.getAllVacancyTemplate();
	}
	isDeleted = () => {
		this.props.getAllVacancyTemplate();
	};
	showFormForAdd = () => {
		let val = !this.state.isShowForm;
		this.setState({ isShowForm: val });
		this.props.getAllVacancyTemplate();
	};
	changeVacancyTemplate = () => {
		let val = !this.state.isChange;
		this.setState({ isChange: val });
		this.props.getAllVacancyTemplate();
	};

	pageChangeHandler = ({ selected }) =>
		this.setState({ currentPage: selected });
	searchHandler = search => {
		this.setState({ search, currentPage: 0 });
	};
	getFilteredData() {
		const { search } = this.state;
		const { vacancy } = this.props;
		if (!search) {
			return vacancy;
		}
		let result = vacancy.filter(item =>
			item['vacancyName'].toLowerCase().includes(search.toLowerCase()),
		);
		if (!result.length) {
			result = this.props.vacancy;
		}
		return result;
	}
	render() {
		this.props.getAllVacancyTemplate();
		let pageSize = 5;
		let { isShowForm } = this.state;
		const { vacancy } = this.props;
		let pageCount = 0;
		if (vacancy) {
			pageCount = Math.ceil(vacancy.length / pageSize);
		}
		const filteredData = this.getFilteredData();
		const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage];
		return (
			<div className="animated fadeIn">
				<Row>
					<Col sm="12">
						{vacancy && Array.isArray(vacancy) && (
							<Search onSearch={this.searchHandler} />
						)}
						<Card>
							<CardHeader className="d-flex justify-content-between">
								<strong>Список вакансій: </strong>
								<button
									className="btn btn-pill btn-success"
									onClick={this.showFormForAdd}
								>
									Додати вакансію
								</button>
							</CardHeader>
							<CardBody>
								<div id="accordionVac">
									{isShowForm && (
										<SelectProf showFormForAdd={this.showFormForAdd} />
									)}
									{displayData ? (
										<div className="pb-4">
											<VacanciesList
												vacancy={displayData}
												changeVacancyTemplate={this.changeVacancyTemplate}
												isChange={this.state.isChange}
												isDeleted={this.isDeleted}
											/>
										</div>
									) : (
										<>Список вакансій пустий! Додайте вакансію.</>
									)}
									{vacancy &&
										(vacancy.length > pageSize ? (
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
		vacancy: state.admin.vacancy,
		error: state.admin.error,
	};
};

const mapDispatchToProps = {
	getAllVacancyTemplate,
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(VacancyTemplate);
