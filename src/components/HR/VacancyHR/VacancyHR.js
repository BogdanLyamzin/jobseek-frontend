import React from 'react';
import { useTranslation } from 'react-i18next';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import useStyles from './styles';
import Link from '../../../shared/Link';
import PageWrap from '../../../shared/PageWrap';
import VacancyByHR from '../../Vacancy/VacancyByHR';

const VacancyHR = () => {
	const classes = useStyles();
	const { t } = useTranslation();

	return (
		<PageWrap title={t('MY_VACANCIES')}>
			<div className={classes.hrVacancy}>
				<Link to="/hr/vacancyAdd" className={classes.linkAddVacancy}>
					<AddCircleOutlineIcon className={classes.linkAddVacancyDark} />
					{t('ADD_VACANCY')}
				</Link>
				<VacancyByHR />
			</div>
		</PageWrap>
	);
};

export default VacancyHR;
