import React, { Component } from 'react';
import axios from 'axios';

class SkillCategName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
    };
  }
  componentDidMount() {
    let {categoryId} = this.props;
    axios.get(`http://localhost:5000/categories/${categoryId}`)
      .then(data => {
        this.setState(
          {category: data.data.result.categoryName}
        );
      })
      .catch(err => console.log(err));
  }

  render() {
    let { category } = this.state;
    return (
      <p>Категорія: {category || 'не додано'}</p>
    );
  }
}

export default SkillCategName;
