import React, { Component } from 'react';
import axios from 'axios';

class SkillLangName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: '',
    };
  }
  componentDidMount() {
    let {langId} = this.props;
    axios.get(`http://localhost:4000/languages/${langId}`)
      .then(data => {
        this.setState(
          {lang: data.data.result.languageName}
        )
      })
      .catch(err => console.log(err));
  }

  render() {
    let { lang } = this.state;
    return (
      <p>Мова програмування: {lang || 'не додано'}</p>
    )
  }
}

export default SkillLangName;
