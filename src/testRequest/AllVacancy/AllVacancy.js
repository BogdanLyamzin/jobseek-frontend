import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './AllVacancy.css';
import { getAllVacancy } from '../../store/vacancy/actions';

class AllVacancy extends React.Component {
	componentDidMount() {
		const { getAllVacancy } = this.props;
		getAllVacancy();
	}

	render() {
		const { user } = this.props;

		return (
			<div>
				{(!user || !Array.isArray(user.result)) && <>Загрузка...</>}

				{user && Array.isArray(user.result) && (
					<>
						{user.result.map(elem => {
							return (
								<div key={elem._id} id={elem._id} className="vacancy">
									<div className="vacancy-flex">
										<div>{elem.vacancyName}</div>
										<div>{elem.salary}</div>
									</div>
									<div className="vacancy-flex">
										{/* <input type="hidden" value={elem._id} /> */}
										<button>remove vacancy</button>
										<Link to={`/vacancy/${elem._id}`}>Details</Link>
									</div>
								</div>
							);
						})}
					</>
				)}
			</div>
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
	getAllVacancy,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllVacancy);
