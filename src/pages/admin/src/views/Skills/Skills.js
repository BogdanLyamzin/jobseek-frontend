import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import SelectCategory from '../Select/SelectCategory';
import ReactPaginate from 'react-paginate';
import { getAllSkills } from '../../../../../store/admin/actions/skillActions';
import _ from 'lodash';
import SkillsList from './SkillsList';
import Search from '../Search/Search';

class Skills extends Component {
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
		this.props.getAllSkills();
	}

	isDeleted = () => {
		this.props.getAllSkills();
	};
	showFormForAdd = () => {
		let val = !this.state.isShowForm;
		this.setState({ isShowForm: val });
		this.props.getAllSkills();
	};
	changeSkill = () => {
		let val = !this.state.isChange;
		this.setState({ isChange: val });
		this.props.getAllSkills();
	};
	pageChangeHandler = ({ selected }) =>
		this.setState({ currentPage: selected });
	searchHandler = search => {
		this.setState({ search, currentPage: 0 });
	};
	getFilteredData() {
		const { search } = this.state;
		const { skill } = this.props;
		if (!search) {
			return skill;
		}
		let result = skill.filter(item =>
			item['skillName'].toLowerCase().includes(search.toLowerCase()),
		);
		if (!result.length) {
			result = this.props.skill;
		}
		return result;
	}
	render() {
		this.props.getAllSkills();
		let pageSize = 5;
		let { isShowForm } = this.state;
		const { skill } = this.props;
		let pageCount = 0;
		if (skill) {
			pageCount = Math.ceil(skill.length / pageSize);
		}
		const filteredData = this.getFilteredData();
		const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage];
		return (
			<div className="animated fadeIn">
				<Row>
					<Col sm="12">
						{skill && Array.isArray(skill) && (
							<Search onSearch={this.searchHandler} />
						)}
						<Card>
							<CardHeader className="d-flex justify-content-between">
								<strong>Список навичок: </strong>
								<button
									className="btn btn-pill btn-success"
									onClick={this.showFormForAdd}
								>
									Додати навичку
								</button>
							</CardHeader>
							<CardBody>
								<div id="accordionSkill">
									{isShowForm && (
										<SelectCategory showFormForAdd={this.showFormForAdd} />
									)}
									{displayData ? (
										<div className="pb-4">
											<SkillsList
												skill={displayData}
												changeSkill={this.changeSkill}
												isChange={this.state.isChange}
												isDeleted={this.isDeleted}
											/>
										</div>
									) : (
										<>Список навичок пустий! Додайте навичку.</>
									)}
									{skill &&
										(skill.length > pageSize ? (
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
		skill: state.admin.skill,
		error: state.admin.error,
	};
};

const mapDispatchToProps = {
	getAllSkills,
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(Skills);
