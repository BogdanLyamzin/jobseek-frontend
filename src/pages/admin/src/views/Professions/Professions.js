import React, { Component } from 'react';
import axios from 'axios';
import {  Card, CardBody, CardHeader, Col, Row, } from 'reactstrap';
// import { connect } from 'react-redux';
import SelectSphere from "../Select/SelectSphere";
// import { getAllProfessions } from '../../../../../store/admin/actions/professionActions';
import ReactPaginate from 'react-paginate';
import _ from 'lodash';
import ProfessionList from "./ProfessionList";
import Search from "../Search/Search";

class Professions extends Component {
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
    axios.get("http://localhost:5000/professions").then( res => {
      this.setState({ profession: res.data.result});
      })
      .catch( err => console.log(err));
    axios.get("http://localhost:5000/spheres")
      .then((data) =>  {
        this.setState({ options: data.data.result});
      })
      .catch( err => console.log(err));
  }

  showFormForAdd = () => {
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
    const { search, profession} = this.state;

    if (!search) {
      return profession;
    }
    let result = profession.filter(item => item['professionName'].toLowerCase().includes(search.toLowerCase()));
    if(!result.length){
      result = this.state.profession;
    }
    return result;
  }
  render() {
    const pageSize = 5;
    let { isShowForm, options, profession } = this.state;
    let pageCount = 0;
    if (profession) {
      pageCount =  Math.ceil(profession.length / pageSize);
    }
    const filteredData = this.getFilteredData();
    const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage];
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12" >
            { (profession && Array.isArray(profession)) && (
              <Search onSearch={this.searchHandler}/>
            )}
            <Card>
              <CardHeader className='d-flex justify-content-between'>
                <strong>Список професій: </strong>
                <button className='btn btn-pill btn-success' onClick={this.showFormForAdd}>Додати професію</button>
              </CardHeader>
                <CardBody>
                <div id="accordionProf">
                  {(!profession || !Array.isArray(profession)) && (
                    <>Список професій пустий! Додайте професію.</>
                  )}
                  {isShowForm && (
                     <SelectSphere options={options}></SelectSphere>
                    )}
                  { (profession && Array.isArray(profession)) && (
                    <div className='pb-4'>
                    <ProfessionList profession={displayData} options={options}/>
                    </div>
                  )
                  }
                    { profession &&
                    (profession.length > pageSize
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

export default Professions;
