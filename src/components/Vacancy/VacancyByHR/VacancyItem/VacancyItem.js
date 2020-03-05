import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import useStyles from '../styles';
import Link from '../../../../shared/Link';
import Text from '../../../../shared/Text';
import getDate from '../../../../utils/getDate';
import FormControlLabel from './FormControlLabel';
import CreateOutlined from '../../../../shared/CreateOutlinedIcon';
import { deleteVacancy } from '../../../../store/vacancy/actions';
import DeleteIconWithModal from '../../../../shared/DeleteIconWithModal';

const VacancyItem = ({ elem, deleteVacancy }) => {
	const classes = useStyles();
	const { t } = useTranslation();

	const deleteV = id => {
		deleteVacancy(id);
	};

	return (
		<div id={elem._id} className={classes.vacancy}>
			<div className={classes.vacancyFlex}>
				<Link to={`/hr/vacancy/${elem._id}`} className={classes.link}>
					{t('CANDIDATE')}...
				</Link>
				<div className={classes.vacancyFlex}>
					<FormControlLabel isActive={elem.active} id={elem._id} />
					<Link
						to={`/hr/updateVacancy/${elem._id}`}
						className={classes.marginRight}
					>
						<CreateOutlined className={classes.vacancyIcon} />
					</Link>
					<DeleteIconWithModal
						text={`${t('DELETE_MESSAGE')}?`}
						handleDelete={() => deleteV(elem._id)}
					/>
				</div>
			</div>
			<div className={classes.vacancyFlex}>
				<Text className={classes.vacancyName}>{elem.vacancyName}</Text>
			</div>
			<Text className={`${classes.vacancyDate} ${classes.vacancyFlex}`}>
				{t('SKILLS')}: {elem.skills.map(s => s.name).join(', ')}
			</Text>
			<div className={classes.vacancyFlex}>
				<Text className={classes.vacancyCountry}>
					{elem.city}, {elem.country}
				</Text>
				<Text className={classes.vacancyDate}>
					{t('POSTED')} {getDate(elem.date)}
				</Text>
			</div>
		</div>
	);
};

export default connect(null, { deleteVacancy })(VacancyItem);
