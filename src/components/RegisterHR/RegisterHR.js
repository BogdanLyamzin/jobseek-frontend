import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { Translation } from 'react-i18next';
import useStyles from './styles';
import FormHRRegister from './FormHRRegister/FormHRRegister';
import Vacancy2 from './Vacancy2/Vacancy2';
import Title from '../../shared/Title/Title';

const RegisterHR = () => {
	const classes = useStyles();
	const [hiddenForm, setHiddenForm] = useState(false);
	const updateHRInfo = e => {
		e.preventDefault();
		setHiddenForm(!hiddenForm);
	};

	return (
		<Translation>
			{t => (
				<div className={classes.container}>
					<div className={classes.addvacancy}>
						<Title text={t('COMPANY_PROFILE')} />
						<div className={classes.addvacancyMain}>
							<div className={classes.addvacancyMenu}>
								<Link
									to="/kostya/hrs/vacancy"
									className={classes.addvacancyMenuLink}
								>
									{t('COMPANY_VACANCIES')}
								</Link>
								<Link to="/kostya/hrs/" className={classes.addvacancyMenuLink}>
									{t('HR_MANAGERS')}
								</Link>
							</div>

							<div className={classes.addvacancyRoutes}>
								<Switch>
									<Route exact path="/kostya/hrs/">
										<FormHRRegister
											hidden={hiddenForm}
											updateHRInfo={updateHRInfo}
										/>
									</Route>
									<Route path="/kostya/hrs/vacancy">
										<Vacancy2 />
									</Route>
								</Switch>
							</div>
						</div>
					</div>
				</div>
			)}
		</Translation>
	);
};

export default RegisterHR;
