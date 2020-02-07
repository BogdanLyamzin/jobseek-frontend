import React from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';
import axios from 'axios';
import { connect } from 'react-redux';

class SelectSpheres extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vacancyName: '',
      sphereId: '',
    };
  }
  handleInputChange(input) {
    // console.log("value", input)
  }
  changeVacancies (state, id) {
    axios.put(`http://localhost:4000/vacancies/${id}`, { vacancyName: state.vacancyName, sphereId: state.sphereId });
  }
  addVacancies (state) {
    axios.post(`http://localhost:4000/vacancies`, { vacancyName: state.vacancyName, sphereId: state.sphereId })
      .then( data => console.log(data))
      .catch( err => console.log(err));
  }
  handleChange = (selectedOptions) => {
    let { sphereId } = this.state;
    let {options} = this.props;
    let sphere = options.map( item1 => item1.sphereName);
    if( (sphereId === '') || (sphere.find(item => item === selectedOptions)) ) {
      this.setState( {sphereId: selectedOptions[0]._id});
    }
  };
  onChangeInput = (event) => {
    const name = event.target.name;
    this.setState( { [name]: event.target.value } );
  };

  render() {
    let {options, myVacancyId} = this.props;
    console.log(myVacancyId);
    // console.log(this.state);
    return (
      <>
        <div className='col-12 col-md-6 p-2'>
          <input type='text' name='vacancyName' className='w-100 border border-light rounded p-2'
                 value={this.state.vacancyName} onChange={this.onChangeInput} placeholder='Назва вакансії'></input>
        </div>
        <div className='col-12 col-md-6 p-2'>
          <Typeahead
            id="typeahead"
            labelKey={(option) => `${option.sphereName}`}
            options={options}
            onInputChange={this.handleInputChange}
            onChange={this.handleChange}
            placeholder="Назва проф. сфери"
          />
        </div>
        <input type="submit" value="Зберегти" className='btn btn-pill btn-success text-right m-2' onClick={ ()=>
        {(!myVacancyId && (this.addVacancies(this.state))) || (myVacancyId && this.changeVacancies(this.state, myVacancyId))}
        }/>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    vacancyName: state.vacancyName,
    languageId: state.languageId,
  };
};
export default (connect(mapStateToProps)(SelectSpheres));
