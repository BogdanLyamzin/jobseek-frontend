import React from 'react';
import useStyles from '../styles';
import { useTranslation } from 'react-i18next';
import getDate from '../../../../utils/getDate';

const VacancyByCompanyItem = ({
	_id,
	vacancyName,
	country,
	city,
	salary,
	englishLevel,
	skills,
	category,
	employmentType,
	active,
	date,
}) => {
	const classes = useStyles();
	const { t } = useTranslation();

	return (
		<div className={classes.vacancyCard}>
			<div className={classes.vacancyName}>
				{vacancyName}
				<div className={classes.info}>
					<div>
						<div>
							{t('CATEGORY')}: {category}{' '}
						</div>
						<div>
							{t('SKILLS')}: {skills.map(elem => elem.name).join(', ')}
						</div>
						<div>
							{t('ENGLISH_LEVEL')}: {englishLevel}
						</div>
						<div>
							<div>{employmentType}</div>
							<div> {active}</div>
						</div>
						<div>
							{t('SALARY')}: {salary}
						</div>
					</div>
					<div>
						<div>
							{country}, {city}
						</div>
						<div>
							{t('REGISTERED')}: {getDate(date)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default VacancyByCompanyItem;
