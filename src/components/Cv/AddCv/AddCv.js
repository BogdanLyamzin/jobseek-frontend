import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';
import { Link, Switch, Route } from 'react-router-dom';

import useStyles from './styles';
import CommonInfo from './CommonInfo';
import SkillsInfo from './SkillsInfo';
import Title from '../../../shared/Title';
import SwitchControl from '../../../shared/Switch';

const AddCv = () => {
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
					<Link to="/candidate/cvAdd" className={classes.addvacancyMenuLink}>
						{t('COMMON_INFO')}
					</Link>
					<Link
						to="/candidate/cvAdd/skills"
						className={classes.addvacancyMenuLink}
					>
						{t('SKILLS')}
					</Link>
				</div>
				<div className={classes.addvacancyRoutes}>
					<Switch>
						<Route exact path="/candidate/cvAdd">
							<CommonInfo />
						</Route>
						<Route path="/candidate/cvAdd/skills">
							<SkillsInfo isActive={isActive} />
						</Route>
					</Switch>
				</div>
			</Paper>
		</Container>
	);
};

export default AddCv;
