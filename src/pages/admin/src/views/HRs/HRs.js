import React, { Component } from 'react';
import axios from 'axios';
import {
  Button,
  Card, CardBody, CardHeader, Col, Collapse,
  Row,
} from 'reactstrap';

class HRs extends Component {

  constructor(props) {
    super(props);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.state = {
      accordion: [false],
    };
  }
  componentDidMount() {
    axios.get('http://localhost:5000/hr')
      .then( data => this.setState({hr: data.data.result}))
      .catch( err => console.log(err));
  }

  toggleAccordion(tab) {
    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => tab === index ? !x : false);
    this.setState({
      accordion: state,
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12" >
            <Card>
              <CardHeader>
                <strong>Список HR-ів: </strong>
              </CardHeader>
              <CardBody>
                <div id="accordionHR">
                  <Card className="mb-0">
                    <CardHeader id="headingOne">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                        <h5 className="m-0 p-0">HR 1</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[0]} data-parent="#accordionHR" id="collapseOne" aria-labelledby="headingOne">
                      <CardBody className='row'>
                        <div className='col-6 col-lg-8'>

                        </div>
                        <div className='col-6 col-lg-4 text-right'>
                          <Button color="success" className="btn btn-sm btn-pill rounded-pill mr-3 " data-toggle="tooltip" data-placement="top"
                                  title="Написати">
                            <i className="fa fa-pencil fa-lg p-1"></i>
                          </Button>
                          <Button color="warning" className="btn btn-sm btn-pill rounded-pill mr-3 " data-toggle="tooltip" data-placement="top"
                                  title="Блокувати"
                          ><i className="fa fa-ban fa-lg p-1 text-white"></i></Button>
                          {/*<Button color="danger" className="btn btn-sm btn-pill rounded-pill mr-3" data-toggle="tooltip" data-placement="top"*/}
                          {/*        title="Видалити"*/}
                          {/*><i className="fa fa-close fa-lg p-1"></i></Button>*/}
                        </div>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>

              </CardBody>
            </Card>
          </Col>

        </Row>
      </div>
    );
  }
}

export default HRs;
