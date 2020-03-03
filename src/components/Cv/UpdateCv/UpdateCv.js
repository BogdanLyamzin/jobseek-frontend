import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';
import { Link, Switch, Route } from 'react-router-dom';

import CommonInfo from './CommonInfo';
import SkillsInfo from './SkillsInfo';
import Title from '../../../shared/Title';
import useStyles from '../AddCv/styles';
import { getOneCv } from '../../../store/cv/actions';

const UpdateCv = ({ match, getOneCv }) => {
	const classes = useStyles();
	const { t } = useTranslation();
	const { id } = match.params;

	useEffect(() => {
		getOneCv(id);
	}, [getOneCv, id]);

	return (
		<Container>
			<Title text={t('CHANGE_VACANCY')} />
			<Paper className={classes.root}>
				<div className={classes.addvacancyMenu}>
					<Link
						to={`/candidate/updateCv/${id}`}
						className={classes.addvacancyMenuLink}
					>
						{t('COMMON_INFO')}
					</Link>
					<Link
						to={`/candidate/updateCv/${id}/skills`}
						className={classes.addvacancyMenuLink}
					>
						{t('SKILLS')}
					</Link>
				</div>
				<div className={classes.addvacancyRoutes}>
					<Switch>
						<Route
							exact
							path="/candidate/updateCv/:id"
							component={CommonInfo}
						/>
						<Route path="/candidate/updateCv/:id/skills">
							<SkillsInfo id={id} />
						</Route>
					</Switch>
				</div>
			</Paper>
		</Container>
	);
};

const mapDispatchToProps = {
	getOneCv,
};

export default connect(null, mapDispatchToProps)(UpdateCv);
