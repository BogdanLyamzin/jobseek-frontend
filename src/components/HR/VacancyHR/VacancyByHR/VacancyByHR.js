import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

import useStyles from './styles';
import API from '../../../../services/api';
import getDate from '../../../../utils/getDate';
import FormControlLabel from './FormControlLabel';
import { getVacancyByFilter } from '../../../../store/vacancy/actions';
import DeleteIconWithModal from '../../../../shared/DeleteIconWithModal';

const VacancyByHR = ({ vacancy, getVacancyByFilter }) => {
	const classes = useStyles();
	useEffect(() => {
		getVacancyByFilter('hrId=5e3c361c657e122a841e88e4');
	}, [getVacancyByFilter]);

	const deleteVacancy = id => {
		API.deleteVacancy(id);
		document.getElementById(id).remove();
	};

	return (
		<div className={classes.vacancyList}>
			{vacancy && Array.isArray(vacancy.result) && (
				<>
					{vacancy.result.map(elem => {
						return (
							<div key={elem._id} id={elem._id} className={classes.vacancy}>
								<div className={classes.vacancyFlex}>
									<div className={classes.vacancyName}>{elem.vacancyName}</div>
									<div>
										<FormControlLabel
											isActive={elem.active}
											vacancy={elem._id}
										/>
									</div>
								</div>
								<div className={classes.vacancyFlex}>
									<div className={classes.vacancyCountry}>
										{elem.city}, {elem.country}
									</div>
									<DeleteIconWithModal
										text="Are you sure you want to delete?"
										handleDelete={() => deleteVacancy(elem._id)}
									/>
								</div>
								<div className={classes.vacancyFlex}>
									<div className={classes.vacancyDate}>
										Опубліковано {getDate(elem.date)}
									</div>
									<Link to={`/hr/updateVacancy/${elem._id}`}>
										<CreateOutlinedIcon className={classes.vacancyIcon} />
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
	getVacancyByFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(VacancyByHR);
