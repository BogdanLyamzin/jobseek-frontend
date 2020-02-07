import React, { Component } from 'react';
import axios from 'axios';
import { Button, Card, CardBody, CardHeader, Col, Collapse, Row, } from 'reactstrap';
import { connect } from 'react-redux';
import SelectVacancies from "../Select/SelectVacancies";
import { getAllLanguages } from '../../../../../store/admin/actions/languageActions';
import LangVacancyName from "./LangVacancyName";

class Languages extends Component {
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
    const { getAllLanguages } = this.props;
    getAllLanguages();
    axios.get("http://localhost:4000/vacancies")
      .then((data) =>  {
        this.setState({ options: data.data.result})
      })
      .catch( err => console.log(err));
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
  deleteLanguage = (id) => {
    this.setState({ isDelete: true});
    axios.delete(`http://localhost:4000/languages/${id}`).then(data => {
      alert('Мова програмування успішно видалена');
      this.componentDidMount();
    });
  };
  changeLanguage = () => {
    let val = !this.state.isChange;
    this.setState( {isChange: val} )
  };
  render() {
    let { isShowForm, options, accordion, isChange} = this.state;
    const { language } = this.props;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12" >
            <Card>
              <CardHeader className='d-flex justify-content-between'>
                <strong>Список мов програмування: </strong>
                <button className='btn btn-pill btn-success' onClick={this.showFormForAdd}>Додати мову програмування</button>
              </CardHeader>
                <CardBody>
                <div id="accordionLanguage">
                  {(!language || !Array.isArray(language)) && (
                    <>Список мов програмування пустий! Додайте мову програмування.</>
                  )}
                  {isShowForm && (
                     <SelectVacancies options={options}></SelectVacancies>
                    )}
                  { (language && Array.isArray(language)) && (
                    language.map( (elem, index) => {
                        accordion.push(false);
                      return (
                        <div key={elem._id}>
                        <Card className="mb-0" >
                          <CardHeader >
                            <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(index)} aria-expanded={this.state.accordion[index]} >
                              <h5 className="m-0 p-0">{elem.languageName}</h5>
                            </Button>
                          </CardHeader>
                          <Collapse isOpen={this.state.accordion[index]} data-parent="#accordionLanguage"  >
                            <CardBody className='row'>
                              <>
                                <div className='col-6 col-lg-9'>
                                  <LangVacancyName vacanId={elem.vacancyId} />
                                  { isChange && (
                                    <>
                                      <p>Нові значення:</p>
                                      <SelectVacancies options={options} vacId={elem._id}/>
                                    </>
                                  )}
                                </div>
                                <div className='col-6 col-lg-3 text-right'>
                                  <button type="button" className="btn btn-danger btn-sm btn-pill rounded-pill mr-3 ml-4" data-toggle="tooltip" data-placement="top"
                                          title="Видалити" onClick={ () => this.deleteLanguage(elem._id, index)}>
                                    <i className="fa fa-close fa-lg p-1"></i>
                                  </button>
                                  <button type="button" className="btn btn-warning btn-sm btn-pill rounded-pill mr-3" data-toggle="tooltip" data-placement="top"
                                          title="Редагувати" onClick={ () => this.changeLanguage()}>
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
    language: state.language,
    error: state.error,
    // vacancy: state.vacancy,

  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllLanguages: () => dispatch(getAllLanguages()),
  }
};

const enhancer = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default enhancer(Languages);
