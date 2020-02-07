import React from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';
import axios from 'axios';
import { connect } from 'react-redux';

class SelectVacancies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languageName: '',
      vacancyId: '',
    };
  }
  handleInputChange(input) {
      // console.log("value", input)
  }
  changeLang (state, id) {
    axios.put(`http://localhost:4000/languages/${id}`, { languageName: state.languageName, vacancyId: state.vacancyId });
  }
  addLang (state) {
    axios.post(`http://localhost:4000/languages`, { languageName: state.languageName, vacancyId: state.vacancyId })
      .then( data => console.log(data))
      .catch( err => console.log(err));
  }
  handleChange = (selectedOptions) => {
    let { vacancyId } = this.state;
    let {options} = this.props;
    let vac = options.map( item1 => item1.vacancyName);
    if( (vacancyId === '') || (vac.find(item => item === selectedOptions)) ) {
      this.setState( {vacancyId: selectedOptions[0]._id});
    }
  };
  onChangeInput = (event) => {
    const name = event.target.name;
    this.setState( { [name]: event.target.value } );
  };

  render() {
    let {options, vacId} = this.props;
    // console.log(this.state);
    return (
      <>
        <div className='col-12 col-md-6 p-2'>
          <input type='text' name='languageName' className='w-100 border border-light rounded p-2'
                 value={this.state.languageName} onChange={this.onChangeInput} placeholder='Назва мови'></input>
        </div>
        <div className='col-12 col-md-6 p-2'>
          <Typeahead
            // className="border border-light rounded"
            id="typeahead"
            labelKey={(option) => `${option.vacancyName}`}
            options={options}
            onInputChange={this.handleInputChange}
            onChange={this.handleChange}
            placeholder="Назва вакансії"
          />
        </div>
        <input type="submit" value="Зберегти" className='btn btn-pill btn-success text-right m-2' onClick={ ()=>
        {(!vacId && (this.addLang(this.state))) || (vacId && this.changeLang(this.state, vacId))}
        }/>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    languageName: state.languageName,
    vacancyId: state.vacancyId,
  };
};
export default (connect(mapStateToProps)(SelectVacancies));



