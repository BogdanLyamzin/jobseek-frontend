import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAllHR } from '../../store/hr/actions';

class AllHR extends React.Component {
	componentDidMount() {
		const { getAllHR } = this.props;
		getAllHR();
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
										<div>{elem.name}</div>
										<div>{elem.phone}</div>
									</div>
									<div className="vacancy-flex">
										{/* <input type="hidden" value={elem._id} /> */}
										<button>remove</button>
										<Link to={`/hr/${elem._id}`}>Details</Link>
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

const mapStateToProps = ({ hr }) => {
	return {
		user: hr.user,
		error: hr.error,
	};
};

const mapDispatchToProps = {
	getAllHR,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllHR);
