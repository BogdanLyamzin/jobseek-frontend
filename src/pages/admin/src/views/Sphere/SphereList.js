import React, {Component} from "react";
import {Button, Card, CardBody, CardHeader,  Collapse} from "reactstrap";
import axios from "axios";

class SphereList extends Component {
  constructor(props) {
    super(props);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.state = {
      accordion: [],
      isChange: false,
    };
  }
  toggleAccordion(tab) {
    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => tab === index ? !x : false);
    this.setState({
      accordion: state,
    });
  }
  onChangeInput = (event) => {
    const {name} = event.target;
    this.setState( { [name]: event.target.value } );
  };
  deleteSphere = (id) => {
    axios.delete(`http://localhost:5000/spheres/${id}`).then(data => {
      console.log('Сфера успішно видалена');
    });
  };
  changeSphere = () => {
    let val = !this.state.isChange;
    this.setState( {isChange: val} );
  };
  changeOneSphere (state, id) {
    axios.put(`http://localhost:5000/spheres/${id}`, { sphereName: state.sphereName });
  }
  render() {
    const {sphere} = this.props;
    let {accordion, isChange} = this.state;
    return ( sphere.map( (elem, index) => {
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
        );}
      )
    );
  }
}
export default SphereList;
