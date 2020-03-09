import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';
import FormHRRegister from './FormHRRegister/FormHRRegister';
import VacancyByCompany from '../../Vacancy/VacancyByCompany/VacancyByCompany';

import PageWrap from '../../../shared/PageWrap';

const RegisterHR = () => {
	const classes = useStyles();
	const { t } = useTranslation();
	const [hiddenForm, setHiddenForm] = useState(false);
	const updateHRInfo = e => {
		e.preventDefault();
		setHiddenForm(!hiddenForm);
	};

	return (
		<PageWrap title={t('COMPANY_PROFILE')}>
			<div className={classes.addCompanyMenu}>
				<Link to="/company/hrs/vacancy" className={classes.addCompanyMenuLink}>
					{t('COMPANY_VACANCIES')}
				</Link>
				<Link to="/company/hrs" className={classes.addCompanyMenuLink}>
					{t('HR_MANAGERS')}
				</Link>
			</div>
			<div className={classes.addCompanyRoutes}>
				<Switch>
					<Route exact path="/company/hrs">
						<FormHRRegister hidden={hiddenForm} updateHRInfo={updateHRInfo} />
					</Route>
					<Route path="/company/hrs/vacancy">
						<VacancyByCompany />
					</Route>
				</Switch>
			</div>
		</PageWrap>
	);
};

export default RegisterHR;
