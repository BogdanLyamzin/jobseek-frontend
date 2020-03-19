import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import SelectSphere from '../Select/SelectSphere';
import { getAllProfessions } from '../../../../../store/admin/actions/professionActions';
import ReactPaginate from 'react-paginate';
import _ from 'lodash';
import ProfessionList from './ProfessionList';
import Search from '../Search/Search';

class Professions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShowForm: false,
			isChange: false,
			currentPage: 0,
			search: '',
			// isDelete: true,
		};
	}
	componentDidMount() {
		// this.props.getAllProfessionsWithSphere();
		this.props.getAllProfessions();
	}
	isDeleted = () => {
		this.props.getAllProfessions();
	};
	showFormForAdd = () => {
		let val = !this.state.isShowForm;
		this.setState({ isShowForm: val });
		this.props.getAllProfessions();
	};
	changeProfession = () => {
		let val = !this.state.isChange;
		this.setState({ isChange: val });
		this.props.getAllProfessions();
	};

	pageChangeHandler = ({ selected }) =>
		this.setState({ currentPage: selected });
	searchHandler = search => {
		this.setState({ search, currentPage: 0 });
	};
	getFilteredData() {
		const { search } = this.state;
		const { profession } = this.props;
		if (!search) {
			return profession;
		}
		let result = profession.filter(item =>
			item['professionName'].toLowerCase().includes(search.toLowerCase()),
		);
		if (!result.length) {
			result = this.props.profession;
		}
		return result;
	}

	render() {
		this.props.getAllProfessions();
		const pageSize = 5;
		let { isShowForm } = this.state;
		const { profession } = this.props;
		let pageCount = 0;
		if (profession) {
			pageCount = Math.ceil(profession.length / pageSize);
		}
		const filteredData = this.getFilteredData();
		const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage];
		return (
			<div className="animated fadeIn">
				<Row>
					<Col sm="12">
						{profession && Array.isArray(profession) && (
							<Search onSearch={this.searchHandler} />
						)}
						<Card>
							<CardHeader className="d-flex justify-content-between">
								<strong>Список професій: </strong>
								<button
									className="btn btn-pill btn-success"
									onClick={this.showFormForAdd}
								>
									Додати професію
								</button>
							</CardHeader>
							<CardBody>
								<div id="accordionProf">
									{isShowForm && (
										<SelectSphere showFormForAdd={this.showFormForAdd} />
									)}
									{displayData ? (
										<div className="pb-4">
											<ProfessionList
												profession={displayData}
												changeProfession={this.changeProfession}
												isChange={this.state.isChange}
												isDeleted={this.isDeleted}
											/>
										</div>
									) : (
										<>Список професій пустий! Додайте професію.</>
									)}
									{profession &&
										(profession.length > pageSize ? (
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
		profession: state.admin.profession,
		error: state.admin.error,
	};
};

const mapDispatchToProps = {
	getAllProfessions,
	// getAllProfessionsWithSphere,
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(Professions);
