import React from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';
import axios from 'axios';
import { connect } from 'react-redux';

class SelectVacancies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: '',
      parentId: '',
    };
  }
  handleInputChange(input) {
      // console.log("value", input)
  }
  changeCategory (state, id) {
    axios.put(`http://localhost:5000/categories/${id}`, { categoryName: state.categoryName, parentId: state.parentId });
  }
  addCategory (state) {
    axios.post(`http://localhost:5000/categories`, { categoryName: state.categoryName, parentId: state.parentId })
      .then( data => console.log(data))
      .catch( err => console.log(err));
  }
  handleChange = (selectedOptions) => {
    let { parentId } = this.state;
    let {options} = this.props;
    let categ = options.map( item1 => item1.vacancyName || item1.categoryName);
    if( (parentId === '') || (categ.find(item => item === selectedOptions)) ) {
      this.setState( {parentId: selectedOptions[0]._id});
    }
  };
  onChangeInput = (event) => {
    const {name} = event.target;
    this.setState( { [name]: event.target.value } );
  };

  render() {
    let {options, catId} = this.props;
    // console.log(this.state);
    return (
      <>
        <div className='col-12 col-md-6 p-2'>
          <input type='text' name='categoryName' className='w-100 border border-light rounded p-2'
                 value={this.state.categoryName} onChange={this.onChangeInput} placeholder='Назва категорії'></input>
        </div>
        <div className='col-12 col-md-6 p-2'>
          <Typeahead
            id="typeahead"
            labelKey={(option) => `${option.vacancyName || option.categoryName}`}
            options={options}
            onInputChange={this.handleInputChange}
            onChange={this.handleChange}
            placeholder="Назва вакансії чи батьківської категорії"
          />
        </div>
        <input type="submit" value="Зберегти" className='btn btn-pill btn-success text-right m-2' onClick={ ()=>
        {(!catId && (this.addCategory(this.state))) || (catId && this.changeCategory(this.state, catId))}
        }/>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    categoryName: state.categoryName,
    parentId: state.parentId,
  };
};
export default (connect(mapStateToProps)(SelectVacancies));



