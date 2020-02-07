import React, { Component } from 'react';
import axios from 'axios';

class LangVacancyName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vac: '',
    };
  }
  componentDidMount() {
    let {vacanId} = this.props;
    axios.get(`http://localhost:4000/vacancies/${vacanId}`)
      .then(data => {
        // console.log(data.data.result);
        this.setState(
          {vac: data.data.result.vacancyName}
        )
      })
      .catch(err => console.log(err));
  }

  render() {
    let { vac } = this.state;
    return (
      <p>Вакансія: {vac || 'не додано'}</p>
    )
  }
}

export default LangVacancyName;

