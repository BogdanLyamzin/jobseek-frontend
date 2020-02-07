import React, { Component } from 'react';
import axios from 'axios';

class VacSphereName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sphere: '',
    };
  }
  componentDidMount() {
    let {sphereId} = this.props;
    axios.get(`http://localhost:4000/spheres/${sphereId}`)
      .then(data => {
        this.setState(
          {sphere: data.data.result.sphereName}
        )
      })
      .catch(err => console.log(err));
  }

  render() {
    let { sphere } = this.state;
    return (
      <p>Професійна сфера: {sphere || 'не додано'}</p>
    )
  }
}

export default VacSphereName;
