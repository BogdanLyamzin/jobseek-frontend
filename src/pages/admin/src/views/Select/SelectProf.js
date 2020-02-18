import React from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';
import axios from 'axios';
import { connect } from 'react-redux';

class SelectProf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vacancyName: '',
      professionId: '',
    };
  }
  handleInputChange(input) {
    // console.log("value", input)
  }
  changeVacancy (state, id) {
    axios.put(`http://localhost:5000/vacancytemplate/${id}`, { vacancyName: state.vacancyName, professionId: state.professionId });
  }
  addVacancy (state) {
    axios.post(`http://localhost:5000/vacancytemplate`, { vacancyName: state.vacancyName, professionId: state.professionId })
      .then( data => console.log(data))
      .catch( err => console.log(err));
  }
  handleChange = (selectedOptions) => {
    let { professionId } = this.state;
    let {options} = this.props;
    let profession = options.map( item1 => item1.sphereName);
    if( (professionId === '') || (profession.find(item => item === selectedOptions)) ) {
      this.setState( {professionId: selectedOptions[0]._id});
    }
  };
  onChangeInput = (event) => {
    const {name} = event.target;
    this.setState( { [name]: event.target.value } );
  };

  render() {
    let {options, vacId} = this.props;
    return (
      <>
        <div className='col-12 col-md-6 p-2'>
          <input type='text' name='vacancyName' className='w-100 border border-light rounded p-2'
                 value={this.state.vacancyName} onChange={this.onChangeInput} placeholder='Назва професії'></input>
        </div>
        <div className='col-12 col-md-6 p-2'>
          <Typeahead
            id="typeahead"
            labelKey={(option) => `${option.professionName}`}
            options={options}
            onInputChange={this.handleInputChange}
            onChange={this.handleChange}
            placeholder="Назва професії"
          />
        </div>
        <input type="submit" value="Зберегти" className='btn btn-pill btn-success text-right m-2' onClick={ ()=>
        {(!vacId && (this.addVacancy(this.state))) || (vacId && this.changeVacancy(this.state, vacId))}
        }/>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    vacancyName: state.vacancyName,
    professionId: state.professionId,
  };
};
export default (connect(mapStateToProps)(SelectProf));
