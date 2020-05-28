import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Skills from './Skills';
import Link from 'shared/Link';
import Text from 'shared/Text';
import useStyles from './styles';
import CommonInfo from './CommonInfo';
import PageWrap from 'shared/PageWrap';
import SwitchControl from 'shared/Switch';
import withLanguage from 'hoc/withLanguage';
import { deleteInfo } from 'store/vacancy/actions';
import { ADD_LINKS } from 'utils/variables/hrLinks';

const AddVacancy = ({ t, deleteInfo }) => {
	const classes = useStyles();
	const [isActive, setIsActive] = useState(true);

	useEffect(() => {
		return () => deleteInfo();
	}, [deleteInfo]);

	return (
		<PageWrap title={t('CREATE_VACANCY')}>
			<div className={classes.addvacancyHead}>
				<Text>{t('ACTIVITY_VACANCIES')}</Text>
				<SwitchControl onChange={() => setIsActive(!isActive)} active={isActive} />
			</div>
			<div className={classes.addvacancyMenu}>
				{ADD_LINKS.map(e => (
					<Link key={e.to} to={e.to} className={classes.addvacancyMenuLink}>
						{t(e.text)}
					</Link>
				))}
			</div>
			<div className={classes.addvacancyRoutes}>
				<Route exact path="/hr/addVacancy" component={CommonInfo} />
				<Route path="/hr/addVacancy/skills" render={() => <Skills isActive={isActive} />} />
			</div>
		</PageWrap>
	);
};

export default compose(connect(null, { deleteInfo }), withLanguage)(AddVacancy);
