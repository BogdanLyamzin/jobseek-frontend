import React from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';
import axios from 'axios';
import { connect } from 'react-redux';

class SelectLanguages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skillName: '',
      categoryId: '',
    };
  }
  handleInputChange(input) {
      // console.log("value", input)
  }
  changeSkill (state, id) {
    axios.put(`http://localhost:5000/skills/${id}`, { skillName: state.skillName, categoryId: state.categoryId });
  }
  addSkill (state) {
    axios.post(`http://localhost:5000/skills`, { skillName: state.skillName, categoryId: state.categoryId })
      .then( data => console.log(data))
      .catch( err => console.log(err));
  }
  handleChange = (selectedOptions) => {
    let { categoryId } = this.state;
    let {options} = this.props;
    let lang = options.map( item1 => item1.categoryName);
    if( (categoryId === '') || (lang.find(item => item === selectedOptions)) ) {
      this.setState( {categoryId: selectedOptions[0]._id});
    }
  };
  onChangeInput = (event) => {
    const {name} = event.target;
    this.setState( { [name]: event.target.value } );
  };

  render() {
    let {options, skillId} = this.props;

    return (
      <>
        <div className='col-12 col-md-6 p-2'>
          <input type='text' name='skillName' className='w-100 border border-light rounded p-2'
                 value={this.state.skillName} onChange={this.onChangeInput} placeholder='Назва навички'></input>
        </div>
        <div className='col-12 col-md-6 p-2'>
          <Typeahead
            id="typeahead"
            labelKey={(option) => `${option.categoryName}`}
            options={options}
            onInputChange={this.handleInputChange}
            onChange={this.handleChange}
            placeholder="Назва категорії"
          />
        </div>
        <input type="submit" value="Зберегти" className='btn btn-pill btn-success text-right m-2' onClick={ ()=>
        {(!skillId && (this.addSkill(this.state))) || (skillId && this.changeSkill(this.state, skillId));}
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



