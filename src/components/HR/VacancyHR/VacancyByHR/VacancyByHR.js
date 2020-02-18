import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Translation } from 'react-i18next';
import CreateOutlined from '@material-ui/icons/CreateOutlined';

import useStyles from './styles';
import API from '../../../../services/hrApi';
import getDate from '../../../../utils/getDate';
import FormControlLabel from './FormControlLabel';
import { getVacancyByFilter } from '../../../../store/vacancy/actions';
import DeleteIconWithModal from '../../../../shared/DeleteIconWithModal';

const VacancyByHR = ({ vacancy, getVacancyByFilter, user }) => {
	const classes = useStyles();
	useEffect(() => {
		if (user && user._id) getVacancyByFilter(`hrId=${user._id}`);
	}, [getVacancyByFilter, user]);

	const deleteVacancy = id => {
		API.deleteVacancy(id);
		document.getElementById(id).remove();
	};

	return (
		<Translation>
			{t => (
				<div className={classes.vacancyList}>
					{vacancy && Array.isArray(vacancy.result) && (
						<>
							{vacancy.result.map(elem => {
								return (
									<div key={elem._id} id={elem._id} className={classes.vacancy}>
										<div className={classes.vacancyFlex}>
											<div className={classes.vacancyName}>
												{elem.vacancyName}
											</div>
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
												text={`${t('DELETE_MESSAGE')}?`}
												handleDelete={() => deleteVacancy(elem._id)}
											/>
										</div>
										<div className={classes.vacancyFlex}>
											<div className={classes.vacancyDate}>
												{t('POSTED')} {getDate(elem.date)}
											</div>
											<Link to={`/hr/updateVacancy/${elem._id}`}>
												<CreateOutlined className={classes.vacancyIcon} />
											</Link>
										</div>
									</div>
								);
							})}
						</>
					)}
				</div>
			)}
		</Translation>
	);
};

const mapStateToProps = ({ vacancy, hr }) => {
	return {
		user: hr.user,
		vacancy: vacancy.vacancyList,
	};
};

const mapDispatchToProps = {
	getVacancyByFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(VacancyByHR);
