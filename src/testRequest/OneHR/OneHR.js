import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import API from '../../services/api';
import { getOneHR } from '../../store/hr/actions';

class OneVacancy extends React.Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		const { getOneHR } = this.props;
		getOneHR(id);
	}

	render() {
		const { user } = this.props;
		return (
			<>
				{user && (
					<div key={user.result._id} id={user.result._id} className="vacancy">
						<div className="vacancy-flex">
							<Link to="/hr" onClick={() => API.deleteHR(user.result._id)}>
								delete hr
							</Link>
							<button>hr</button>
						</div>
						<div className="vacancy-flex">
							<div>{user.result.name}</div>
							<div>{user.result.phone}</div>
						</div>
					</div>
				)}
			</>
		);
	}
}

const mapStateToProps = ({ hr }) => {
	return {
		user: hr.user,
		error: hr.error,
	};
};

const mapDispatchToProps = {
	getOneHR,
};

export default connect(mapStateToProps, mapDispatchToProps)(OneVacancy);
