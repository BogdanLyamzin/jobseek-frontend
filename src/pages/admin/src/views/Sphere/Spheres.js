import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardBody, CardHeader, Col, Row, } from 'reactstrap';
// import { connect } from 'react-redux';
// import { getAllSpheres } from '../../../../../store/admin/actions/sphereActions';
import ReactPaginate from 'react-paginate';
import _ from 'lodash';
import Search from "../Search/Search";
import SphereList from "./SphereList";

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
  componentDidMount() {
    axios.get(`http://localhost:5000/spheres`).then(data => this.setState({sphere: data.data.result}));
  }

  showFormForAdd = () => {
    let val = !this.state.isShowForm;
    this.setState( {isShowForm: val});
  };
  addSphere (state) {
    axios.post(`http://localhost:5000/spheres`, { sphereName: state.sphereName})
      .then( data => axios.get(`http://localhost:5000/spheres`).then(data1 => this.setState({sphere: data1.data.result})))
      .catch( err => console.log(err));
  }
  onChangeInput = (event) => {
    const {name} = event.target;
    this.setState( { [name]: event.target.value } );
  };
  pageChangeHandler = ({selected}) => (
    this.setState({currentPage: selected})
  );
  searchHandler = search => {
    this.setState({search, currentPage: 0});
  };
  getFilteredData(){
    const { search, sphere } = this.state;

    if (!search) {
      return sphere;
    }

    let result = sphere.filter(item => item['sphereName'].toLowerCase().includes(search.toLowerCase()));

    if(!result.length){
      result = this.state.sphere;
    }
    return result;
  }
  render() {
    let pageSize = 5;
    let { isShowForm } = this.state;
    const { sphere } = this.state;
    let pageCount = 0;
    if (sphere) {
      pageCount =  Math.ceil(sphere.length / pageSize);
    }
    const filteredData = this.getFilteredData();
    const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage];
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12" >
            { (sphere && Array.isArray(sphere)) && (
              <Search onSearch={this.searchHandler}/>
            )}
            <Card>
              <CardHeader className='d-flex justify-content-between'>
                <strong>Список професійних сфер: </strong>
                <button className='btn btn-pill btn-success' onClick={this.showFormForAdd}>Додати професійну сферу</button>
              </CardHeader>
                <CardBody>
                <div id="accordionSphere">
                  {(!sphere || !Array.isArray(sphere)) && (
                    <>Список сфер пустий! Додайте сферу.</>
                  )}
                  {isShowForm && (
                    <div className='col-12 col-md-6 p-2'>
                      <input type='text' name='sphereName' className='w-100 border border-light rounded p-2'
                             value={this.state.sphereName} onChange={this.onChangeInput} placeholder='Назва сфери'></input>
                      <input type="submit" value="Зберегти" className='btn btn-pill btn-success text-right m-2'
                             onClick={ ()=> {(this.addSphere(this.state));} }
                        />
                    </div>
                    )}
                  { (sphere && Array.isArray(sphere)) && (
                    <SphereList sphere={displayData} />
                  )}
                  { sphere &&
                  (sphere.length > pageSize
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

export default Spheres;
