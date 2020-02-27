import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import { Translation } from 'react-i18next';
import getDate from '../../../../utils/getDate';

const useStyles = makeStyles(theme => ({
	root: {},
	card: {
		width: '100%',
		marginBottom: 20,
	},
	name: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	hr: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 40,
	},
	avatar: {
		marginLeft: 40,
		marginRight: 20,
	},

	icon: {
		marginLeft: 50,
		marginRight: 20,
	},
	info: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
}));

const VacancyByCompanyItem = ({
	_id,
	vacancyName,
	country,
	city,
	salary,
	englishLevel,
	category,
	employmentType,
	description,
	active,
	date,
}) => {
	const classes = useStyles();

	return (
		<Translation>
			{t => (
				<Card className={classes.card} id={_id}>
					<CardContent>
						<div className={classes.name}>
							<div className={classes.hr}>
								<div>{vacancyName}</div>
							</div>
						</div>
						<div className={classes.info}>
							<div>
								<div> {category} </div>
								<div>
									{t('ENGLISH_LEVEL')}: {englishLevel}
								</div>
								<div>
									{t('SALARY')}: {salary}
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
									{' '}
									{country},{city}{' '}
								</div>
								<div>
									{t('REGISTERED')}: {getDate(date)}
								</div>
							</div>
						</div>
						<div>
							<div className={classes.contacts}>
								{t('VACANCY_DESCRIPTION')}:
							</div>
							{description}
						</div>
					</CardContent>
				</Card>
			)}
		</Translation>
	);
};
export default VacancyByCompanyItem;
