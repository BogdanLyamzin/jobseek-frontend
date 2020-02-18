import React, { Component } from 'react';
import axios from 'axios';
import {  Card, CardBody, CardHeader, Col, Row, } from 'reactstrap';
// import { connect } from 'react-redux';
import SelectProf from "../Select/SelectProf";
// import { getAllVacancies } from '../../../../../store/admin/actions/vacancyActions';
import ReactPaginate from 'react-paginate';
import _ from 'lodash';
import VacanciesList from "./VacanciesList";
import Search from "../Search/Search";

class VacancyTemplate extends Component {
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
    axios.get("http://localhost:5000/vacancytemplate").then( res =>
      this.setState({ vacancy: res.data.result})).catch( err => console.log(err));

    axios.get("http://localhost:5000/professions")
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
    const { search, vacancy} = this.state;


    if (!search) {
      return vacancy;
    }
    let result = vacancy.filter(item => item['vacancyName'].toLowerCase().includes(search.toLowerCase()));
    if(!result.length){
      result = this.state.vacancy;
    }
    return result;
  }
  render() {
    let pageSize = 5;
    let { isShowForm, options } = this.state;
    const { vacancy } = this.state;
    let pageCount = 0;
    if (vacancy) {
      pageCount =  Math.ceil(vacancy.length / pageSize);
    }
    const filteredData = this.getFilteredData();
    const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage];
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12" >
            { (vacancy && Array.isArray(vacancy)) && (
              <Search onSearch={this.searchHandler}/>
            )}
            <Card>
              <CardHeader className='d-flex justify-content-between'>
                <strong>Список вакансій: </strong>
                <button className='btn btn-pill btn-success' onClick={this.showFormForAdd}>Додати вакансію</button>
              </CardHeader>
              <CardBody>
                <div id="accordionProf">
                  {(!vacancy || !Array.isArray(vacancy) || vacancy.length === 0) && (
                    <>Список вакансій пустий! Додайте вакансію.</>
                  )}
                  {isShowForm && (
                    <SelectProf options={options}></SelectProf>
                  )}
                  { (vacancy && Array.isArray(vacancy) && vacancy.length !== 0) && (
                    <div className='pb-4'>
                      <VacanciesList vacancy={displayData} options={options}/>
                    </div>
                  )
                  }
                  { vacancy &&
                  (vacancy.length > pageSize
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


export default VacancyTemplate;
