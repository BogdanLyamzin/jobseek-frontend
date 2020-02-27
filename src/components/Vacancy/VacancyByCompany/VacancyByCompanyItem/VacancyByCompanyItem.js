import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import { useTranslation } from 'react-i18next';
import getDate from '../../../../utils/getDate';

const useStyles = makeStyles(theme => ({
	root: {},
	card: {
		width: '100%',
		marginBottom: 20,
	},
	vacancyName: {
		display: 'flex',
		justifyContent: 'center',
		fontSize: 25,
		fontWeight: 'bold',
		marginBottom: 30,
	},

	info: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		fontSize: 16,
		fontWeight: 500,
	},
	description: {
		fontSize: 16,
		fontWeight: 500,
		marginTop: 30,
	},
}));

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
	description,
	active,
	date,
}) => {
	const classes = useStyles();
	const { t } = useTranslation();

	return (
		<Card className={classes.card} id={_id}>
			<CardContent>
				<div className={classes.vacancyName}>
					<div>{vacancyName}</div>
				</div>
				<div className={classes.info}>
					<div>
						<div>
							{t('CATEGORY')}: {category}{' '}
						</div>
						<div>
							{t('ENGLISH_LEVEL')}: {englishLevel}
						</div>
						<div>
							{t('SKILLS')}: {skills.map(elem => elem.name).join(', ')}
						</div>
					</div>
					<div>
						<div>{employmentType}</div>
						<div> {active}</div>
					</div>
					<div>
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
				<div>
					<div className={classes.description}>{t('VACANCY_DESCRIPTION')}:</div>
					{description}
				</div>
			</CardContent>
		</Card>
	);
};
export default VacancyByCompanyItem;
