import React, { Component } from 'react';
import axios from 'axios';
import { Button, Card, CardBody, CardHeader, Col, Collapse, Row, } from 'reactstrap';
import { connect } from 'react-redux';
import { getAllSpheres } from '../../../../../store/admin/actions/sphereActions';

class Spheres extends Component {
  constructor(props) {
    super(props);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.state = {
      accordion: [],
      isShowForm: false,
      isChange: false,
      sphereName: '',
    };
  }
  componentDidMount() {
    const { getAllSpheres } = this.props;
    getAllSpheres();
  }

  showFormForAdd = () => {
    let val = !this.state.isShowForm;
    this.setState( {isShowForm: val})
  };
  toggleAccordion(tab) {
    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => tab === index ? !x : false);
    this.setState({
      accordion: state,
    });
  }
  deleteSphere = (id) => {
    axios.delete(`http://localhost:4000/spheres/${id}`).then(data => {
      alert('Сфера успішно видалена');
      this.componentDidMount();
    });
  };
  changeSphere = () => {
    let val = !this.state.isChange;
    this.setState( {isChange: val} )
  };
  addSphere (state) {
    axios.post(`http://localhost:4000/spheres`, { sphereName: state.sphereName})
      .then( data => console.log(data))
      .catch( err => console.log(err));
  }
  changeOneSphere (state, id) {
    axios.put(`http://localhost:4000/spheres/${id}`, { sphereName: state.sphereName });
  }
  onChangeInput = (event) => {
    const name = event.target.name;
    this.setState( { [name]: event.target.value } );
  };
  render() {
    let { isShowForm,
      accordion,
      isChange} = this.state;
    const { sphere } = this.props;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12" >
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
                             onClick={ ()=> {(this.addSphere(this.state))} }
                        />
                    </div>
                    )}
                  { (sphere && Array.isArray(sphere)) && (
                    sphere.map( (elem, index) => {
                        accordion.push(false);
                      return (
                        <div key={elem._id}>
                        <Card className="mb-0" >
                          <CardHeader >
                            <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(index)} aria-expanded={this.state.accordion[index]} >
                              <h5 className="m-0 p-0">{elem.sphereName}</h5>
                            </Button>
                          </CardHeader>
                          <Collapse isOpen={this.state.accordion[index]} data-parent="#accordionSphere"  >
                            <CardBody className='row'>
                              <>
                                <div className='col-6 col-lg-9'>
                                  { isChange && (
                                    <>
                                      <p>Нові значення:</p>
                                      <div className='col-12 col-md-6 p-2'>
                                        <input type='text' name='sphereName' className='w-100 border border-light rounded p-2'
                                               value={this.state.sphereName} onChange={this.onChangeInput} placeholder='Назва сфери'></input>
                                        <input type="submit" value="Зберегти" className='btn btn-pill btn-success text-right m-2'
                                               onClick={ ()=> {(this.changeOneSphere(this.state, elem._id))} }
                                        />
                                      </div>
                                    </>
                                  )}
                                </div>
                                <div className='col-6 col-lg-3 text-right'>
                                  <button type="button" className="btn btn-danger btn-sm btn-pill rounded-pill mr-3 ml-4" data-toggle="tooltip" data-placement="top"
                                          title="Видалити" onClick={ () => this.deleteSphere(elem._id, index)}>
                                    <i className="fa fa-close fa-lg p-1"></i>
                                  </button>
                                  <button type="button" className="btn btn-warning btn-sm btn-pill rounded-pill mr-3" data-toggle="tooltip" data-placement="top"
                                          title="Редагувати" onClick={ () => this.changeSphere()}>
                                    <i className="fa fa-pencil text-white fa-lg p-1"></i>
                                  </button>
                                </div>
                              </>
                            </CardBody>
                          </Collapse>
                        </Card>
                      </div>
                      )}
                      )
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
    sphere: state.sphere,
    error: state.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllSpheres: () => dispatch(getAllSpheres()),
  }
};

const enhancer = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default enhancer(Spheres);
