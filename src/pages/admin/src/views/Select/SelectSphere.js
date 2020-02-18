import React from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';
import axios from 'axios';
import { connect } from 'react-redux';

class SelectSpheres extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      professionName: '',
      sphereId: '',
    };
  }
  handleInputChange(input) {
    // console.log("value", input)
  }
  changeProfession (state, id) {
    axios.put(`http://localhost:5000/professions/${id}`, { professionName: state.professionName, sphereId: state.sphereId });
  }
  addProfession (state) {
    axios.post(`http://localhost:5000/professions`, { professionName: state.professionName, sphereId: state.sphereId })
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
    const {name} = event.target;
    this.setState( { [name]: event.target.value } );
  };

  render() {
    let {options, profId} = this.props;
    return (
      <>
        <div className='col-12 col-md-6 p-2'>
          <input type='text' name='professionName' className='w-100 border border-light rounded p-2'
                 value={this.state.professionName} onChange={this.onChangeInput} placeholder='Назва професії'></input>
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
        {(!profId && (this.addProfession(this.state))) || (profId && this.changeProfession(this.state, profId))}
        }/>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    professionName: state.professionName,
    sphereId: state.sphereId,
  };
};
export default (connect(mapStateToProps)(SelectSpheres));
