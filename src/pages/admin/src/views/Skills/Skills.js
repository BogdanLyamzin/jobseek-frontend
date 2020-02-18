import React, { Component } from 'react';
import axios from 'axios';
import {  Card, CardBody, CardHeader, Col, Row, } from 'reactstrap';
import SelectCategory from "../Select/SelectCategory";
import ReactPaginate from 'react-paginate';
import _ from 'lodash';
import SkillsList from "./SkillsList";
import Search from "../Search/Search";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowForm: false,
      options: [],
      currentPage: 0,
      search: '',
    };
  }
  componentDidMount() {
    axios.get("http://localhost:5000/skills").then( res =>
      // eslint-disable-next-line no-console
      this.setState({ skill: res.data.result})).catch( err => console.log(err));

    axios.get("http://localhost:5000/categories")
      .then((data) =>  {
        this.setState({ options: data.data.result});
      })
      // eslint-disable-next-line no-console
      .catch( err => console.log(err));
  }

  showFormForAddSkill = () => {
    let val = !this.state.isShowForm;
    this.setState( {isShowForm: val});
  };

  pageChangeHandler = ({selected}) => (
    this.setState({currentPage: selected})
  );
  searchHandler = search => {
    this.setState({search, currentPage: 0});
  };
  getFilteredData(){
    const { search, skill} = this.state;

    if (!search) {
      return skill;
    }
    let result = skill.filter(item => item['skillName'].toLowerCase().includes(search.toLowerCase()));
    if(!result.length){
      result = this.state.skill;
    }
    return result;
  }
  render() {
    let pageSize = 5;
    let { isShowForm, options, skill } = this.state;
    let pageCount = 0;
    if (skill) {
      pageCount =  Math.ceil(skill.length / pageSize);
    }
    const filteredData = this.getFilteredData();
    const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage];
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12" >
            { (skill && Array.isArray(skill)) && (
              <Search onSearch={this.searchHandler}/>
            )}
            <Card>
              <CardHeader className='d-flex justify-content-between'>
                <strong>Список навичок: </strong>
                <button className='btn btn-pill btn-success' onClick={this.showFormForAddSkill}>Додати навичку</button>
              </CardHeader>
                <CardBody>
                <div id="accordionSkill">
                  {(!skill || !Array.isArray(skill) ) && (
                    <>Список навичок пустий! Додайте навичку.</>
                  )}
                  {isShowForm && (
                     <SelectCategory options={options}></SelectCategory>
                    )}
                  { (skill && Array.isArray(skill) ) && (
                    <div className='pb-4'>
                    <SkillsList skill={displayData} options={options}/>
                    </div>
                  )
                  }
                    { skill &&
                    (skill.length > pageSize
                        ? <ReactPaginate
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
                        /> : null
                    )}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Skills;
