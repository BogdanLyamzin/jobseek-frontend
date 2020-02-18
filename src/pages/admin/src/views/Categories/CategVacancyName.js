import React, { Component } from 'react';
import axios from 'axios';

class CategVacancyName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vac: '',
      cat: '',
    };
  }
  componentDidMount() {
    let {parentId} = this.props;
    axios.get(`http://localhost:5000/vacancytemplate/${parentId}`)
      .then(data => {
        this.setState(
          {vac: data.data.result.vacancyName}
        );
      })
      .catch(err => console.log(err));
    axios.get(`http://localhost:4000/categories/${parentId}`)
      .then(data => {
        this.setState(
          {cat: data.data.result.categoryName}
        );
      })
      .catch(err => console.log(err));
  }

  render() {
    let { vac, cat } = this.state;
    return (
      <>
      { (vac !== '') && (<p>Вакансія: {vac || 'не додано'}</p>) }
      { (cat !== '') && (<p>Батьківська категорія: {cat || 'не додано'}</p>) }
      { (cat === '' && vac === '') && (<p>Батьківська категорія: не додано</p>) }
      </>
    );
  }
}

export default CategVacancyName;

