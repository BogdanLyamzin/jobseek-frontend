import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import useStyles from './styles';
import CommonInfo from './CommonInfo';
import SkillsInfo from './SkillsInfo';
import Link from '../../../shared/Link';
import Text from '../../../shared/Text';
import PageWrap from '../../../shared/PageWrap';
import SwitchControl from '../../../shared/Switch';
import withLanguage from '../../../hoc/withLanguage';
import { deleteInfo } from '../../../store/vacancy/actions';

const AddVacancy = ({ t, deleteInfo }) => {
	const classes = useStyles();
	const [isActive, setIsActive] = useState(true);

	useEffect(() => {
		return () => {
			deleteInfo();
		};
	}, [deleteInfo]);

	return (
		<PageWrap title={t('CREATE_VACANCY')}>
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
				<Link to="/hr/addVacancy" className={classes.addvacancyMenuLink}>
					{t('COMMON_INFO')}
				</Link>
				<Link to="/hr/addVacancy/skills" className={classes.addvacancyMenuLink}>
					{t('SKILLS')}
				</Link>
			</div>
			<div className={classes.addvacancyRoutes}>
				<Switch>
					<Route exact path="/hr/addVacancy">
						<CommonInfo />
					</Route>
					<Route path="/hr/addVacancy/skills">
						<SkillsInfo isActive={isActive} />
					</Route>
				</Switch>
			</div>
		</PageWrap>
	);
};

export default compose(connect(null, { deleteInfo }), withLanguage)(AddVacancy);
