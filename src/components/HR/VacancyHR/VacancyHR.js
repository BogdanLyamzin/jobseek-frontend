import React from 'react';
import { useTranslation } from 'react-i18next';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import useStyles from './styles';
import Title from '../../../shared/Title';
import Link from '../../../shared/Link';
import VacancyByHR from '../../Vacancy/VacancyByHR';

const VacancyHR = () => {
	const classes = useStyles();
	const { t } = useTranslation();

	return (
		<Container>
			<Title>{t('MY_VACANCIES')}</Title>
			<Paper className={classes.root}>
				<div className={classes.hrVacancy}>
					<Link to="/hr/vacancyAdd" className={classes.linkAddVacancy}>
						<AddCircleOutlineIcon className={classes.linkAddVacancyDark} />
						{t('ADD_VACANCY')}
					</Link>
					<VacancyByHR />
				</div>
			</Paper>
		</Container>
	);
};

export default VacancyHR;
