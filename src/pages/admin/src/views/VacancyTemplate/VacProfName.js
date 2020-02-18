import React, { Component } from 'react';
import axios from 'axios';

class VacProfName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profession: '',
    };
  }
  componentDidMount() {
    let {sphereId} = this.props;
    axios.get(`http://localhost:5000/professions/${sphereId}`)
      .then(data => {
        this.setState(
          {profession: data.data.result.professionName}
        );
      })
      .catch(err => console.log(err));
  }

  render() {
    let { profession } = this.state;
    return (
      <p>Професія: {profession || 'не додано'}</p>
    );
  }
}

export default VacProfName;
