import React, { Component } from 'react';
import axios from 'axios';
// import { getOneSphere } from '../../../../../store/admin/actions/sphereActions';
// import {connect} from "react-redux";

class ProfSphereName extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sphere: '',
		};
	}
	componentDidMount() {
		let { sphereId } = this.props;
		axios
			.get(`http://localhost:5000/spheres/${sphereId}`)
			.then(data => {
				this.setState({ sphere: data.data.result.sphereName });
			})
			.catch(err => err);
	}

	render() {
		let { sphere } = this.state;
		return <p>Професійна сфера: {sphere || 'не додано'}</p>;
	}
}

// const mapStateToProps = (state) => {
//   return {
//     sphereChange: state.admin.sphereChange,
//     error: state.admin.error,
//   };
// };

// const mapDispatchToProps =  {
//     getOneSphere,
// };

// const enhancer = connect(
// mapStateToProps,
// mapDispatchToProps,
// );

export default ProfSphereName;
