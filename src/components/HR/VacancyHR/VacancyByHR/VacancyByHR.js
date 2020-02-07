import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

import './VacancyByHR.css';
import API from '../../../../services/api';
import getDate from '../../../../utils/getDate';
import FormControlLabel from './FormControlLabel';
import { getAllVacancy } from '../../../../store/vacancy/actions';

const VacancyByHR = ({ vacancy, getAllVacancy }) => {
	useEffect(() => {
		getAllVacancy();
	}, [getAllVacancy]);

	const deleteVacancy = id => {
		API.deleteVacancy(id);
		document.getElementById(id).remove();
	};

	return (
		<div className="vacancy-list">
			{vacancy && Array.isArray(vacancy.result) && (
				<>
					{vacancy.result.map(elem => {
						return (
							<div key={elem._id} id={elem._id} className="vacancy">
								<div className="vacancy-flex">
									<div className="vacancy-name">{elem.vacancyName}</div>
									<div>
										<FormControlLabel
											isActive={elem.active}
											vacancy={elem._id}
										/>
									</div>
								</div>
								<div className="vacancy-flex">
									<div className="vacancy-country">
										{elem.city}, {elem.country}
									</div>
									<DeleteOutlineOutlinedIcon
										className="vacancy-delete"
										onClick={() => deleteVacancy(elem._id)}
									/>
								</div>
								<div className="vacancy-flex">
									<div className="vacancy-date">
										Опубліковано {getDate(elem.date)}
									</div>
									<Link to={`/admin/updateVacancy/${elem._id}`}>
										<CreateOutlinedIcon className="vacancy-details" />
									</Link>
								</div>
							</div>
						);
					})}
				</>
			)}
		</div>
	);
};

const mapStateToProps = ({ vacancy }) => {
	return {
		vacancy: vacancy.vacancy,
	};
};

const mapDispatchToProps = {
	getAllVacancy,
};

export default connect(mapStateToProps, mapDispatchToProps)(VacancyByHR);
