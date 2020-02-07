import React, { Component } from 'react';
import axios from 'axios';
import {  Card, CardBody, CardHeader, Col, Row, } from 'reactstrap';
import { connect } from 'react-redux';
import SelectLang from "../Select/SelectLang";
import { getAllSkills } from '../../../../../store/admin/actions/skillActions';
import ReactPaginate from 'react-paginate';
import _ from 'lodash';
import SkillsList from "./SkillsList";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowForm: false,
      options: [],
      currentPage: 0,
    };
  }
  componentDidMount() {
    const { getAllSkills } = this.props;
    getAllSkills();
    axios.get("http://localhost:4000/languages")
      .then((data) =>  {
        this.setState({ options: data.data.result})
      })
      .catch( err => console.log(err));
  }

  showFormForAddSkill = () => {
    let val = !this.state.isShowForm;
    this.setState( {isShowForm: val})
  };

  pageChangeHandler = ({selected}) => (
    this.setState({currentPage: selected})
  );
  render() {
    const pageSize = 5;
    let { isShowForm, options } = this.state;
    const { skill } = this.props;
    let pageCount = 0;
    if (skill) {
      pageCount =  Math.ceil(skill.length / pageSize);
    }
    const displayData = _.chunk(skill, pageSize)[this.state.currentPage];
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12" >
            <Card>
              <CardHeader className='d-flex justify-content-between'>
                <strong>Список навичок: </strong>
                <button className='btn btn-pill btn-success' onClick={this.showFormForAddSkill}>Додати навичку</button>
              </CardHeader>
                <CardBody>
                <div id="accordionSkill">
                  {(!skill || !Array.isArray(skill)) && (
                    <>Список навичок пустий! Додайте навичку.</>
                  )}
                  {isShowForm && (
                     <SelectLang options={options}></SelectLang>
                    )}
                  { (skill && Array.isArray(skill)) && (
                    <SkillsList skill={displayData} options={options}/>
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
const mapStateToProps = (state) => {
  return {
    skill: state.skill,
    error: state.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllSkills: () => dispatch(getAllSkills()),
  }
};

const enhancer = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default enhancer(Skills);
