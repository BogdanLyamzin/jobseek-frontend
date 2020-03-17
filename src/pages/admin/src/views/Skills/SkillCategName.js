import React, { Component } from 'react';
import axios from 'axios';
// import {getOneCategory} from "../../../../../store/admin/actions/categoryActions";
// import {deleteSkill} from "../../../../../store/admin/actions/skillActions";
// import {connect} from "react-redux";

class SkillCategName extends Component {
	constructor(props) {
		super(props);
		this.state = {
			category: '',
		};
	}
	componentDidMount() {
		let { categoryId } = this.props;
		// this.props.getOneCategory(categoryId);
		axios
			.get(`http://localhost:5000/categories/${categoryId}`)
			.then(data => {
				this.setState({ category: data.data.result.categoryName });
			})
			.catch(err => err);
	}

	render() {
		let { category } = this.state;
		return <p>Категорія: {category || 'не додано'}</p>;
	}
}

// const mapStateToProps = (state) => {
//   return {
//     error: state.admin.error,
//   };
// };
// const mapDispatchToProps = {
//   getOneCategory,
// };
// const enhancer = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// );
//
// export default enhancer(SkillCategName);
export default SkillCategName;
