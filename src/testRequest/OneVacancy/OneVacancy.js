import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import API from '../../services/api';
import { getOneVacancy } from '../../store/vacancy/actions';

class OneVacancy extends React.Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		const { getOneVacancy } = this.props;
		getOneVacancy(id);
	}

	render() {
		const { user } = this.props;
		return (
			<>
				{user && (
					<div key={user.result._id} id={user.result._id} className="vacancy">
						<div className="vacancy-flex">
							<Link
								to="/vacancy"
								onClick={() => API.deleteVacancy(user.result._id)}
							>
								delete vacancy
							</Link>
							<button>vacancy</button>
						</div>
						<div className="vacancy-flex">
							<div>{user.result.vacancyName}</div>
							<div>{user.result.salary}</div>
						</div>
					</div>
				)}
			</>
		);
	}
}

const mapStateToProps = ({ vacancy }) => {
	return {
		user: vacancy.vacancy,
		error: vacancy.error,
	};
};

const mapDispatchToProps = {
	getOneVacancy,
};

export default connect(mapStateToProps, mapDispatchToProps)(OneVacancy);
