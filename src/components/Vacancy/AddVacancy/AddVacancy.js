import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';
import { Switch, Route } from 'react-router-dom';

import useStyles from './styles';
import CommonInfo from './CommonInfo';
import SkillsInfo from './SkillsInfo';
import Link from '../../../shared/Link';
import Text from '../../../shared/Text';
import Title from '../../../shared/Title';
import SwitchControl from '../../../shared/Switch';
import { deleteInfo } from '../../../store/vacancy/actions';

const AddVacancy = ({ deleteInfo }) => {
	const { t } = useTranslation();
	const classes = useStyles();
	const [isActive, setIsActive] = useState(true);

	useEffect(() => {
		return () => {
			deleteInfo();
		};
	}, [deleteInfo]);

	return (
		<Container>
			<Title>{t('CREATE_VACANCY')}</Title>
			<Paper className={classes.root}>
				<div className={classes.addvacancyHead}>
					<div className={classes.addvacancyIsActive}>
						<Text>{t('ACTIVITY_VACANCIES')}</Text>
						<SwitchControl
							onChange={() => setIsActive(!isActive)}
							active={isActive}
						/>
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

export default connect(null, { deleteInfo })(AddVacancy);
