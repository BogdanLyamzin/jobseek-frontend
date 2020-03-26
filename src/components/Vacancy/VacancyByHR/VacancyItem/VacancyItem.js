import React from 'react';
import { useTranslation } from 'react-i18next';

import useStyles from '../styles';
import Link from '../../../../shared/Link';
import Text from '../../../../shared/Text';
import getDate from '../../../../utils/getDate';
import FormControlLabel from './FormControlLabel';
import CreateOutlined from '../../../../shared/CreateOutlinedIcon';
import DeleteIconWithModal from '../../../../shared/DeleteIconWithModal';
import arrToStringSkill from '../../../../utils/transformType/arrToStringSkills';

const VacancyItem = ({ elem, deleteVacancies }) => {
	const classes = useStyles();
	const { t } = useTranslation();

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
						handleDelete={() => deleteVacancies(elem._id)}
					/>
				</div>
			</div>
			<div className={classes.vacancyFlex}>
				<Text className={classes.vacancyName}>
					{elem.vacancyName.vacancyName}
				</Text>
			</div>
			<Text className={`${classes.vacancyDate} ${classes.vacancyFlex}`}>
				{t('SKILLS')}: {arrToStringSkill(elem.skills)}
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

export default React.memo(VacancyItem);
