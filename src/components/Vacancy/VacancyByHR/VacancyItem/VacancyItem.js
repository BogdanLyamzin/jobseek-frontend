import React from 'react';
import { Translation } from 'react-i18next';
import CreateOutlined from '@material-ui/icons/CreateOutlined';

import useStyles from '../styles';
import API from '../../../../services/api';
import Link from '../../../../shared/Link';
import getDate from '../../../../utils/getDate';
import FormControlLabel from './FormControlLabel';
import DeleteIconWithModal from '../../../../shared/DeleteIconWithModal';

const VacancyItem = ({ elem }) => {
	const classes = useStyles();

	const deleteVacancy = id => {
		API.delete(`vacancies/${id}`);
		document.getElementById(id).remove();
	};

	return (
		<Translation>
			{t => (
				<div id={elem._id} className={classes.vacancy}>
					<div className={classes.vacancyFlex}>
						<div className={classes.vacancyName}>{elem.vacancyName}</div>
						<div>
							<FormControlLabel isActive={elem.active} id={elem._id} />
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
			)}
		</Translation>
	);
};

export default VacancyItem;
