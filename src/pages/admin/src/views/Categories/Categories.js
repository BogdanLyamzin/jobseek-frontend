import React, { Component } from 'react';
import axios from 'axios';
import {  Card, CardBody, CardHeader, Col, Row, } from 'reactstrap';
import SelectVacancies from "../Select/SelectVacancies";
import ReactPaginate from 'react-paginate';
import _ from 'lodash';
import CategoryList from "./CategoryList";
import Search from "../Search/Search";

class Categories extends Component {
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
    axios.get("http://localhost:5000/categories").then( res =>
      this.setState({ category: res.data.result})).catch( err => console.log(err));

    axios.get("http://localhost:5000/vacancytemplate")
      .then((data) =>  {
        axios.get("http://localhost:5000/categories").then( (data1) => {
          let arr = data.data.result.concat(data1.data.result);
          this.setState({ options: arr});
          }
        );
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
    const { search, category} = this.state;

    if (!search) {
      return category;
    }
    let result = category.filter(item => item['categoryName'].toLowerCase().includes(search.toLowerCase()));
    if(!result.length){
      result = this.state.category;
    }
    return result;
  }
  render() {
    let pageSize = 5;
    let { isShowForm, options, category } = this.state;
    let pageCount = 0;
    if (category) {
      pageCount =  Math.ceil(category.length / pageSize);
    }
    const filteredData = this.getFilteredData();
    const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage];
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12" >
            { (category && Array.isArray(category)) && (
              <Search onSearch={this.searchHandler}/>
            )}
            <Card>
              <CardHeader className='d-flex justify-content-between'>
                <strong>Список категорій: </strong>
                <button className='btn btn-pill btn-success' onClick={this.showFormForAdd}>Додати категорію</button>
              </CardHeader>
              <CardBody>
                <div id="accordionCategory">
                  {(!category || !Array.isArray(category) || category.length === 0 ) && (
                    <>Список категорій пустий! Додайте категорію.</>
                  )}
                  {isShowForm && (
                    <SelectVacancies options={options}></SelectVacancies>
                  )}
                  { (category && Array.isArray(category) && category.length !== 0) && (
                    <div className='pb-4'>
                      <CategoryList category={displayData} options={options}/>
                    </div>
                  )
                  }
                  { category &&
                  (category.length > pageSize
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

export default Categories;
