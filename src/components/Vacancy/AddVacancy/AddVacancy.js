import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Switch, Route } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import useStyles from './styles';
import CommonInfo from './CommonInfo';
import SkillsInfo from './SkillsInfo';
import Title from '../../../shared/Title';
import SwitchControl from '../../../shared/Switch';

const AddVacancy = () => {
	const { t } = useTranslation();
	const classes = useStyles();
	const [isActive, setIsActive] = useState(true);

	return (
		<Container>
			<Title text={t('CREATE_VACANCY')} />
			<Paper className={classes.root}>
				<div className={classes.addvacancyHead}>
					<div className={classes.addvacancyIsActive}>
						<div>{t('ACTIVITY_VACANCIES')}</div>
						<SwitchControl setIsActive={setIsActive} isActive={isActive} />
					</div>
				</div>

				<div className={classes.addvacancyMenu}>
					<Link to="/hr/vacancyAdd" className={classes.addvacancyMenuLink}>
						{t('COMMON_INFO')}
					</Link>
					<Link
						to="/hr/vacancyAdd/skills"
						className={classes.addvacancyMenuLink}
					>
						{t('SKILLS')}
					</Link>
				</div>
				<div className={classes.addvacancyRoutes}>
					<Switch>
						<Route exact path="/hr/vacancyAdd">
							<CommonInfo />
						</Route>
						<Route path="/hr/vacancyAdd/skills">
							<SkillsInfo isActive={isActive} />
						</Route>
					</Switch>
				</div>
			</Paper>
		</Container>
	);
};

export default AddVacancy;
