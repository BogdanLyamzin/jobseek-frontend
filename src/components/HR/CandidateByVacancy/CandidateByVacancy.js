import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import { Switch, Route, useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import useStyles from './styles';
import Title from '../../../shared/Title';
import HRVacancyMenu from './MenuHRVacancy';
import CandidateList from './CandidateList';
import SentOffersList from './SentOffersList';
import ReceivedOffersList from './ReceivedOffersList';
import { getOneVacancy } from '../../../store/vacancy/actions';

const CandidateByVacancy = ({ getOneVacancy, vacancy }) => {
	const classes = useStyles();
	const { t } = useTranslation();
	const { id } = useParams();

	useEffect(() => {
		getOneVacancy(id);
	}, [getOneVacancy, id]);

	return (
		<Container>
			<Title text={t('CANDIDATE')} />
			{vacancy && (
				<div>
					<div className={classes.textCenter}>{vacancy.vacancyName}</div>
					<div className={classes.textCenter}>
						{vacancy.skills.map(e => e.name).join(', ')}
					</div>
				</div>
			)}
			<Paper className={classes.root}>
				<HRVacancyMenu classes={classes} id={id} />
				<div className={classes.hrVacancyRoutes}>
					<Switch>
						<Route exact path="/hr/vacancy/:id" component={CandidateList} />
						<Route path="/hr/vacancy/:id/sent" component={SentOffersList} />
						<Route
							path="/hr/vacancy/:id/received"
							component={ReceivedOffersList}
						/>
					</Switch>
				</div>
			</Paper>
		</Container>
	);
};

const mapStateToProps = ({ vacancy }) => {
	return {
		vacancy: vacancy.vacancy,
	};
};

const mapDispatchToProps = {
	getOneVacancy,
};

export default connect(mapStateToProps, mapDispatchToProps)(CandidateByVacancy);
