import React, { Component } from 'react';
import axios from 'axios';
import { Button, Card, CardBody, CardHeader, Col, Collapse, Row, } from 'reactstrap';
import { connect } from 'react-redux';
import SelectSphere from "../Select/SelectSphere";
import { getAllVacancies } from '../../../../../store/admin/actions/vacancyActions';
import VacSphereName from "./VacSphereName";

class Vacancies extends Component {
  constructor(props) {
    super(props);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.state = {
      accordion: [],
      isShowForm: false,
      options: [],
      isChange: false,
    };
  }
  componentDidMount() {
    const { getAllVacancies } = this.props;
    getAllVacancies();
    axios.get("http://localhost:4000/spheres")
      .then((data) =>  {
        // console.log(data.data.result);
        this.setState({ options: data.data.result})
      })
      .catch( err => console.log(err));
  }

  showFormForAddSkill = () => {
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
  deleteVacancy = (id) => {
    this.setState({ isDelete: true});
    axios.delete(`http://localhost:4000/vacancies/${id}`).then(data => {
      alert('Вакансія успішно видалена');
      this.componentDidMount();
    });
  };
  changeVacancy = () => {
    let val = !this.state.isChange;
    this.setState( {isChange: val} )
  };
  render() {
    let { isShowForm, options, accordion, isChange} = this.state;
    const { vacancy } = this.props;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12" >
            <Card>
              <CardHeader className='d-flex justify-content-between'>
                <strong>Список шаблонів вакансій: </strong>
                <button className='btn btn-pill btn-success' onClick={this.showFormForAddSkill}>Добавить шаблон вакансії</button>
              </CardHeader>
                <CardBody>
                <div id="accordionVac">
                  {(!vacancy || !Array.isArray(vacancy)) && (
                    <>Список шаблонів вакансій пустий! Додайте шаблон.</>
                  )}
                  {isShowForm && (
                     <SelectSphere options={options}></SelectSphere>
                    )}
                  { (vacancy && Array.isArray(vacancy)) && (
                    vacancy.map( (elem, index) => {
                        accordion.push(false);
                        // console.log(elem._id);
                      return (
                        <div key={elem._id}>
                        <Card className="mb-0" >
                          <CardHeader >
                            <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(index)} aria-expanded={this.state.accordion[index]} >
                              <h5 className="m-0 p-0">{elem.vacancyName}</h5>
                            </Button>
                          </CardHeader>
                          <Collapse isOpen={this.state.accordion[index]} data-parent="#accordionVac"  >
                            <CardBody className='row'>
                              <>
                                <div className='col-6 col-lg-9'>
                                  <VacSphereName sphereId={elem.sphereId} />
                                  { isChange && (
                                    <>
                                      <p>Нові значення:</p>
                                      <SelectSphere options={options} myVacancyId={elem._id}/>
                                    </>
                                  )}
                                </div>
                                <div className='col-6 col-lg-3 text-right'>
                                  <button type="button" className="btn btn-danger btn-sm btn-pill rounded-pill mr-3 ml-4" data-toggle="tooltip" data-placement="top"
                                          title="Видалити" onClick={ () => this.deleteVacancy(elem._id, index)}>
                                    <i className="fa fa-close fa-lg p-1"></i>
                                  </button>
                                  <button type="button" className="btn btn-warning btn-sm btn-pill rounded-pill mr-3" data-toggle="tooltip" data-placement="top"
                                          title="Редагувати" onClick={ () => this.changeVacancy()}>
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
    vacancy: state.vacancy,
    error: state.error,
    // skillName: state.skillName,
    sphere: state.sphere
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllVacancies: () => dispatch(getAllVacancies()),
  }
};

const enhancer = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default enhancer(Vacancies);
