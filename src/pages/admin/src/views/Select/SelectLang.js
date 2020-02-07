import React from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';
import axios from 'axios';
import { connect } from 'react-redux';

class SelectLanguages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skillName: '',
      languageId: '',
    };
  }
  handleInputChange(input) {
      // console.log("value", input)
  }
  changeSkill (state, id) {
    axios.put(`http://localhost:4000/skills/${id}`, { skillName: state.skillName, languageId: state.languageId });
  }
  addSkill (state) {
    axios.post(`http://localhost:4000/skills`, { skillName: state.skillName, languageId: state.languageId })
      .then( data => console.log(data))
      .catch( err => console.log(err));
  }
  handleChange = (selectedOptions) => {
    let { languageId } = this.state;
    let {options} = this.props;
    let lang = options.map( item1 => item1.languageName);
    if( (languageId === '') || (lang.find(item => item === selectedOptions)) ) {
      this.setState( {languageId: selectedOptions[0]._id});
    }
  };
  onChangeInput = (event) => {
    const name = event.target.name;
    this.setState( { [name]: event.target.value } );
  };

  render() {
    let {options, skillId} = this.props;
    // console.log(skillId);
    return (
      <>
        <div className='col-12 col-md-6 p-2'>
          <input type='text' name='skillName' className='w-100 border border-light rounded p-2'
                 value={this.state.skillName} onChange={this.onChangeInput} placeholder='Назва навички'></input>
        </div>
        <div className='col-12 col-md-6 p-2'>
          <Typeahead
            id="typeahead"
            labelKey={(option) => `${option.languageName}`}
            options={options}
            onInputChange={this.handleInputChange}
            onChange={this.handleChange}
            placeholder="Назва мови програмування"
          />
        </div>
        <input type="submit" value="Зберегти" className='btn btn-pill btn-success text-right m-2' onClick={ ()=>
        {(!skillId && (this.addSkill(this.state))) || (skillId && this.changeSkill(this.state, skillId))}
        }/>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    skillName: state.skillName,
    languageId: state.languageId,
  };
};
export default (connect(mapStateToProps)(SelectLanguages));



